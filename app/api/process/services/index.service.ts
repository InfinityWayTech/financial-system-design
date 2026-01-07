import {
  DadosResultado,
  FinanceiroExcel,
  Procedimento,
  ProcessarPayload,
} from "../types";
import * as XLSX from "xlsx";
import {
  converterData,
  unificarPorPaciente,
  verificarDivergencias,
  mesclarComFinanceira,
  agruparPorStatus,
  calcularComissoes,
} from "./logic.service";
import {
  salvarPacientes,
  salvarProcedimentos,
  salvarResumo,
} from "./database.service";

function normalizarBaseSistema(
  dados: Record<string, unknown>[]
): Procedimento[] {
  return dados.map((item) => ({
    "Data Atendimento": converterData(String(item["Data Atendimento"] || "")),
    Paciente: String(item["Paciente"] || ""),
    Profissional: String(item["Profissional"] || ""),
    "Forma de Pagamento": String(item["Forma de Pagamento"] || ""),
    "Valor total do item R$": Number(item["Valor total do item R$"] || 0),
    "Tipo Atendimento": String(item["Tipo Atendimento"] || ""),
  }));
}

function normalizarBaseFinanceira(
  dados: Record<string, unknown>[]
): FinanceiroExcel[] {
  return dados.map((item) => ({
    Paciente: String(item["Paciente"] || ""),
    "Total Geral": Number(item["Total Geral"] || 0),
  }));
}

export async function processarDadosService(
  payload: ProcessarPayload,
  salvarNoBanco: boolean = true
): Promise<DadosResultado> {
  try {
    const workbookSistema = XLSX.read(await payload.baseSister?.arrayBuffer(), {
      type: "buffer",
    }).Sheets["BASE SISTEMA"];

    const workbookFinanceira = XLSX.read(
      await payload.baseFinance?.arrayBuffer(),
      { type: "buffer" }
    );

    const baseSistema = normalizarBaseSistema(
      XLSX.utils.sheet_to_json(workbookSistema)
    );

    const baseFinanceira = normalizarBaseFinanceira(
      XLSX.utils.sheet_to_json(workbookFinanceira)
    );

    const unificado = unificarPorPaciente(baseSistema);
    const mergeado = mesclarComFinanceira(unificado, baseFinanceira);
    const comStatus = verificarDivergencias(mergeado);
    const { ok, divergentes } = agruparPorStatus(comStatus);
    const comComissoes = calcularComissoes(ok);

    const resultado: DadosResultado = {
      dadosOk: comComissoes,
      divergencias: divergentes,
      resumo: {
        totalPacientes: comStatus.length,
        pacientesOk: ok.length,
        pacientesDivergentes: divergentes.length,
        somaComissoes: comComissoes.reduce(
          (acc, p) => acc + (p.totalComissao || 0),
          0
        ),
        somaDivergencias: divergentes.reduce(
          (acc, p) => acc + Math.abs(p.diferenca || 0),
          0
        ),
      },
    };

    if (salvarNoBanco) {
      await Promise.all([
        salvarProcedimentos(comComissoes),
        salvarPacientes(comComissoes, divergentes),
        salvarResumo(resultado.resumo),
      ]);
      console.log("✓ Todos os dados salvos com sucesso!");
    }

    return resultado;
  } catch (erro) {
    console.error("Erro no serviço de dados:", erro);
    throw erro;
  }
}
