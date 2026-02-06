"use server";

import { prisma } from "@/lib/prisma";

export async function getProfessional(month: number, year: number) {
  const procedimentos = await prisma.procedimento.findMany({
    where: {
      dataAtendimento: {
        contains: `${year}-${String(month).padStart(2, "0")}`,
      },
    },
    orderBy: {
      profissional: "asc",
    },
  });

  const profissionaisMap = new Map<
    string,
    {
      profissional: string;
      pacientes: Set<string>;
      procedimentos: number;
      totalComissao: number;
      totalValor: number;
      comissoesPorPaciente: Record<
        string,
        { totalComissao: number; totalValor: number }
      >;
    }
  >();

  for (const proc of procedimentos) {
    if (!profissionaisMap.has(proc.profissional)) {
      profissionaisMap.set(proc.profissional, {
        profissional: proc.profissional,
        pacientes: new Set(),
        procedimentos: 0,
        totalComissao: 0,
        totalValor: 0,
        comissoesPorPaciente: {},
      });
    }
    const prof = profissionaisMap.get(proc.profissional)!;
    prof.pacientes.add(proc.paciente);
    prof.procedimentos += 1;
    prof.totalComissao += Number(proc.comissao) || 0;
    prof.totalValor += Number(proc.valor) || 0;
    if (!prof.comissoesPorPaciente[proc.paciente]) {
      prof.comissoesPorPaciente[proc.paciente] = {
        totalComissao: 0,
        totalValor: 0,
      };
    }
    prof.comissoesPorPaciente[proc.paciente].totalComissao +=
      Number(proc.comissao) || 0;
    prof.comissoesPorPaciente[proc.paciente].totalValor +=
      Number(proc.valor) || 0;
  }

  const resultado = Array.from(profissionaisMap.values()).map((prof) => {
    const mediaPorPaciente =
      prof.pacientes.size > 0 ? prof.totalComissao / prof.pacientes.size : 0;
    return {
      profissional: prof.profissional,
      pacientes: Array.from(prof.pacientes),
      quantidadePacientes: prof.pacientes.size,
      procedimentos: prof.procedimentos,
      totalComissao: prof.totalComissao,
      mediaPorPaciente,
      pacientesDetalhes: Object.entries(prof.comissoesPorPaciente).map(
        ([paciente, valores]) => ({
          paciente,
          totalComissao: valores.totalComissao,
          totalValor: valores.totalValor,
          porcentagemComissao:
            valores.totalValor > 0
              ? (valores.totalComissao / valores.totalValor) * 100
              : 0,
        })
      ),
    };
  });

  return resultado;
}
