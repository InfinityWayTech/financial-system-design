import { useFetch } from "@/hooks/useFetch";
import { getSummary } from "@/lib/api/financeiro";
import { useMemo } from "react";

export const useDashboard = (month: number, year: number) => {
  const fetchOptions = useMemo(() => ({
    errorMessage: "Erro ao trazer os dados!",
    auto: true,
    defaultArgs: [month, year],
  }), [month, year]);

  const {
    execute: fetchDashboard,
    data,
    isLoading,
    error,
  } = useFetch(getSummary, fetchOptions);

  return {
    fetchDashboard,
    data,
    isLoading,
    error,
  };
};
