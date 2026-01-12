import { prisma } from "@/lib/prisma";
import {
  PacienteComComissao,
  PacienteComStatus,
} from "../../types";

export async function salvarProcedimentos(pacientes: PacienteComComissao[]) {
  try {
    const procedimentos = pacientes.flatMap((p) =>
      p.procedimentos.map((proc) => ({
        dataAtendimento: proc["Data Atendimento"],
        paciente: p.Paciente,
        profissional: proc.Profissional,
        formaPagamento: proc["Forma de Pagamento"],
        valor: proc["Valor total do item R$"].toString(),
        tipo: proc["Tipo Atendimento"],
        comissao: (proc.comissao || 0).toString(),
      }))
    );

    await prisma.procedimento.createMany({ data: procedimentos });
    console.log(`✓ ${procedimentos.length} procedimentos salvos`);
  } catch (erro) {
    console.error("Erro ao salvar procedimentos:", erro);
    throw erro;
  }
}

export async function salvarPacientes(
  pacientesOk: PacienteComComissao[],
  divergentes: PacienteComStatus[]
) {

  try {
    const dados = [
      ...pacientesOk.map((p) => ({
        dataAtendimento: (p as any).procedimentos[0]["Data Atendimento"],
        nome: p.Paciente,
        totalProcedimentos: p.procedimentos.length.toString(),
        totalGeral: p["Total Geral"].toString(),
        totalComissao: p.totalComissao.toString(),
        status: "OK" as const,
        diferenca: "0",
      })),
      ...divergentes.map((d) => ({
        dataAtendimento: (d as any).procedimentos[0]["Data Atendimento"],
        nome: d.Paciente,
        totalProcedimentos: d.procedimentos.length.toString(),
        totalGeral: d["Total Geral"].toString(),
        totalComissao: "0",
        status: "DIVERGENTE" as const,
        diferenca: (d.diferenca || 0).toString(),
      })),
    ];

    await prisma.paciente.createMany({ data: dados });
    console.log(`✓ ${dados.length} pacientes salvos`);
  } catch (erro) {
    console.error("Erro ao salvar pacientes:", erro);
    throw erro;
  }
}