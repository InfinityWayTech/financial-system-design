import { useFetch } from "@/hooks/useFetch";
import { getDados } from "@/lib/api/financeiro";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const useDados = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const mes = searchParams.get("mes") ?? new Date().toISOString().slice(0, 10);
  const dia = searchParams.get("dia") === "true";
  const search = searchParams.get("search") ?? "";

  const fetchOptions = useMemo(
    () => ({
      errorMessage: "Erro ao trazer os dados!",
      auto: true,
      defaultArgs: [mes, dia, search],
    }),
    [mes, dia, search]
  );

  const {
    execute: fetchDados,
    data,
    isLoading,
    error,
  } = useFetch(getDados, fetchOptions);

  useEffect(() => {
    const mesParam = searchParams.get("mes");
    const diaParam = searchParams.get("dia");

    if (!mesParam || !diaParam) {
      const params = new URLSearchParams(searchParams.toString());
      if (!mesParam) {
        params.set("mes", new Date().toISOString().slice(0, 10));
      }
      if (!diaParam) {
        params.set("dia", "false");
      }
      router.replace(`?${params.toString()}`);
    }
  }, [searchParams, router]);

  return {
    fetchDados,
    data,
    isLoading,
    error,
  };
};
