import { PrismaClient } from "@prisma/client";
import {
  DadosResultado,
  PacienteComComissao,
  PacienteComStatus,
} from "../types";

const prisma = new PrismaClient();

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
        nome: p.Paciente,
        totalProcedimentos: p.somaProcedimentos.toString(),
        totalGeral: p["Total Geral"].toString(),
        totalComissao: p.totalComissao.toString(),
        status: "OK" as const,
        diferenca: "0",
      })),
      ...divergentes.map((d) => ({
        nome: d.Paciente,
        totalProcedimentos: d.somaProcedimentos.toString(),
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

export async function salvarResumo(resumo: DadosResultado["resumo"]) {
  try {
    await prisma.resumo.create({
      data: {
        totalPacientes: resumo.totalPacientes,
        pacientesOk: resumo.pacientesOk,
        pacientesDivergentes: resumo.pacientesDivergentes,
        somaComissoes: resumo.somaComissoes.toString(),
        somaDivergencias: resumo.somaDivergencias.toString(),
      },
    });
    console.log("✓ Resumo salvo");
  } catch (erro) {
    console.error("Erro ao salvar resumo:", erro);
    throw erro;
  }
}
