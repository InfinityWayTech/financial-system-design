// services/logic.service.ts
import { REGRAS_COMISSAO } from "../utils";
import {
  FinanceiroExcel,
  Procedimento,
  PacienteUnificado,
  PacienteMergeado,
  PacienteComStatus,
  PacienteComComissao,
} from "../types";

export function converterData(data: string): string {
  if (!data || !data.includes("/")) return data;
  const [dia, mes, ano] = data.split("/");
  return `${ano}-${mes}-${dia}`;
}

export function unificarPorPaciente(
  procedimentos: Procedimento[]
): PacienteUnificado[] {
  const grupos = procedimentos.reduce((acc, item) => {
    const paciente = item.Paciente?.trim() || "Desconhecido";
    if (!acc[paciente]) {
      acc[paciente] = { procedimentos: [], soma: 0 };
    }
    acc[paciente].procedimentos.push(item);
    acc[paciente].soma += Number(item["Valor total do item R$"] || 0);
    return acc;
  }, {} as Record<string, { procedimentos: Procedimento[]; soma: number }>);

  return Object.entries(grupos).map(([Paciente, { procedimentos, soma }]) => ({
    Paciente,
    somaProcedimentos: soma,
    procedimentos,
  }));
}

export function mesclarComFinanceira(
  sistema: PacienteUnificado[],
  financeira: FinanceiroExcel[]
): PacienteMergeado[] {
  return sistema.map((item) => {
    const fin = financeira.find(
      (f) => f.Paciente?.trim() === item.Paciente?.trim()
    );
    return {
      ...item,
      "Total Geral": fin?.["Total Geral"] || item.somaProcedimentos,
    };
  });
}

export function verificarDivergencias(
  dados: PacienteMergeado[]
): PacienteComStatus[] {
  return dados.map((item) => {
    const totalGeral = Number(item["Total Geral"] || 0);
    const totalProc = Number(item.somaProcedimentos || 0);
    const temDivergencia = totalGeral !== totalProc;

    return {
      ...item,
      status: temDivergencia ? "DIVERGENTE" : "OK",
      tipo: temDivergencia ? "divergencias" : "mes",
      ...(temDivergencia && { diferenca: totalProc - totalGeral }),
    };
  });
}

export function calcularComissoes(
  pacientes: PacienteComStatus[]
): PacienteComComissao[] {
  return pacientes.map((paciente) => {
    let totalComissao = 0;

    const porProfissional = paciente.procedimentos.reduce((acc, proc) => {
      const prof = proc.Profissional;
      if (!acc[prof]) acc[prof] = [];
      acc[prof].push(proc);
      return acc;
    }, {} as Record<string, Procedimento[]>);

    Object.entries(porProfissional).forEach(([prof, procs]) => {
      const regra = REGRAS_COMISSAO[prof];
      if (!regra) return;

      procs.forEach((proc) => {
        const valor = Number(proc["Valor total do item R$"] || 0);
        const tipo = (proc["Tipo Atendimento"] || "").toLowerCase();

        let comissao = 0;
        if (tipo.includes("protocolo") && regra.protocolo_injetavel) {
          comissao = valor * regra.protocolo_injetavel;
        } else if (tipo.includes("consulta") && regra.consulta) {
          comissao = valor * regra.consulta;
        } else if (tipo.includes("implante") && regra.implante) {
          comissao = valor * regra.implante;
        }

        proc.comissao = Number(comissao.toFixed(2));
        totalComissao += comissao;
      });
    });

    return {
      ...paciente,
      totalComissao: Number(totalComissao.toFixed(2)),
    };
  });
}

export function agruparPorStatus(dados: PacienteComStatus[]) {
  return {
    ok: dados.filter((d) => d.status === "OK"),
    divergentes: dados.filter((d) => d.status === "DIVERGENTE"),
  };
}
