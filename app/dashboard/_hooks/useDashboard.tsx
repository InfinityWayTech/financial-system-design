import { useFetch } from "@/hooks/useFetch";
import { getOverview, getPatients, getProfessional, getSummary } from "@/lib/api/financeiro";
import { useMemo } from "react";

export const useSummary = (month: number, year: number) => {
  const fetchOptions = useMemo(
    () => ({
      errorMessage: "Erro ao trazer os dados!",
      auto: true,
      defaultArgs: [month, year],
    }),
    [month, year]
  );

  const {
    execute: fetchSummary,
    data,
    isLoading,
    error,
  } = useFetch(getSummary, fetchOptions);

  return {
    fetchSummary,
    data,
    isLoading,
    error,
  };
};

export const useOverview = (month: number, year: number) => {
  const fetchOptions = useMemo(
    () => ({
      errorMessage: "Erro ao trazer os dados!",
      auto: true,
      defaultArgs: [month, year],
    }),
    [month, year]
  );

  const {
    execute: fetchOverview,
    data,
    isLoading,
    error,
  } = useFetch(getOverview, fetchOptions);

  return {
    fetchOverview,
    data,
    isLoading,
    error,
  };
};

export const useProfessional = (month: number, year: number) => {
  const fetchOptions = useMemo(
    () => ({
      errorMessage: "Erro ao trazer os dados!",
      auto: true,
      defaultArgs: [month, year],
    }),
    [month, year]
  );

  const {
    execute: fetchProfessional,
    data,
    isLoading,
    error,
  } = useFetch(getProfessional, fetchOptions);

  return {
    fetchProfessional,
    data,
    isLoading,
    error,
  };
};

export const usePatients = (month: number, year: number) => {
  const fetchOptions = useMemo(
    () => ({
      errorMessage: "Erro ao trazer os dados!",
      auto: true,
      defaultArgs: [month, year],
    }),
    [month, year]
  );

  const {
    execute: fetchPatients,
    data,
    isLoading,
    error,
  } = useFetch(getPatients, fetchOptions);

  return {
    fetchPatients,
    data,
    isLoading,
    error,
  };
};
