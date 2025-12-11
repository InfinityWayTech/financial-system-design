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
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { formatCurrency, formatDate } from "@/lib/utils";
import { useProduction } from "@/app/dados/_hooks/useProduction";
import { Button } from "@/components/ui/button";
import { ProductionData } from "@/lib/api/types/financial";

export function ProductionTable({ data }: { data: ProductionData[] }) {
  const {
    handleNutriChange,
    handlePendenciaChange,
    handleObsChange,
    handleSave,
    isLoading,
    nutriChecked,
    pendenciaChecked,
    obs,
  } = useProduction();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Registros de Produção Diária</CardTitle>
        <CardDescription>
          Mostrando {data.length} registros de produção diária
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Hora</TableHead>
                <TableHead>Código</TableHead>
                <TableHead>Paciente</TableHead>
                <TableHead>Idade</TableHead>
                <TableHead>Id Amigo</TableHead>
                <TableHead>Matrícula</TableHead>
                <TableHead>Profissional</TableHead>
                <TableHead>Especialidade</TableHead>
                <TableHead>CBO</TableHead>
                <TableHead>Solicitante</TableHead>
                <TableHead>Executante</TableHead>
                <TableHead>Forma</TableHead>
                <TableHead>Lanç.</TableHead>
                <TableHead>Nº Parc.</TableHead>
                <TableHead>Qtd Parc.</TableHead>
                <TableHead>NSU/CV</TableHead>
                <TableHead>Obs. Fin.</TableHead>
                <TableHead>Tipo Atend.</TableHead>
                <TableHead>Unidade</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Item</TableHead>
                <TableHead>Qtde</TableHead>
                <TableHead className="text-right">Vlr Item</TableHead>
                <TableHead className="text-right">Desc.</TableHead>
                <TableHead className="text-right">Vlr Total</TableHead>
                <TableHead>Nota</TableHead>
                <TableHead>Nº Lote</TableHead>
                <TableHead className="text-right">Vlr Pago</TableHead>
                <TableHead>Ano Atend.</TableHead>
                <TableHead>Mês Atend.</TableHead>
                <TableHead>Ano Env.</TableHead>
                <TableHead>Mês Env.</TableHead>
                <TableHead>Ano Pagto.</TableHead>
                <TableHead>Mês Pagto.</TableHead>
                <TableHead>Criado Em</TableHead>
                <TableHead>Atualizado Em</TableHead>
                <TableHead className="text-center sticky right-[310px] bg-background z-10">
                  Nutri
                </TableHead>
                <TableHead className="text-center sticky right-[240px] bg-background z-10">
                  Pendência
                </TableHead>
                <TableHead className="sticky right-0 bg-background z-10">
                  Obs
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={40}
                    className="text-center py-8 text-muted-foreground"
                  >
                    Nenhum registro encontrado para os filtros selecionados.
                  </TableCell>
                </TableRow>
              ) : (
                data.map((row, index) => (
                  <TableRow key={row.id || index}>
                    <TableCell className="font-medium">
                      {formatDate(row.data_atendimento)}
                    </TableCell>
                    <TableCell>{row.hora_atendimento || "-"}</TableCell>
                    <TableCell>{row.codigo_atendimento || "-"}</TableCell>
                    <TableCell>{row.paciente}</TableCell>
                    <TableCell>{row.idade ?? "-"}</TableCell>
                    <TableCell>{row.id_amigo || "-"}</TableCell>
                    <TableCell>{row.matricula || "-"}</TableCell>
                    <TableCell>{row.profissional || "-"}</TableCell>
                    <TableCell>{row.especialidade || "-"}</TableCell>
                    <TableCell>{row.cbo || "-"}</TableCell>
                    <TableCell>{row.solicitante || "-"}</TableCell>
                    <TableCell>{row.executante || "-"}</TableCell>
                    <TableCell>{row.forma_pagamento || "-"}</TableCell>
                    <TableCell>{row.lancamento ?? "-"}</TableCell>
                    <TableCell>{row.numero_parcela ?? "-"}</TableCell>
                    <TableCell>{row.qtd_parcelas ?? "-"}</TableCell>
                    <TableCell>{row.nsu_doc_cv_id || "-"}</TableCell>
                    <TableCell className="max-w-xs truncate">
                      {row.observacao_financeira || "-"}
                    </TableCell>
                    <TableCell>{row.tipo_atendimento || "-"}</TableCell>
                    <TableCell>{row.unidade || "-"}</TableCell>
                    <TableCell>{row.tipo || "-"}</TableCell>
                    <TableCell className="max-w-xs truncate">
                      {row.item || "-"}
                    </TableCell>
                    <TableCell>{row.quantidade ?? "-"}</TableCell>
                    <TableCell className="text-right">
                      {formatCurrency(row.valor_item)}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatCurrency(row.desconto)}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatCurrency(row.valor_total_item)}
                    </TableCell>
                    <TableCell>{row.nota_emitida || "-"}</TableCell>
                    <TableCell>{row.numero_lote || "-"}</TableCell>
                    <TableCell className="text-right">
                      {formatCurrency(row.valor_pago)}
                    </TableCell>
                    <TableCell>{row.ano_atendimento ?? "-"}</TableCell>
                    <TableCell>{row.mes_atendimento ?? "-"}</TableCell>
                    <TableCell>{row.ano_envio ?? "-"}</TableCell>
                    <TableCell>{row.mes_envio ?? "-"}</TableCell>
                    <TableCell>{row.ano_pagamento ?? "-"}</TableCell>
                    <TableCell>{row.mes_pagamento ?? "-"}</TableCell>
                    <TableCell>{row.criado_em || "-"}</TableCell>
                    <TableCell>{row.atualizado_em || "-"}</TableCell>
                    <TableCell className="text-center sticky right-[310px] bg-background z-10">
                      <Checkbox
                        checked={
                          nutriChecked.has(index)
                            ? nutriChecked.get(index)
                            : Boolean(row.nutri)
                        }
                        disabled={isLoading}
                        onCheckedChange={(checked) =>
                          handleNutriChange(index, Boolean(checked))
                        }
                      />
                    </TableCell>
                    <TableCell className="text-center sticky right-[240px] bg-background z-10">
                      <Checkbox
                        checked={
                          pendenciaChecked.has(index)
                            ? pendenciaChecked.get(index)
                            : Boolean(row.pendencia)
                        }
                        disabled={isLoading}
                        onCheckedChange={(checked) =>
                          handlePendenciaChange(index, Boolean(checked))
                        }
                      />
                    </TableCell>
                    <TableCell className="min-w-[240px] sticky right-0 bg-background z-10">
                      <Input
                        value={obs.has(index) ? obs.get(index) : row.obs || ""}
                        placeholder="Observação"
                        disabled={isLoading}
                        className="w-full"
                        onChange={(e) => handleObsChange(index, e.target.value)}
                      />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          onClick={() => handleSave(data)}
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? "Salvando..." : "Salvar Alterações"}
        </Button>
      </CardFooter>
    </Card>
  );
}
