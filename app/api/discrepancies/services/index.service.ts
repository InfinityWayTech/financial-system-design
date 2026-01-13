import { prisma } from "@/lib/prisma";

export async function getDiscrepancies(month: number, year: number) {
  const patients = await prisma.paciente.findMany({
    where: {
      dataAtendimento: {
        contains: `${year}-${String(month).padStart(2, "0")}`,
      },
      status: "DIVERGENTE",
    },
    orderBy: {
      nome: "asc",
    },
  });

  const procedimentos = await prisma.procedimento.findMany({
    where: {
      dataAtendimento: {
        contains: `${year}-${String(month).padStart(2, "0")}`,
      },
    },
    orderBy: {
      paciente: "asc",
    },
  });

  const pacientesComDetalhes = patients.map((paciente) => {
    const detalhesProcedimentos = procedimentos.filter(
      (proc) => proc.paciente === paciente.nome
    );
    return {
      ...paciente,
      procedimentos: detalhesProcedimentos,
    };
  });

  const totalDiscrepancies = pacientesComDetalhes.length;
  const totalValueDiscrepancies = pacientesComDetalhes.reduce(
    (sum, patient) => sum + Number(patient.diferenca || 0),
    0
  );

  return {
    patients: pacientesComDetalhes,
    totalDiscrepancies,
    totalValueDiscrepancies,
  };
}
