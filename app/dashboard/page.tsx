"use client";

import { FinancialChart } from "@/app/dashboard/_components/financial-chart";

import { useDashboard } from "./_hooks/useDashboard";
import Header from "./_components/header";
import { Suspense } from "react";

const DashboardPage = () => {
  const { data } = useDashboard();

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <div className="space-y-8">
        <Header data={data!} />
        <FinancialChart data={data?.receitas_por_perido || []} />
      </div>
    </Suspense>
  );
};

export default DashboardPage;
