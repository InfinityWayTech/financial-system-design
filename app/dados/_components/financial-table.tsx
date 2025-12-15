"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { FinancialData } from "@/lib/api/types/financial";
import { useFinancial } from "../_hooks/useFinancial";
import { usePrint } from "../_hooks/usePrint";
import { Printer } from "lucide-react";
import { useExportToExcel } from "../_hooks/useExportToExcel";
import { formatCurrency, formatDate } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function FinancialTable({ data }: { data: FinancialData[] }) {
  const {
    handlePendenciaChange,
    handleObsChange,
    handleSave,
    isLoading,
    pendenciaChecked,
    obs,
  } = useFinancial();

  const { componentRef, handlePrint } = usePrint();
  const { exportToCsv } = useExportToExcel<FinancialData>();

  const financialColumns = [
    {
      header: "Data",
      accessor: (row: FinancialData) => row.data,
      formatter: (value: string | number | boolean | null | undefined) =>
        formatDate(value as string),
    },
    {
      header: "Paciente",
      accessor: (row: FinancialData) => row.paciente || "",
    },
    { header: "Observacoes", accessor: (row: FinancialData) => row.obs || "" },
    {
      header: "Cartao",
      accessor: (row: FinancialData) => row.cartao,
      formatter: (value: string | number | boolean | null | undefined) =>
        formatCurrency(value as number),
    },
    {
      header: "Credito_em_Conta",
      accessor: (row: FinancialData) => row.credito_em_conta,
      formatter: (value: string | number | boolean | null | undefined) =>
        formatCurrency(value as number),
    },
    {
      header: "Dinheiro",
      accessor: (row: FinancialData) => row.dinheiro,
      formatter: (value: string | number | boolean | null | undefined) =>
        formatCurrency(value as number),
    },
    {
      header: "Total_Geral",
      accessor: (row: FinancialData) => row.total_geral,
      formatter: (value: string | number | boolean | null | undefined) =>
        formatCurrency(value as number),
    },
    {
      header: "Status_Pendente",
      accessor: (row: FinancialData) => (row.pendente ? "Pendente" : "Pago"),
    },
  ];
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Registros Financeiros Diários</CardTitle>
          <CardDescription>Mostrando {data.length} registros</CardDescription>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Printer className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={handlePrint}>Imprimir</DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                exportToCsv(data, financialColumns, "registros_financeiros")
              }
            >
              CV/Excel
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent ref={componentRef}>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Paciente</TableHead>
                <TableHead>Observações</TableHead>
                <TableHead className="text-right">Cartão</TableHead>
                <TableHead className="text-right">Crédito</TableHead>
                <TableHead className="text-right">Dinheiro</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={9}
                    className="text-center py-8 text-muted-foreground"
                  >
                    Nenhum registro encontrado para os filtros selecionados.
                  </TableCell>
                </TableRow>
              ) : (
                data.map((row, index) => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell className="font-medium">
                        {formatDate(row.data)}
                      </TableCell>
                      <TableCell>{row.paciente}</TableCell>
                      <TableCell className="max-w-xs">
                        <Input
                          value={
                            obs.get(index) !== undefined
                              ? obs.get(index)
                              : row.obs || ""
                          }
                          onChange={(e) =>
                            handleObsChange(index, e.target.value)
                          }
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell className="text-right">
                        {formatCurrency(row.cartao)}
                      </TableCell>
                      <TableCell className="text-right">
                        {formatCurrency(row.credito_em_conta)}
                      </TableCell>
                      <TableCell className="text-right">
                        {formatCurrency(row.dinheiro)}
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        {formatCurrency(row.total_geral)}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Checkbox
                            checked={
                              pendenciaChecked.has(index)
                                ? !pendenciaChecked.get(index)
                                : !row.pendente
                            }
                            onCheckedChange={(checked: boolean) =>
                              handlePendenciaChange(index, !checked)
                            }
                            id={`pendencia-${row.id}`}
                          />
                          <label
                            htmlFor={`pendencia-${row.id}`}
                            className="sr-only"
                          >
                            Alternar status
                          </label>
                          {pendenciaChecked.has(index) ? (
                            pendenciaChecked.get(index) ? (
                              <Badge
                                variant="secondary"
                                className="bg-amber-100 text-amber-800"
                              >
                                Pendente
                              </Badge>
                            ) : (
                              <Badge
                                variant="secondary"
                                className="bg-green-100 text-green-800"
                              >
                                Pago
                              </Badge>
                            )
                          ) : row.pendente ? (
                            <Badge
                              variant="secondary"
                              className="bg-amber-100 text-amber-800"
                            >
                              Pendente
                            </Badge>
                          ) : (
                            <Badge
                              variant="secondary"
                              className="bg-green-100 text-green-800"
                            >
                              Pago
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 flex justify-between">
          <Button onClick={() => handleSave(data)} disabled={isLoading}>
            {isLoading ? "Salvando..." : "Salvar Alterações"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
