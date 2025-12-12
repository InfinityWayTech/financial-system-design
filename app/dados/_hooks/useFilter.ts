import { useFetch } from "@/hooks/useFetch";
import { getProfissionais } from "@/lib/api/financeiro";
import { GetParams } from "@/lib/api/types/financial";
import { useState } from "react";

const useProfissionaisOptions = {
  errorMessage: "Erro ao carregar os dados!",
  auto: true,
  defaultArgs: [],
};

export const useFilter = (
  fetchDados: (
    mes: string,
    dia: boolean,
    search?: string,
    profissional?: string
  ) => Promise<GetParams[]>
) => {
  const [mes, setMes] = useState(new Date().toISOString().slice(0, 10));
  const [dia, setDia] = useState(false);
  const [search, setSearch] = useState("");
  const [profissionais, setProfissionais] = useState<string[]>([]);

  const monthValue = mes.slice(0, 7);

  const handleMesChange = (month: string) => {
    const day = dia ? mes.slice(8, 10) || "01" : "01";
    const mesParam = `${month}-${day}`;
    setMes(mesParam);
  };

  const handleDiaToggle = (checked: boolean) => {
    setDia(checked);
    const month = mes.slice(0, 7);
    const day = checked ? mes.slice(8, 10) || "01" : "01";
    const mesParam = `${month}-${day}`;
    setMes(mesParam);
  };

  const handleDateChange = (date: string) => {
    setMes(date);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleProfissionaisChange = (values: string[]) => {
    setProfissionais(values);
  };

  const applyFilters = () => {
    fetchDados(
      mes,
      dia,
      search || undefined,
      profissionais.join(",") || undefined
    );
  };

  const clearFilters = () => {
    const today = new Date().toISOString().slice(0, 10);
    setMes(today);
    setDia(false);
    setSearch("");
    setProfissionais([]);
    fetchDados(today, false, undefined, undefined);
  };

  const {
    execute: getProfissionaisData,
    data,
    isLoading,
    error,
  } = useFetch(getProfissionais, useProfissionaisOptions);

  return {
    getProfissionaisData,
    namesProfissionais: data,
    isLoading,
    error,
    mes,
    dia,
    search,
    profissionais,
    monthValue,
    handleMesChange,
    handleDiaToggle,
    handleDateChange,
    handleSearchChange,
    handleProfissionaisChange,
    applyFilters,
    clearFilters,
  };
}