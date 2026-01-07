export interface ProcessarPayload {
  baseSister: File;
  baseFinance: File;
}

export interface ProcedimentoExcel {
  "Data Atendimento": string;
  "Paciente": string;
  "Profissional": string;
  "Forma de Pagamento": string;
  "Valor total do item R$": number;
  "Tipo Atendimento": string;
}

export interface FinanceiroExcel {
  "Paciente": string;
  "Total Geral": number;
}

// Dados normalizados para processamento
export interface Procedimento extends ProcedimentoExcel {
  comissao?: number;
}

export interface PacienteUnificado {
  Paciente: string;
  somaProcedimentos: number;
  procedimentos: Procedimento[];
}

export interface PacienteMergeado extends PacienteUnificado {
  "Total Geral": number;
}

export interface PacienteComStatus extends PacienteMergeado {
  status: "OK" | "DIVERGENTE";
  tipo: "mes" | "divergencias";
  diferenca?: number;
}

export interface PacienteComComissao extends PacienteComStatus {
  totalComissao: number;
}

export interface DadosResultado {
  dadosOk: PacienteComComissao[];
  divergencias: PacienteComStatus[];
  resumo: {
    totalPacientes: number;
    pacientesOk: number;
    pacientesDivergentes: number;
    somaComissoes: number;
    somaDivergencias: number;
  };
}