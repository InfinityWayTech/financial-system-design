import http from "@/utils/http";
import { DadosResultado } from "./types/financial";

export const postProcessar = async (
  formData: FormData
): Promise<DadosResultado> => {
  const result = await http.post<DadosResultado>("/api/process", formData);
  return result;
};

export const getSummary = async (
  month: number,
  year: number
): Promise<DadosResultado["resumo"]> => {
  const result = await http.get<DadosResultado>(
    `/api/process/?month=${month}&year=${year}`
  );
  return result.resumo;
};
