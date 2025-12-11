"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import { GetParams } from "@/lib/api/types/financial";

export function DataFilters({
  fetchDados,
}: {
  fetchDados: (
    mes: string,
    dia: boolean,
    search?: string,
  ) => Promise<GetParams[]>;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentMesParam =
    searchParams.get("mes") || new Date().toISOString().slice(0, 10);
  const currentMonthValue = currentMesParam.slice(0, 7);
  const currentDia = searchParams.get("dia") === "true";

  const handleMesChange = (month: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const day = currentDia ? currentMesParam.slice(8, 10) || "01" : "01";
    const mesParam = `${month}-${day}`;
    params.set("mes", mesParam);
    router.push(`?${params.toString()}`);
    fetchDados(mesParam, currentDia);
  };

  const handleDiaToggle = (checked: boolean) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("dia", checked.toString());
    const month = currentMonthValue;
    const day = checked ? currentMesParam.slice(8, 10) || "01" : "01";
    const mesParam = `${month}-${day}`;
    params.set("mes", mesParam);
    router.push(`?${params.toString()}`);
    fetchDados(mesParam, checked);
  };

  const handleDateChange = (date: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("mes", date);
    router.push(`?${params.toString()}`);
    fetchDados(date, true);
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-wrap items-end gap-6">
          <div className="flex-1 min-w-[200px] space-y-2">
            <Label className="flex items-center gap-2">Pesquisar</Label>
            <SearchBar
              placeholder="Buscar por paciente, profissional, item..."
              paramName="search"
            />
          </div>

          <div className="flex-1 min-w-[200px] space-y-2">
            <Label htmlFor="mes-filter" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Filtrar por Mês
            </Label>
            <Input
              id="mes-filter"
              type="month"
              value={currentMonthValue}
              onChange={(e) => handleMesChange(e.target.value)}
              className="max-w-xs"
            />
          </div>

          <div className="flex items-center space-x-2 pb-2">
            <Checkbox
              id="dia-filter"
              checked={currentDia}
              onCheckedChange={handleDiaToggle}
            />
            <Label
              htmlFor="dia-filter"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              Filtrar por dia
            </Label>
          </div>

          {currentDia && (
            <div className="flex-1 min-w-[200px] space-y-2">
              <Label htmlFor="date-filter" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Selecionar dia
              </Label>
              <Input
                id="date-filter"
                type="date"
                value={currentMesParam}
                onChange={(e) => handleDateChange(e.target.value)}
                className="max-w-xs"
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
