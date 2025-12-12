"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Calendar, Search, X } from "lucide-react";
import { GetParams } from "@/lib/api/types/financial";
import { Combobox } from "@/components/combobox/components/combobox";
import { useFilter } from "../_hooks/useFilter";
import { useEffect } from "react";

export function DataFilters({
  fetchDados,
}: {
  fetchDados: (
    mes: string,
    dia: boolean,
    search?: string,
    profissional?: string
  ) => Promise<GetParams[]>;
}) {
  const {
    namesProfissionais,
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
  } = useFilter(fetchDados);

  useEffect(() => {
    applyFilters();
  }, []);

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-wrap items-end gap-6">
          <div className="flex-1 min-w-[200px] space-y-2">
            <Label className="flex items-center gap-2">Pesquisar</Label>
            <Input
              placeholder="Buscar por paciente, profissional, item..."
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  applyFilters();
                }
              }}
            />
          </div>

          <div className="flex-1 min-w-[200px] space-y-2">
            <Label className="flex items-center gap-2">Por Profissional</Label>
            <Combobox
              multiple
              value={profissionais}
              onValueChange={(newValues) => {
                handleProfissionaisChange(
                  Array.isArray(newValues) ? newValues : []
                );
              }}
              options={
                (namesProfissionais?.names || [])
                  .filter((p) => p.profissional)
                  .map((p) => ({
                    value: p.profissional || "",
                    label: p.profissional || "",
                  })) || []
              }
              placeholder="Selecione um profissional..."
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
              value={monthValue}
              onChange={(e) => handleMesChange(e.target.value)}
              className="max-w-xs"
            />
          </div>

          <div className="flex items-center space-x-2 pb-2">
            <Checkbox
              id="dia-filter"
              checked={dia}
              onCheckedChange={handleDiaToggle}
            />
            <Label
              htmlFor="dia-filter"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              Filtrar por dia
            </Label>
          </div>

          {dia && (
            <div className="flex-1 min-w-[200px] space-y-2">
              <Label htmlFor="date-filter" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Selecionar dia
              </Label>
              <Input
                id="date-filter"
                type="date"
                value={mes}
                onChange={(e) => handleDateChange(e.target.value)}
                className="max-w-xs"
              />
            </div>
          )}

          <div className="flex gap-2 pb-2">
            <Button onClick={applyFilters} className="gap-2">
              <Search className="h-4 w-4" />
              Aplicar Filtros
            </Button>
            <Button onClick={clearFilters} variant="outline" className="gap-2">
              <X className="h-4 w-4" />
              Limpar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}