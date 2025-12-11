"use client";

import { Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FinancialTable } from "@/app/dados/_components/financial-table";
import { ProductionTable } from "@/app/dados/_components/production-table";
import { DataFiltersWrapper } from "./_components/data-filters-wrapper";
import { useDados } from "./_hooks/useDados";
import { MachineTable } from "./_components/machine-table";

export const DadosPageClient = () => {
  const { fetchDados, data: rawDados } = useDados();

  const dados = rawDados?.reduce((acc, current) => {
    return { ...acc, ...current };
  }, {
    data_financial: [],
    data_production: [],
    data_machine: [],
  });

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <div className="space-y-8">
        <div>
          <h1 className="text-balance text-4xl font-bold tracking-tight">
            Dados
          </h1>
          <p className="text-muted-foreground mt-2">
            Visualize e gerencie todos os registros
          </p>
        </div>

        <DataFiltersWrapper fetchDados={fetchDados} />

        <Tabs defaultValue="financial" className="w-full">
          <TabsList>
            <TabsTrigger value="financial">Dados Financeiros</TabsTrigger>
            <TabsTrigger value="production">Dados de Produção</TabsTrigger>
            <TabsTrigger value="machine">
              Dados dos Cartões
            </TabsTrigger>
          </TabsList>

          <TabsContent value="financial" className="mt-6">
            <FinancialTable
              data={dados?.data_financial || []}
            />
          </TabsContent>

          <TabsContent value="production" className="mt-6">
            <ProductionTable
              data={dados?.data_production || []}
            />
          </TabsContent>

          <TabsContent value="machine" className="mt-6">
            <MachineTable
              data={dados?.data_machine || []}
              fetch={() => fetchDados("", false)}
            />
          </TabsContent>
        </Tabs>
      </div>
    </Suspense>
  );
};