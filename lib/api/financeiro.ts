import http from "@/utils/http";
import { DadosResultado, OverviewData } from "./types/financial";

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