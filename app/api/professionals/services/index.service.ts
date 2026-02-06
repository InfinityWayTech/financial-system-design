import { Commission, Premiacao, Profissional } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

export const getProfessionals = async ({ search }: { search?: string }) => {
  const professionals = await prisma.profissional.findMany({
    where: {
      nome: {
        contains: search || "",
        mode: "insensitive",
      },
    },
    orderBy: {
      nome: "asc",
    },
  });

  return professionals;
};

export const postProfessional = async ({
  data,
}: {
  data: Profissional & { comissoes?: Commission[]; premiacoes?: Premiacao[] };
}) => {
  const professional = await prisma.profissional.create({
    data: {
      nome: data.nome,
      tipo: data.tipo,
      nivel: data.nivel,
      aluguelFixo: data.aluguelFixo,
    },
  });

  const comissoesData =
    data.comissoes?.map((comissao) => ({
      categoria: comissao.categoria,
      tipoCalculo: comissao.tipoCalculo,
      percentual: comissao.percentual,
      valorFixo: comissao.valorFixo,
      tabelaProgressiva: comissao.tabelaProgressiva ?? undefined,
      ativo: comissao.ativo,
      profissionalId: professional.id,
    })) || [];

  const premiacoesData =
    data.premiacoes?.map((premiacao) => ({
      tipo: premiacao.tipo,
      descricao: premiacao.descricao,
      tabelaFaixas: premiacao.tabelaFaixas ?? undefined,
      bonusMetaIndividual: premiacao.bonusMetaIndividual,
      metaIndividual: premiacao.metaIndividual,
      ativo: premiacao.ativo,
      profissionalId: professional.id,
    })) || [];

  await prisma.commission.createMany({
    data: comissoesData,
  });

  await prisma.premiacao.createMany({
    data: premiacoesData,
  });

  return professional;
};
