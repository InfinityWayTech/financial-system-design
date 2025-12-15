import http from "@/utils/http";
import {
  FinancialDataUpdate,
  DashboardData,
  UploadResponse,
  GetParams,
  PacientNamesResponse,
  ProfissionaisNamesResponse,
  ProductionDataUpdate,
} from "./types/financial";

export const getDashboard = async (): Promise<DashboardData> => {
  const result = await http.get<DashboardData>("/webhook/dashboard");
  return result;
};

export const getPacients = async (): Promise<PacientNamesResponse> => {
  const result = await http.get<PacientNamesResponse>(
    "/webhook/data-name-pacients"
  );
  return result;
};

export const getProfissionais = async (): Promise<ProfissionaisNamesResponse> => {
  const result = await http.get<ProfissionaisNamesResponse>(
    "/webhook/data-name-profissionais"
  );
  return result;
};

export const getDados = async (
  mes: string,
  dia: boolean,
  search?: string,
  profissional?: string
): Promise<GetParams[]> => {
  const result = await http.get<GetParams[]>("/webhook/data", {
    params: {
      mes,
      dia,
      ...(search ? { search } : {}),
      ...(profissional ? { profissional } : {}),
    },
  });
  return result;
};
export const uploadDados = async (
  formData: FormData
): Promise<UploadResponse> => {
  const result = await http.post<UploadResponse>(`/webhook/producao`, formData);
  return result;
};

export const dailyFinancialUpdate = async (
  data: FinancialDataUpdate[]
): Promise<FinancialDataUpdate[]> => {
  const result = await http.put<FinancialDataUpdate[]>(
    `/webhook/daily-financial-update`,
    data
  );
  return result;
};

export const dailyProductionUpdate = async (
  data: ProductionDataUpdate
): Promise<ProductionDataUpdate> => {
  const result = await http.put<ProductionDataUpdate>(
    `/webhook/daily-production-update`,
    data
  );
  return result;
};

export const updateDailyMachineUpdate = async (
  data: { id: string; name: string }[]
): Promise<{ status: string }> => {
  const result = await http.put<{ status: string }>(
    "/webhook/daily-machine-update",
    data
  );
  return result;
};

// export const findAll = async (
// ): Promise<Course>> => {
//   const result = await http.get<Course>('/courses');
//   return result;
// };