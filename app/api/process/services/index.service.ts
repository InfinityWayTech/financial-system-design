"use server";

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
} from "./molecules/logic.service";
import {
  salvarPacientes,
  salvarProcedimentos,
  salvarResumo,
} from "./molecules/database.service";
import { prisma } from "@/lib/prisma";

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

export async function getSummaryService(
  month: number,
  year: number
): Promise<{
  totalComissao: number;
  totalPacientes: number;
  totalProcedimentos: number;
  ticketMedio: number;
  taxaConformidade: number;
}> {
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 1);

  const summaries = await prisma.resumo.findMany({
    where: {
      createdAt: {
        gte: startDate,
        lt: endDate,
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  if (summaries.length === 0) {
    return {
      totalComissao: 0,
      totalPacientes: 0,
      totalProcedimentos: 0,
      ticketMedio: 0,
      taxaConformidade: 0,
    };
  }

  let aggregatedTotalComissao = 0;
  let aggregatedTotalPacientes = 0;
  let aggregatedPacientesOk = 0;

  for (const s of summaries) {
    aggregatedTotalComissao += s.somaComissoes?.toNumber() || 0;
    aggregatedTotalPacientes += s.totalPacientes || 0;
    aggregatedPacientesOk += s.pacientesOk || 0;
  }

  const totalComissao = aggregatedTotalComissao;
  const totalPacientes = aggregatedTotalPacientes;
  const totalProcedimentos = aggregatedPacientesOk;

  const ticketMedio =
    totalProcedimentos > 0 ? totalComissao / totalProcedimentos : 0;
  const taxaConformidade =
    totalPacientes > 0 ? (totalProcedimentos / totalPacientes) * 100 : 0;

  return {
    totalComissao,
    totalPacientes,
    totalProcedimentos,
    ticketMedio,
    taxaConformidade,
  };
}
