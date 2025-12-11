import { useFetch } from "@/hooks/useFetch";
import { getDashboard } from "@/lib/api/financeiro";

const DEFAULT_DASHBOARD_ARGS: unknown[] = [];

export const useDashboard = () => {
  const {
    execute: fetchDashboard,
    data,
    isLoading,
    error,
  } = useFetch(getDashboard, {
    errorMessage: "Erro ao trazer os dados!",
    auto: true,
    defaultArgs: DEFAULT_DASHBOARD_ARGS,});

  return {
    fetchDashboard,
    data,
    isLoading,
    error,
  };
};
