export type Procedure = {
  Attendance_date: string;
  Patient: string;
  Professional: string;
  Payment_method: string;
  Total_item_value: number;
  Attendance_type: string;
  comissao?: number;
};

export type Patients = {
  id: string;
  dataAtendimento: string;
  nome: string;
  totalProcedimentos: number;
  totalGeral: number;
  totalComissao: number;
  status: string;
  diferenca?: number;
  procedimentos: Procedimento[];

}

export type Procedimento = {
  id: string;
  dataAtendimento: string;
  paciente: string;
  profissional: string;
  formaPagamento: string;
  valor: number;
  tipo: string;
  comissao?: number;
};

export type BaseData = {
  Patient: string;
  procedures: Procedure[];
  Total_amount: number;
  status?: "OK" | "DIVERGENTE";
  tipo?: "dia" | "mes" | "divergencias";
  diferenca?: number;
  totalComissao?: number;
};

export type ProcessarPayload = {
  baseSister: File;
  baseFinance: File;
  day?: boolean;
};

export type DadosResultado = {
  totalComissao?: number;
  totalPacientes?: number;
  totalProcedimentos?: number;
  ticketMedio?: number;
  taxaConformidade?: number;
};

export type OverviewData = DadosResultado & {
  listDivergentes: BaseData[];
  listOK: BaseData[];
  comissoesPorProfissional: { profissional: string; comissao: number }[];
  formasDePagamento: { forma: string; quantidade: number }[];
};

export type ProfessionalData = {
  profissional: string;
  pacientes: string[];
  quantidadePacientes: number;
  procedimentos: number;
  totalComissao: number;
  mediaPorPaciente: number;
  pacientesDetalhes: {
    paciente: string;
    totalComissao: number;
    totalValor: number;
  }[];
}[];

export type PatientsListData = {
  id: string;
  dataAtendimento: string;
  nome: string;
  totalProcedimentos: number;
  totalGeral: number;
  totalComissao: number;
  status: string;
  diferenca?: number;
  procedimentos: Procedimento[];
}[];

export type DiscrepanciesData = {
  patients: Patients[];
  totalDiscrepancies: number;
  totalValueDiscrepancies: number;
}

export type ProceduresData = {
  totalProcedimentos: number;
  tiposDeAtendimento: string[];
  valorMedioProcedimento: number;
  tabelaTiposAtendimento: {
    tipo: string;
    quantidade: number;
    valorTotal: number;
    valorMedio: number;
    comissaoTotal: number;
    comissaoMedia: number;
  }[];
};