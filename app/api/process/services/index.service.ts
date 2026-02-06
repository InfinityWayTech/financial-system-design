"use server";

import { FinanceiroExcel, Procedimento, ProcessarPayload } from "../types";
import * as XLSX from "xlsx";
import { logicService } from "./molecules/logic.service";
import {
  salvarPacientes,
  salvarProcedimentos,
} from "./molecules/database.service";
import { prisma } from "@/lib/prisma";

export async function processarDadosService(
  payload: ProcessarPayload,
): Promise<void> {
  try {
    const sistemaWorkbook = XLSX.read(await payload.baseSister?.arrayBuffer(), {
      type: "buffer",
    });
    const primeiraSistema =
      sistemaWorkbook.Sheets[sistemaWorkbook.SheetNames[0]];
    const dadosSistema = XLSX.utils.sheet_to_json(primeiraSistema);

    const financeiroWorkbook = XLSX.read(
      await payload.baseFinance?.arrayBuffer(),
      { type: "buffer" },
    );
    const primeiraFinanceira =
      financeiroWorkbook.Sheets[financeiroWorkbook.SheetNames[0]];
    const dadosFinanceiro = XLSX.utils.sheet_to_json(primeiraFinanceira);

    logicService(dadosSistema, dadosFinanceiro);

    // const unificado = unificarPorPaciente(baseSistema);
    // const jaExisteNoBanco = await verificarSeJaEstarNoBanco(unificado);

    // if (jaExisteNoBanco) {
    //   throw new Error("Dados já existem no banco de dados.");
    // }

    // const mergeado = mesclarComFinanceira(unificado, baseFinanceira);
    // const comStatus = verificarDivergencias(mergeado);
    // const { ok, divergentes } = agruparPorStatus(comStatus);

    // const comComissoes = await calcularComissoes(ok);

    // await Promise.all([
    //   salvarProcedimentos(comComissoes),
    //   salvarPacientes(comComissoes, divergentes),
    // ]);

    return primeiraFinanceira["cols"];
  } catch (erro) {
    console.error("Erro no serviço de dados:", erro);
    throw erro;
  }
}

export async function getSummaryService(
  month: number,
  year: number,
): Promise<{
  totalComissao: number;
  totalPacientes: number;
  totalProcedimentos: number;
  ticketMedio: number;
  taxaConformidade: number;
}> {
  const procedimentos = await prisma.paciente.findMany({
    where: {
      dataAtendimento: {
        contains: `${year}-${String(month).padStart(2, "0")}`,
      },
    },
    orderBy: {
      dataAtendimento: "asc",
    },
  });

  const totalProcedimentos = procedimentos.reduce(
    (acc, s) => acc + Number(s.totalProcedimentos?.toString() || 0),
    0,
  );
  const totalComissao = procedimentos.reduce(
    (acc, s) => acc + Number(s.totalComissao?.toString() || 0),
    0,
  );
  const totalPacientes = procedimentos.length;
  const ticketMedio =
    totalProcedimentos > 0 ? totalComissao / totalProcedimentos : 0;
  const taxaConformidade =
    totalPacientes > 0
      ? (procedimentos.filter((p) => p.status === "OK").length /
          totalPacientes) *
        100
      : 0;

  return {
    totalComissao,
    totalPacientes,
    totalProcedimentos,
    ticketMedio,
    taxaConformidade,
  };
}
