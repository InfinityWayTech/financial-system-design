import { prisma } from "@/lib/prisma";

export async function getOverview(month: number, year: number) {
  const pacientes = await prisma.paciente.findMany({
    where: {
      dataAtendimento: {
        contains: `${year}-${String(month).padStart(2, "0")}`,
      },
    },
    orderBy: {
      dataAtendimento: "asc",
    },
  });

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

  const comissoesPorProfissional = procedimentos.reduce((acc, p) => {
    const existing = acc.find((item) => item.profissional === p.profissional);
    if (existing) {
      existing.comissao += Number(p.comissao) || 0;
    } else {
      acc.push({
        profissional: p.profissional,
        comissao: Number(p.comissao) || 0,
      });
    }
    return acc;
  }, [] as { profissional: string; comissao: number }[]);

  const formasDePagamento = procedimentos.map((p) => p.formaPagamento);
  const listDivergentes = pacientes.filter((p) => p.status === "DIVERGENTE");
  const listOK = pacientes.filter((p) => p.status === "OK");

  return {
    listDivergentes,
    listOK,
    comissoesPorProfissional,
    formasDePagamento,
  };
}
