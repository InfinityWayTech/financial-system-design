import { Fragment, useState } from "react";
import { usePatients } from "../../_hooks/useDashboard";
import { Spinner } from "@/components/ui/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp } from "lucide-react";

const PatientTab = ({ month, year }: { month: number; year: number }) => {
  const { data, isLoading } = usePatients(month, year);

  const [expandedPatient, setExpandedPatient] = useState<string | null>(null);

  const toggleExpanded = (nome: string) => {
    setExpandedPatient(expandedPatient === nome ? null : nome);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Comissões por Paciente</CardTitle>
          <CardDescription>
            Análise detalhada de produtividade e comissões por paciente
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            {isLoading ? (
              <div className="flex items-center justify-center py-10">
                <Spinner className="mr-2" />
                Carregando...
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Paciente</TableHead>
                    <TableHead className="text-right">
                      Total Procedimentos
                    </TableHead>
                    <TableHead className="text-right">
                      Soma Procedimentos
                    </TableHead>
                    <TableHead className="text-right">Total Comissão</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead className="text-center">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.map((pacient) => (
                    <Fragment key={pacient.id}>
                      <TableRow
                        className='cursor-pointer transition-colors hover:bg-slate-50 dark:hover:bg-slate-800' 
                        onClick={() => toggleExpanded(pacient.nome)}
                      >
                        <TableCell className="font-medium">
                          {pacient.nome}
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="flex flex-col items-center gap-1">
                            <span className="font-semibold">
                              {pacient.totalProcedimentos || 0}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          R${" "}
                          {pacient.procedimentos
                            .reduce(
                              (acc, proc) => acc + Number(proc.valor || 0),
                              0
                            )
                            .toLocaleString("pt-BR", {
                              minimumFractionDigits: 2,
                            })}
                        </TableCell>
                        <TableCell className="text-right font-semibold">
                          R${" "}
                          {Number(pacient.totalComissao || 0).toLocaleString(
                            "pt-BR",
                            {
                              minimumFractionDigits: 2,
                            }
                          )}
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge variant="default">{pacient.status}</Badge>
                        </TableCell>
                        <TableCell className="text-center">
                          {expandedPatient === pacient.nome ? (
                            <ChevronUp className="h-4 w-4 mx-auto" />
                          ) : (
                            <ChevronDown className="h-4 w-4 mx-auto" />
                          )}
                        </TableCell>
                      </TableRow>
                      {expandedPatient === pacient.nome && (
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
                                    {pacient.procedimentos.map((proc) => (
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
                                          {Number(proc.valor || 0).toLocaleString(
                                            "pt-BR",
                                            {
                                              minimumFractionDigits: 2,
                                            }
                                          )}
                                        </TableCell>
                                        <TableCell className="text-right">
                                          R${" "}
                                          {Number(proc.comissao || 0).toLocaleString(
                                            "pt-BR",
                                            {
                                              minimumFractionDigits: 2,
                                            }
                                          )}
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
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientTab;