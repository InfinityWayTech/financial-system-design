import React, { useState } from "react";
import { useProfessional } from "../../_hooks/useDashboard";
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
import { ChevronDown, ChevronUp } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";

const ProfessionalTab = ({ month, year }: { month: number; year: number }) => {
  const { data, isLoading } = useProfessional(month, year);

  const [expandedProfessional, setExpandedProfessional] = useState<
    string | null
  >(null);

  const toggleExpanded = (profissional: string) => {
    setExpandedProfessional(
      expandedProfessional === profissional ? null : profissional
    );
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Comissões por Profissional</CardTitle>
          <CardDescription>
            Análise detalhada de produtividade e comissões por profissional
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            {isLoading ? (
              <div className="flex items-center justify-center py-10">
                <Spinner className="mr-2"/>Carregando...
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Profissional</TableHead>
                    <TableHead className="text-center">Pacientes</TableHead>
                    <TableHead className="text-center">Procedimentos</TableHead>
                    <TableHead className="text-right">Total Comissão</TableHead>
                    <TableHead className="text-right">Média/Paciente</TableHead>
                    <TableHead className="text-center w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.map((prof, index) => (
                    <React.Fragment key={prof.profissional}>
                      <TableRow
                        className={`cursor-pointer transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 ${
                          index < 3 ? "bg-blue-50 dark:bg-blue-950/20" : ""
                        } ${
                          expandedProfessional === prof.profissional
                            ? "border-b-0"
                            : ""
                        }`}
                        onClick={() => toggleExpanded(prof.profissional)}
                      >
                        <TableCell className="font-medium">
                          {index < 3 && (
                            <Badge className="mr-2 bg-blue-600 text-white">
                              Top {index + 1}
                            </Badge>
                          )}
                          {prof.profissional}
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="flex flex-col items-center gap-1">
                            <span className="font-semibold">
                              {prof.quantidadePacientes}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-center">
                          {prof.procedimentos}
                        </TableCell>
                        <TableCell className="text-right font-semibold">
                          R${" "}
                          {prof.totalComissao.toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                          })}
                        </TableCell>
                        <TableCell className="text-right">
                          R${" "}
                          {prof.mediaPorPaciente.toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                          })}
                        </TableCell>
                        <TableCell className="text-center">
                          {expandedProfessional === prof.profissional ? (
                            <ChevronUp className="h-4 w-4 mx-auto" />
                          ) : (
                            <ChevronDown className="h-4 w-4 mx-auto" />
                          )}
                        </TableCell>
                      </TableRow>
                      {expandedProfessional === prof.profissional && (
                        <TableRow>
                          <TableCell
                            colSpan={6}
                            className="bg-slate-50 dark:bg-slate-900 border-t-0"
                          >
                            <div className="p-4 space-y-4 animate-in slide-in-from-top-2 duration-300">
                              <h4 className="font-semibold text-sm flex items-center gap-2">
                                <span className="h-px w-8 bg-slate-300 dark:bg-slate-700"></span>
                                Pacientes Atendidos
                                <span className="h-px flex-1 bg-slate-300 dark:bg-slate-700"></span>
                              </h4>
                              <div className="grid gap-2">
                                {prof.pacientesDetalhes.map((paciente) => (
                                  <div
                                    key={paciente.paciente}
                                    className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg border shadow-sm hover:shadow-md transition-shadow"
                                  >
                                    <span className="text-sm font-medium">
                                      {paciente.paciente}
                                    </span>
                                    <div className="flex gap-2">
                                      <Badge
                                        variant="outline"
                                        className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400 border-blue-200"
                                      >
                                        Total: R${" "}
                                        {paciente.totalValor.toLocaleString(
                                          "pt-BR",
                                          {
                                            minimumFractionDigits: 2,
                                          }
                                        )}
                                      </Badge>
                                      <Badge
                                        variant="secondary"
                                        className="bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-400"
                                      >
                                        Comissão: R${" "}
                                        {paciente.totalComissao.toLocaleString(
                                          "pt-BR",
                                          { minimumFractionDigits: 2 }
                                        )}
                                      </Badge>
                                      {Number.isFinite(
                                        paciente.totalComissao /
                                          paciente.totalValor
                                      ) ? (
                                        <Badge
                                          variant="outline"
                                          className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-400 border-purple-200"
                                        >
                                          {(
                                            (paciente.totalComissao /
                                              paciente.totalValor) *
                                            100
                                          ).toFixed(2)}
                                          %
                                        </Badge>
                                      ) : null}
                                    </div>
                                  </div>
                                ))}
                                {prof.pacientesDetalhes.length > 10 && (
                                  <p className="text-xs text-slate-600 dark:text-slate-400 text-center pt-2">
                                    + {prof.pacientesDetalhes.length - 10}{" "}
                                    pacientes adicionais
                                  </p>
                                )}
                              </div>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </React.Fragment>
                  ))}
                  <TableRow className="bg-slate-100 dark:bg-slate-800 font-bold">
                    <TableCell>TOTAL</TableCell>
                    <TableCell className="text-center">
                      {data?.reduce(
                        (acc, curr) => acc + curr.quantidadePacientes,
                        0
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {data?.reduce((acc, curr) => acc + curr.procedimentos, 0)}
                    </TableCell>
                    <TableCell className="text-right">
                      R${" "}
                      {data
                        ?.reduce(
                          (acc, curr) => acc + Number(curr.totalComissao),
                          0
                        )
                        .toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                        })}
                    </TableCell>
                    <TableCell className="text-right">-</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfessionalTab;
