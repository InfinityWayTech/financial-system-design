"use client";
import { useState, useEffect } from "react";
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
import { getMaquinetaBadgeVariant } from "../_utils/varient";
import { Input } from "@/components/ui/input";
import { usePacients } from "../_hooks/usePacients";
import { Combobox } from "@/components/combobox/components/combobox";
import { Button } from "@/components/ui/button";

import { MachineData } from "@/lib/api/types/financial";

interface UploadTabProps {
  data: MachineData[] | { data: MachineData[] };
}

const STORAGE_DATA_KEY = "uploadTabData";
const STORAGE_SELECTIONS_KEY = "selectedPatients";

const UploadTab = ({ data: propData }: UploadTabProps) => {
  const [displayData, setDisplayData] = useState<MachineData[]>([]);
  const [selectedPatients, setSelectedPatients] = useState<{
    [rowId: string]: string;
  }>({});

  const { data, handleSubmit, isLoading } = usePacients();
  const updates = Object.entries(selectedPatients)
    .filter(([name]) => name)
    .map(([id, name]) => ({ id, name }));

  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_DATA_KEY);
    const savedSelections = localStorage.getItem(STORAGE_SELECTIONS_KEY);

    const normalizedPropData = Array.isArray(propData)
      ? propData
      : (propData as { data: MachineData[] })?.data || [];

    if (normalizedPropData.length > 0) {
      setDisplayData(normalizedPropData);
      localStorage.setItem(
        STORAGE_DATA_KEY,
        JSON.stringify(normalizedPropData)
      );
    } else if (savedData) {
      try {
        setDisplayData(JSON.parse(savedData));
      } catch (e) {
        console.error("Erro ao carregar dados:", e);
      }
    }

    if (savedSelections) {
      try {
        setSelectedPatients(JSON.parse(savedSelections));
      } catch (e) {
        console.error("Erro ao carregar seleções:", e);
      }
    }
  }, [propData]);

  const handlePatientChange = (rowId: string, patientName: string) => {
    setSelectedPatients((prev) => {
      const updated = { ...prev, [rowId]: patientName };
      localStorage.setItem(STORAGE_SELECTIONS_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <>
      {displayData.length === 0 ? null : (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Dados de comparação de maquinetas</CardTitle>
            <CardDescription>
              Mostrando {displayData.length} registros
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="rounded-md border overflow-x-auto">
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
                  {displayData.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className="text-center py-8 text-muted-foreground"
                      >
                        Nenhum registro encontrado
                      </TableCell>
                    </TableRow>
                  ) : (
                    displayData.map((row) => (
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
                                handlePatientChange(row.id, name || "");
                              }}
                              options={
                                data?.names?.map((p) => ({
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
              }}
              disabled={isLoading || Object.keys(selectedPatients).length === 0}
            >
              {isLoading ? "Salvando..." : "Salvar Alterações"}
            </Button>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default UploadTab;
