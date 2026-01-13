import http from "@/utils/http";
import { DadosResultado, OverviewData, PatientsListData, ProfessionalData } from "./types/financial";

export const postProcessar = async (
  formData: FormData
): Promise<DadosResultado> => {
  const result = await http.post<DadosResultado>("/api/process", formData);
  return result;
};

export const getSummary = async (
  month: number,
  year: number
): Promise<DadosResultado> => {
  const result = await http.get<DadosResultado>(
    `/api/process/?month=${month}&year=${year}`
  );
  return result;
};

export const getOverview = async (
  month: number,
  year: number
): Promise<OverviewData> => {
  const result = await http.get<OverviewData>(
    `/api/overview/?month=${month}&year=${year}`
  );
  return result;
};

export const getProfessional = async (
  month: number,
  year: number
): Promise<ProfessionalData> => {
  const result = await http.get<ProfessionalData>(
    `/api/professional/?month=${month}&year=${year}`
  );
  return result;
};

export const getPatients = async (
  month: number,
  year: number
): Promise<PatientsListData> => {
  const result = await http.get<PatientsListData>(
    `/api/patient/?month=${month}&year=${year}`
  );
  return result;
};