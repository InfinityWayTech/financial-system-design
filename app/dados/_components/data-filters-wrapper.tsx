"use client";

import { Suspense } from "react";
import { DataFilters } from "./data-filters";
import { GetParams } from "@/lib/api/types/financial";

export const DataFiltersWrapper = ({
  fetchDados,
}: {
  fetchDados: (
    mes: string,
    dia: boolean,
    search?: string
  ) => Promise<GetParams[]>;
}) => {
  return (
    <Suspense fallback={<div>Carregando filtros...</div>}>
      <DataFilters fetchDados={fetchDados} />
    </Suspense>
  );
};
