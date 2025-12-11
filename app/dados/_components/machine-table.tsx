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
import { Input } from "@/components/ui/input";
import { Combobox } from "@/components/combobox/components/combobox";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { usePacients } from "@/app/upload/_hooks/usePacients";
import { getMaquinetaBadgeVariant } from "@/app/upload/_utils/varient";
import { MachineData } from "@/lib/api/types/financial";

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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Registros dos Cartões Diários</CardTitle>
        <CardDescription>Mostrando {data.length} registros</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Paciente</TableHead>
                <TableHead>Maquineta</TableHead>
                <TableHead>Autorização</TableHead>
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
                      {row.pacienteName ? (
                        <Input value={row.pacienteName} disabled />
                      ) : (
                        <Combobox
                          value={selectedPatients[row.id] || ""}
                          onValueChange={(value) => {
                            const name = Array.isArray(value)
                              ? value[0]
                              : value;
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
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={getMaquinetaBadgeVariant(row.card_machine)}
                      >
                        {row.card_machine || "-"}
                      </Badge>
                    </TableCell>
                    <TableCell>{row.authorization || "-"}</TableCell>
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
