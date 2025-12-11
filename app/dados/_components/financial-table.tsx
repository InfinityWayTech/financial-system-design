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

import { formatCurrency, formatDate } from "@/lib/utils";
import { FinancialData } from "@/lib/api/types/financial";

export function FinancialTable({
  data,
}: {
  data: FinancialData[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Registros Financeiros Diários</CardTitle>
        <CardDescription>
          Mostrando {data.length} registros
        </CardDescription>
      </CardHeader>
      <CardContent>
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
                data.map((row) => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell className="font-medium">
                        {formatDate(row.data)}
                      </TableCell>
                      <TableCell>{row.paciente}</TableCell>
                      <TableCell className="max-w-xs truncate">
                        {row.obs || "-"}
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
                        {row.pendente ? (
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
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
