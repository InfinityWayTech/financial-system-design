"use client";
import Header from "@/components/header";
import { useDashboard } from "./_hooks/useDashboard";
import { Suspense } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { SummaryCards } from "./_components/summary-cards";

const DashboardPage = () => {
  // const { data } = useDashboard();
  const data = {
    dadosOk: [],
    divergencias: [],
  };

  const hasDivergencias = data.divergencias.length > 0;

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <div className="min-h-screen transition-colors container mx-auto px-4 py-6 space-y-6">
        <SummaryCards month={12} year={2023} />

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 lg:grid-cols-5 h-auto gap-2">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Visão Geral
            </TabsTrigger>
            <TabsTrigger
              value="professional"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Por Profissional
            </TabsTrigger>
            <TabsTrigger
              value="patient"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Por Paciente
            </TabsTrigger>
            <TabsTrigger
              value="discrepancies"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white relative"
            >
              Divergências
              {hasDivergencias && (
                <Badge className="ml-2 h-5 px-1.5 bg-red-500 text-white">
                  {data.divergencias.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger
              value="procedures"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Procedimentos
            </TabsTrigger>
          </TabsList>

          {/* <TabsContent value="overview">
              <OverviewTab data={data} />
            </TabsContent>

            <TabsContent value="professional">
              <ProfessionalTab data={data} />
            </TabsContent>

            <TabsContent value="patient">
              <PatientTab data={data} />
            </TabsContent>

            <TabsContent value="discrepancies">
              <DiscrepanciesTab data={data} />
            </TabsContent>

            <TabsContent value="procedures">
              <ProceduresTab data={data} />
            </TabsContent> */}
        </Tabs>
      </div>
    </Suspense>
  );
};

export default DashboardPage;
