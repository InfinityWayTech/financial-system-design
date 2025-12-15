"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { formatDate } from "@/lib/utils";
import { Combobox } from "@/components/combobox/components/combobox";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { usePacients } from "@/app/upload/_hooks/usePacients";
import { getMaquinetaBadgeVariant } from "@/app/upload/_utils/varient";
import { MachineData } from "@/lib/api/types/financial";
import { usePrint } from "../_hooks/usePrint";
import { Printer } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useExportToExcel } from "../_hooks/useExportToExcel";

export const MachineTable = ({
  data,
  fetch,
}: {
  data: MachineData[];
  fetch: () => void;
}) => {
  const [selectedPatients, setSelectedPatients] = useState<{
    [rowId: string]: string;
  }>({});
  const updates = Object.entries(selectedPatients)
    .filter(([name]) => name)
    .map(([id, name]) => ({ id, name }));

  const { data: PacientsNames, handleSubmit, isLoading } = usePacients();

  const { componentRef, handlePrint } = usePrint();
  const { exportToCsv } = useExportToExcel<MachineData>();

  const machineColumns = [
    {
      header: "Data",
      accessor: (row: MachineData) => row.data_atendimento,
      formatter: (value: string) => formatDate(value),
    },
    {
      header: "Paciente",
      accessor: (row: MachineData) => row.pacienteName || "",
    },
    {
      header: "Maquineta",
      accessor: (row: MachineData) => row.card_machine || "",
    },
    {
      header: "Autorizacao",
      accessor: (row: MachineData) => row.authorization || "",
    },
    { header: "Parcelas", accessor: (row: MachineData) => row.parcelas || "" },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Registros dos Cartões Diários</CardTitle>
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
                exportToCsv(
                  data,
                  machineColumns.map((col) => ({
                    ...col,
                    formatter:
                      col.formatter &&
                      ((value: string | number | boolean | null | undefined) =>
                        col.formatter!(value as string)),
                  })),
                  "registros_maquineta"
                )
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
                <TableHead>Maquineta</TableHead>
                <TableHead>Autorização</TableHead>
                <TableHead>Parcelas</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="text-center py-8 text-muted-foreground"
                  >
                    Nenhum registro encontrado
                  </TableCell>
                </TableRow>
              ) : (
                data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-medium">
                      {formatDate(row.data_atendimento)}
                    </TableCell>
                    <TableCell>
                      <Combobox
                        value={
                          selectedPatients[row.id] || row.pacienteName || ""
                        }
                        onValueChange={(value) => {
                          const name = Array.isArray(value) ? value[0] : value;
                          setSelectedPatients((prev) => ({
                            ...prev,
                            [row.id]: name || "",
                          }));
                        }}
                        options={
                          (PacientsNames?.names || []).map((p) => ({
                            value: p.paciente,
                            label: p.paciente,
                          })) || []
                        }
                        placeholder="Selecione um paciente..."
                      />
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={getMaquinetaBadgeVariant(row.card_machine)}
                      >
                        {row.card_machine || "-"}
                      </Badge>
                    </TableCell>
                    <TableCell>{row.authorization || "-"}</TableCell>
                    <TableCell>{row.parcelas || "-"}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>

      <CardFooter className="flex justify-center">
        <Button
          variant="default"
          onClick={() => {
            handleSubmit(updates);
            fetch();
          }}
          disabled={isLoading || Object.keys(selectedPatients).length === 0}
        >
          {isLoading ? "Salvando..." : "Salvar Alterações"}
        </Button>
      </CardFooter>
    </Card>
  );
};
