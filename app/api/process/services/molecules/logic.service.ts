
import { REGRAS_COMISSAO } from "../../utils";
import {
  FinanceiroExcel,
  Procedimento,
  PacienteUnificado,
  PacienteMergeado,
  PacienteComStatus,
  PacienteComComissao,
} from "../../types";
import { prisma } from "@/lib/prisma";

export function converterData(data: string): string {
  if (!data) return data;
  
  // Se já está no formato ISO (YYYY-MM-DD)
  if (/^\d{4}-\d{2}-\d{2}$/.test(data)) return data;
  
  // Se está no formato brasileiro (DD/MM/YYYY)
  if (data.includes("/")) {
    const [dia, mes, ano] = data.split("/");
    return `${ano}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;
  }
  
  return data;
}

export function unificarPorPaciente(
  procedimentos: Procedimento[]
): PacienteUnificado[] {
  const grupos = procedimentos.reduce((acc, item) => {
    const paciente = item.Paciente?.trim() || "Desconhecido";
    if (!acc[paciente]) {
      acc[paciente] = { procedimentos: [] };
    }
    acc[paciente].procedimentos.push(item);
    return acc;
  }, {} as Record<string, { procedimentos: Procedimento[] }>);

  return Object.entries(grupos).map(([Paciente, { procedimentos }]) => ({
    Paciente,
    procedimentos,
  }));
}

export async function verificarSeJaEstarNoBanco(
  sistema: PacienteUnificado[]
): Promise<boolean> {
  const dataSistema = sistema[0]?.procedimentos[0]?.["Data Atendimento"];

  const existeSistema = dataSistema
    ? await prisma.procedimento.findFirst({
        where: { dataAtendimento: converterData(dataSistema) },
        select: { id: true },
      })
    : null;

  return !!existeSistema;
}

export function mesclarComFinanceira(
  sistema: PacienteUnificado[],
  financeira: FinanceiroExcel[]
): PacienteMergeado[] {
  return sistema.map((item) => {
    const fin = financeira.find(
      (f) => f.Paciente?.trim() === item.Paciente?.trim()
    );
    return {
      ...item,
      "Total Geral": fin?.["Total Geral"] ?? 0,
    };
  });
}

export function verificarDivergencias(
  dados: PacienteMergeado[]
): PacienteComStatus[] {
  return dados.map((item) => {
    const totalGeral = Number(item["Total Geral"] || 0);
    const totalProc = item.procedimentos.reduce(
      (acc, proc) => acc + Number(proc["Valor total do item R$"] || 0),
      0
    );
    
    // Tolerância de R$ 0.01 para arredondamento
    const temDivergencia = Math.abs(totalGeral - totalProc) > 0.01;

    return {
      ...item,
      status: temDivergencia ? "DIVERGENTE" : "OK",
      tipo: temDivergencia ? "divergencias" : "mes",
      ...(temDivergencia && { 
        diferenca: Number((totalProc - totalGeral).toFixed(2)) 
      }),
    };
  });
}

function identificarTipoProcedimento(tipo: string, descricao?: string): string {
  const tipoLower = tipo.toLowerCase();
  const descLower = (descricao || '').toLowerCase();
  const combinado = `${tipoLower} ${descLower}`;
  
  // Identificações específicas
  if (combinado.includes('mounjaro') && combinado.includes('importado')) {
    return 'mounjaro_importado';
  }
  if (combinado.includes('mounjaro') && combinado.includes('manipulado')) {
    return 'mounjaro_manipulado';
  }
  if (combinado.includes('slim')) {
    return 'protocolo_slim';
  }
  if (combinado.includes('enzima')) {
    return 'enzimas';
  }
  if (combinado.includes('calorimetria')) {
    return 'calorimetria';
  }
  if (combinado.includes('implante')) {
    return 'implante';
  }
  if (combinado.includes('reembolso')) {
    return 'reembolso';
  }
  
  // Consultas
  if (combinado.includes('consulta')) {
    if (combinado.includes('protocolo')) return 'consulta_protocolo';
    if (combinado.includes('plano')) return 'consulta_plano';
    return 'consulta';
  }
  
  // Protocolos
  if (combinado.includes('protocolo')) {
    if (combinado.includes('injetavel') || combinado.includes('injetável')) {
      return 'protocolo_injetavel';
    }
    if (combinado.includes('prescri')) {
      return 'protocolo_prescricao';
    }
    if (combinado.includes('atendimento')) {
      return 'protocolo_atendimento';
    }
    return 'outros_protocolos';
  }
  
  return 'outros';
}

function calcularComissaoProcedimento(
  procedimento: Procedimento,
  regra: Record<string, number>
): number {
  const valor = Number(procedimento["Valor total do item R$"] || 0);
  const tipoProcedimento = identificarTipoProcedimento(
    procedimento["Tipo Atendimento"] || ''
  );

  // Busca a regra específica (com aliases/fallbacks)
  const aliases: Record<string, string[]> = {
    // No seu `REGRAS_COMISSAO`, o Alan usa `consulta_base`, mas o identificador retorna `consulta`
    consulta: ["consulta", "consulta_base"],
    consulta_plano: ["consulta_plano", "consulta", "consulta_base"],
    consulta_protocolo: ["consulta_protocolo", "consulta", "consulta_base"],
  };

  const chavesParaTentar = aliases[tipoProcedimento]
    ? aliases[tipoProcedimento]
    : [tipoProcedimento];

  const chaveEncontrada = chavesParaTentar.find((k) => regra[k] !== undefined);
  const percentualOuValor =
    chaveEncontrada !== undefined ? regra[chaveEncontrada] : undefined;

  if (percentualOuValor === undefined) return 0;
  
  // Se for menor que 1, é percentual; se não, é valor fixo
  if (percentualOuValor < 1) {
    return valor * percentualOuValor;
  } else {
    return percentualOuValor;
  }
}

export function calcularComissoes(
  pacientes: PacienteComStatus[]
): PacienteComComissao[] {
  // Primeiro passa: calcula comissões individuais
  const pacientesComComissao = pacientes.map((paciente) => {
    const porProfissional = paciente.procedimentos.reduce((acc, proc) => {
      const prof = proc.Profissional;
      if (!acc[prof]) acc[prof] = [];
      acc[prof].push(proc);
      return acc;
    }, {} as Record<string, Procedimento[]>);

    let totalComissao = 0;

    Object.entries(porProfissional).forEach(([prof, procs]) => {
      const regra = REGRAS_COMISSAO[prof];
      if (!regra) {
        console.warn(`⚠️  Regra não encontrada para: ${prof}`);
        return;
      }

      procs.forEach((proc) => {
        const comissao = calcularComissaoProcedimento(proc, regra);
        proc.comissao = Number(comissao.toFixed(2));
        totalComissao += comissao;
      });
    });

    return {
      ...paciente,
      totalComissao: Number(totalComissao.toFixed(2)),
    };
  });

  // Segunda passa: aplica valores fixos mensais
  const itensPorProfissional: Record<string, { proc: Procedimento }[]> = {};

  pacientesComComissao.forEach((paciente) => {
    paciente.procedimentos.forEach((proc) => {
      const prof = proc.Profissional;
      if (!itensPorProfissional[prof]) itensPorProfissional[prof] = [];
      itensPorProfissional[prof].push({ proc });
    });
  });

  // Aplica o fixo mensal (mínimo garantido) redistribuindo a diferença
  Object.entries(itensPorProfissional).forEach(([prof, itens]) => {
    const regra = REGRAS_COMISSAO[prof];
    const fixo = regra?.fixo;
    if (!fixo) return;

    const somaAtual = itens.reduce((acc, it) => acc + Number(it.proc.comissao || 0), 0);
    if (somaAtual >= fixo) return;

    const delta = Number((fixo - somaAtual).toFixed(2));
    if (delta <= 0) return;

    // Distribuição proporcional ao que já existe; se tudo for 0, distribui igualmente
    const baseDistribuicao = somaAtual > 0 ? somaAtual : itens.length;
    if (baseDistribuicao <= 0) return;

    let acumulado = 0;
    itens.forEach((it, idx) => {
      const atual = Number(it.proc.comissao || 0);
      const peso = somaAtual > 0 ? atual : 1;
      const acrescimoBruto = (delta * peso) / baseDistribuicao;
      const acrescimo = Number(acrescimoBruto.toFixed(2));

      // Para evitar erro de arredondamento, ajusta o último item com o restante
      if (idx === itens.length - 1) {
        const restante = Number((delta - acumulado).toFixed(2));
        it.proc.comissao = Number((atual + restante).toFixed(2));
      } else {
        it.proc.comissao = Number((atual + acrescimo).toFixed(2));
        acumulado = Number((acumulado + acrescimo).toFixed(2));
      }
    });
  });

  // Recalcula o total por paciente depois de aplicar o fixo
  return pacientesComComissao.map((p) => {
    const total = p.procedimentos.reduce(
      (acc, proc) => acc + Number(proc.comissao || 0),
      0
    );
    return {
      ...p,
      totalComissao: Number(total.toFixed(2)),
    };
  });
}

export function agruparPorStatus(dados: PacienteComStatus[]) {
  return {
    ok: dados.filter((d) => d.status === "OK"),
    divergentes: dados.filter((d) => d.status === "DIVERGENTE"),
  };
}