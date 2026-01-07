export type Procedure = {
  Attendance_date: string;
  Patient: string;
  Professional: string;
  Payment_method: string;
  Total_item_value: number;
  Attendance_type: string;
  comissao?: number;
}

export type BaseData = {
  Patient: string;
  procedures: Procedure[];
  Total_amount: number;
  status?: "OK" | "DIVERGENTE";
  tipo?: "dia" | "mes" | "divergencias";
  diferenca?: number;
  totalComissao?: number;
}

export type ProcessarPayload = {
  baseSister: File;
  baseFinance: File;
  day?: boolean;
}

export type DadosResultado = {
  dadosOk: BaseData[];
  divergencias: BaseData[];
  resumo: {
    totalPacientes: number;
    pacientesOk: number;
    pacientesDivergentes: number;
    somaComissoes: number;
    somaDivergencias: number;
  };
}