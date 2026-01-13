"use client";

import { Suspense, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SummaryCards } from "./_components/summary-cards";
import { DateSelector } from "./_components/date-selector";
import OverviewTab from "./_components/tabs/overviewTab";
import ProfessionalTab from "./_components/tabs/professionalTab";
import PatientTab from "./_components/tabs/patientTab";
import DiscrepanciesTab from "./_components/tabs/discrepanciesTab";
import ProceduresTab from "./_components/tabs/proceduresTab";

const DashboardPage = () => {
  const currentDate = new Date();
  const [month, setMonth] = useState(currentDate.getMonth() + 1);
  const [year, setYear] = useState(currentDate.getFullYear());

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <div className="min-h-screen transition-colors container mx-auto px-4 py-6 space-y-6">
        <DateSelector
          month={month}
          year={year}
          onMonthChange={setMonth}
          onYearChange={setYear}
        />

        <SummaryCards month={month} year={year} />

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
            <OverviewTab month={month} year={year} />
          </TabsContent>

          <TabsContent value="professional">
            <ProfessionalTab month={month} year={year} />
          </TabsContent>

          <TabsContent value="patient">
            <PatientTab month={month} year={year} />
          </TabsContent>

          <TabsContent value="discrepancies">
            <DiscrepanciesTab month={month} year={year} />
          </TabsContent>

          <TabsContent value="procedures">
            <ProceduresTab month={month} year={year} />
          </TabsContent>
        </Tabs>
      </div>
    </Suspense>
  );
};

export default DashboardPage;
