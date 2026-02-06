import { prisma } from "@/lib/prisma";

export const logicService = (dataSistema: any[], dataFinanceiro: any[]) => {


  const porProfissional = dataSistema.reduce(
    (acc, item) => {
      const profissional = item.Profissional?.trim();

      if (!profissional) return acc;

      if (!acc[profissional]) {
        acc[profissional] = {
          nome: profissional,
          totalFaturado: 0,
          quantidadeProcedimentos: 0,
          procedimentos: [],
        };
      }

      const valorTotal = Number(item["Valor total do item R$"] || 0);

      acc[profissional].procedimentos.push({
        paciente: item.Paciente?.trim() || "",
        especialidade: item.Especialidade?.trim() || "",
        formaPagamento: item["Forma de Pagamento"]?.trim() || "",
        tipoAtendimento: item["Tipo Atendimento"]?.trim() || "",
        procedimento: item.Tipo?.trim() || "",
        item: item.Item?.trim() || "",
        quantidade: Number(item.Quantidade || 0),
        dataAtendimento: item["Data Atendimento"] || "",
        horaAtendimento: item["Hora Atendimento"] || "",
        valorTotal,
      });

      acc[profissional].totalFaturado += valorTotal;
      acc[profissional].quantidadeProcedimentos += 1;

      return acc;
    },
    {} as Record<string, []>,
  );

  console.log(porProfissional);
};
