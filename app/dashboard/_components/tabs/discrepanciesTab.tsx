import React, { Fragment, useState } from "react";
import { useDiscrepancies } from "../../_hooks/useDashboard";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";

const DiscrepanciesTab = ({ month, year }: { month: number; year: number }) => {
  const { data, isLoading } = useDiscrepancies(month, year);
  const [expandedPatient, setExpandedPatient] = useState<string | null>(null);

  const toggleExpanded = (nome: string) => {
    setExpandedPatient(expandedPatient === nome ? null : nome);
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Divergências
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? (
                <Spinner className="h-6 w-6" />
              ) : (
                data?.totalDiscrepancies || 0
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Pacientes com status divergente
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Valor Total das Divergências
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? (
                <Spinner className="h-6 w-6" />
              ) : (
                `R$ ${(data?.totalValueDiscrepancies || 0).toLocaleString(
                  "pt-BR",
                  {
                    minimumFractionDigits: 2,
                  }
                )}`
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Soma das diferenças identificadas
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Divergências Identificadas</CardTitle>
          <CardDescription>
            Lista de pacientes com divergências nos procedimentos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            {isLoading ? (
              <div className="flex items-center justify-center py-10">
                <Spinner className="mr-2" />
                Carregando...
              </div>
            ) : data?.patients && data.patients.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Paciente</TableHead>
                    <TableHead className="text-center">Total Geral</TableHead>
                    <TableHead className="text-right">
                      Soma Procedimentos
                    </TableHead>
                    <TableHead className="text-right">Diferença (R$)</TableHead>
                    <TableHead className="text-right">Diferença (%)</TableHead>
                    <TableHead className="text-center">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.patients.map((patient) => {
                    const diferencaPercentual =
                      Number(patient.totalGeral) > 0
                        ? (Number(patient.diferenca || 0) /
                            Number(patient.totalGeral)) *
                          100
                        : 0;

                    return (
                      <Fragment key={patient.id}>
                        <TableRow
                          className={`cursor-pointer transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 ${
                            expandedPatient === patient.nome ? "border-b-0" : ""
                          }`}
                          onClick={() => toggleExpanded(patient.nome)}
                        >
                          <TableCell className="font-medium">
                            {patient.nome}
                          </TableCell>
                          <TableCell className="text-center">
                            {patient.totalGeral || 0}
                          </TableCell>
                          <TableCell className="text-right">
                            R${" "}
                            {patient.procedimentos
                              .reduce(
                                (acc, proc) => acc + Number(proc.valor || 0),
                                0
                              )
                              .toLocaleString("pt-BR", {
                                minimumFractionDigits: 2,
                              })}
                          </TableCell>
                          <TableCell className="text-right font-semibold text-red-600">
                            R${" "}
                            {Number(patient.diferenca || 0).toLocaleString(
                              "pt-BR",
                              {
                                minimumFractionDigits: 2,
                              }
                            )}
                          </TableCell>
                          <TableCell className="text-right font-semibold text-red-600">
                            {diferencaPercentual.toFixed(2)}%
                          </TableCell>
                          <TableCell className="text-center">
                            {expandedPatient === patient.nome ? (
                              <ChevronUp className="h-4 w-4 mx-auto" />
                            ) : (
                              <ChevronDown className="h-4 w-4 mx-auto" />
                            )}
                          </TableCell>
                        </TableRow>
                        {expandedPatient === patient.nome && (
                          <TableRow>
                            <TableCell
                              colSpan={6}
                              className="bg-slate-50 dark:bg-slate-900 border-t-0"
                            >
                              <div className="p-4 space-y-4 animate-in slide-in-from-top-2 duration-300">
                                <h4 className="font-semibold text-sm flex items-center gap-2">
                                  <span className="h-px w-8 bg-slate-300 dark:bg-slate-700"></span>
                                  Detalhes dos Procedimentos
                                  <span className="h-px flex-1 bg-slate-300 dark:bg-slate-700"></span>
                                </h4>
                                <div className="overflow-x-auto rounded-md border">
                                  <Table>
                                    <TableHeader>
                                      <TableRow>
                                        <TableHead>Data</TableHead>
                                        <TableHead>Profissional</TableHead>
                                        <TableHead>Tipo Atendimento</TableHead>
                                        <TableHead>Forma Pagamento</TableHead>
                                        <TableHead className="text-right">
                                          Valor
                                        </TableHead>
                                        <TableHead className="text-right">
                                          Comissão
                                        </TableHead>
                                      </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                      {patient.procedimentos.map((proc) => (
                                        <TableRow key={proc.id}>
                                          <TableCell>
                                            {proc.dataAtendimento
                                              ? new Date(
                                                  proc.dataAtendimento
                                                ).toLocaleDateString("pt-BR")
                                              : "-"}
                                          </TableCell>
                                          <TableCell>
                                            {proc.profissional || "-"}
                                          </TableCell>
                                          <TableCell>
                                            {proc.tipo || "-"}
                                          </TableCell>
                                          <TableCell>
                                            <Badge variant="secondary">
                                              {proc.formaPagamento || "-"}
                                            </Badge>
                                          </TableCell>
                                          <TableCell className="text-right">
                                            R${" "}
                                            {Number(
                                              proc.valor || 0
                                            ).toLocaleString("pt-BR", {
                                              minimumFractionDigits: 2,
                                            })}
                                          </TableCell>
                                          <TableCell className="text-right">
                                            R${" "}
                                            {Number(
                                              proc.comissao || 0
                                            ).toLocaleString("pt-BR", {
                                              minimumFractionDigits: 2,
                                            })}
                                          </TableCell>
                                        </TableRow>
                                      ))}
                                    </TableBody>
                                  </Table>
                                </div>
                              </div>
                            </TableCell>
                          </TableRow>
                        )}
                      </Fragment>
                    );
                  })}
                </TableBody>
              </Table>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-muted-foreground">
                <AlertTriangle className="h-12 w-12 mb-2 text-green-600" />
                <p className="text-lg font-medium">
                  Nenhuma divergência encontrada
                </p>
                <p className="text-sm">
                  Todos os procedimentos estão com status OK
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DiscrepanciesTab;
