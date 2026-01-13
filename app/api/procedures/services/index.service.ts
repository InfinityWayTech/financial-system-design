import { prisma } from "@/lib/prisma";

export async function getProcedures(month: number, year: number) {
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

  const totalProcedimentos = procedimentos.length;

  // Agrupamento por Tipo de Atendimento
  const tiposAtendimentoMap: Record<
    string,
    {
      quantidade: number;
      valorTotal: number;
      valorMedio: number;
      comissaoTotal: number;
      comissaoMedia: number;
    }
  > = {};

  let somaValores = 0;
  let somaComissoes = 0;

  for (const proc of procedimentos) {
    const valor = Number(proc.valor || 0);
    const comissao = Number(proc.comissao || 0);
    somaValores += valor;
    somaComissoes += comissao;

    if (!tiposAtendimentoMap[proc.tipo]) {
      tiposAtendimentoMap[proc.tipo] = {
        quantidade: 0,
        valorTotal: 0,
        valorMedio: 0,
        comissaoTotal: 0,
        comissaoMedia: 0,
      };
    }

    tiposAtendimentoMap[proc.tipo].quantidade += 1;
    tiposAtendimentoMap[proc.tipo].valorTotal += valor;
    tiposAtendimentoMap[proc.tipo].comissaoTotal += comissao;
  }

  for (const tipo in tiposAtendimentoMap) {
    const data = tiposAtendimentoMap[tipo];
    data.valorMedio =
      data.quantidade > 0 ? data.valorTotal / data.quantidade : 0;
    data.comissaoMedia =
      data.quantidade > 0 ? data.comissaoTotal / data.quantidade : 0;
  }

  const valorMedioProcedimento =
    totalProcedimentos > 0 ? somaValores / totalProcedimentos : 0;

  const tabelaTiposAtendimento = Object.entries(tiposAtendimentoMap).map(
    ([tipo, dados]) => ({
      tipo,
      quantidade: dados.quantidade,
      valorTotal: dados.valorTotal,
      valorMedio: dados.valorMedio,
      comissaoTotal: dados.comissaoTotal,
      comissaoMedia: dados.comissaoMedia,
    })
  );

  return {
    totalProcedimentos,
    tiposDeAtendimento: Object.keys(tiposAtendimentoMap),
    valorMedioProcedimento,
    tabelaTiposAtendimento,
  };
}
