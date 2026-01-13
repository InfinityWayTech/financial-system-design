import { prisma } from "@/lib/prisma";

export async function getPatient(month: number, year: number) {
  const patients = await prisma.paciente.findMany({
    where: {
      dataAtendimento: {
        contains: `${year}-${String(month).padStart(2, "0")}`,
      },
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

  return pacientesComDetalhes;
}
