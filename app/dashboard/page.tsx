"use client";
import { Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SummaryCards } from "./_components/summary-cards";
import OverviewTab from "./_components/tabs/OverviewTab";

const DashboardPage = () => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <div className="min-h-screen transition-colors container mx-auto px-4 py-6 space-y-6">
        <SummaryCards month={10} year={2025} />

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
            </TabsTrigger>
            <TabsTrigger
              value="procedures"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Procedimentos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <OverviewTab month={10} year={2025} />
          </TabsContent>

          {/* <TabsContent value="professional">
            <ProfessionalTab />
          </TabsContent>

          <TabsContent value="patient">
            <PatientTab />
          </TabsContent>

          <TabsContent value="discrepancies">
            <DiscrepanciesTab />
          </TabsContent>

          <TabsContent value="procedures">
            <ProceduresTab />
          </TabsContent> */}
        </Tabs>
      </div>
    </Suspense>
  );
};

export default DashboardPage;
