import {
  DadosResultado,
  DiscrepanciesData,
  OverviewData,
  PatientsListData,
  ProceduresData,
  ProfessionalData,
} from "./types/financial";

export const postProcessar = async (
  formData: FormData,
): Promise<DadosResultado> => {
  const result = await fetch("/api/process", {
    method: "POST",
    body: formData,
  });
  return result.json();
};

export const getSummary = async (
  month: number,
  year: number,
): Promise<DadosResultado> => {
  const result = await fetch(`/api/process/?month=${month}&year=${year}`);
  return result.json();
};

export const getOverview = async (
  month: number,
  year: number,
): Promise<OverviewData> => {
  const result = await fetch(`/api/overview/?month=${month}&year=${year}`);
  return result.json();
};

export const getProfessional = async (
  month: number,
  year: number,
): Promise<ProfessionalData> => {
  const result = await fetch(`/api/professional/?month=${month}&year=${year}`);
  return result.json();
};

export const getPatients = async (
  month: number,
  year: number,
): Promise<PatientsListData> => {
  const result = await fetch(`/api/patient/?month=${month}&year=${year}`);
  return result.json();
};

export const getDiscrepancies = async (
  month: number,
  year: number,
): Promise<DiscrepanciesData> => {
  const result = await fetch(`/api/discrepancies/?month=${month}&year=${year}`);
  return result.json();
};

export const getProcedures = async (
  month: number,
  year: number,
): Promise<ProceduresData> => {
  const result = await fetch(`/api/procedures/?month=${month}&year=${year}`);
  return result.json();
};
