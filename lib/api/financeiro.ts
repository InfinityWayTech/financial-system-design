import http from "@/utils/http";
import { DadosResultado } from "./types/financial";

export const postProcessar = async (
  formData: FormData
): Promise<DadosResultado> => {
  const result = await http.post<DadosResultado>("/api/process", formData);
  return result;
};
