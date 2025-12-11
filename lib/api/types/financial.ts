export type ProductionData = {
  id?: number;
  data_atendimento: string;
  hora_atendimento: string;
  codigo_atendimento: string;
  paciente: string;
  idade: number;
  id_amigo: string;
  matricula: string;
  profissional: string;
  especialidade: string;
  cbo: string;
  solicitante: string;
  executante: string;
  forma_pagamento: string;
  lancamento: number;
  numero_parcela: number;
  qtd_parcelas: number;
  nsu_doc_cv_id: string;
  observacao_financeira: string;
  tipo_atendimento: string;
  unidade: string;
  tipo: string;
  item: string;
  quantidade: number;
  valor_item: number;
  desconto: number;
  valor_total_item: number;
  nota_emitida: string;
  numero_lote: string;
  valor_pago: number;
  ano_atendimento: number;
  mes_atendimento: number;
  ano_envio: number;
  mes_envio: number;
  ano_pagamento: number;
  mes_pagamento: number;
  criado_em?: string;
  atualizado_em?: string;
  nutri: boolean;
  obs: string;
  pendencia: boolean;
};

export type MachineData = {
  id: string;
  authorization: string;
  card_machine: string;
  pacienteName: string;
  data_atendimento: string;
};

export type FinancialData = {
  id: number;
  data: string;
  paciente: string;
  obs: string;
  cartao: number;
  credito_em_conta: number;
  dinheiro: number;
  pendente: boolean;
  total_geral: number;
};

export type DashboardData = {
  receita_Total: string;
  valores_Pendentes: number;
  total_Cartao: string;
  total_Dinheiro: string;
  credito_em_conta: string;
  receitas_por_perido: [];
};

export type GetParams = {
  mes: string;
  dia: boolean;
  search?: string;
};

export type GetAll = {
  data_financial: FinancialData[];
  data_production: ProductionData[];
  data_machine: MachineData[];
};

export type PacientNameItem = {
  paciente: string;
};

export type PacientNamesResponse = {
  names: PacientNameItem[];
};

export type UploadResponse = {
  data: MachineData;
}[];

export type FinancialDataUpdate = {
  id?: number;
  nutri: boolean;
  obs: string;
  pendencia: boolean;
};
