import React from "react";
import { useProcedures } from "../../_hooks/useDashboard";
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
import { FileText, DollarSign, TrendingUp } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, Pie, PieChart } from "recharts";

const ProceduresTab = ({ month, year }: { month: number; year: number }) => {
  const { data, isLoading } = useProcedures(month, year);

  const top5PorQuantidade = data?.tabelaTiposAtendimento
    ? [...data.tabelaTiposAtendimento]
        .sort((a, b) => b.quantidade - a.quantidade)
        .slice(0, 5)
    : [];

  const chartBarData = top5PorQuantidade.map((item, index) => ({
    browser: item.tipo,
    quantidade: item.quantidade,
    fill: `var(--chart-${(index % 5) + 1})`,
  }));

  const chartBarConfig = top5PorQuantidade.reduce((acc, item, index) => {
    acc[item.tipo] = {
      label: item.tipo,
      color: `var(--chart-${(index % 5) + 1})`,
    };
    return acc;
  }, {} as Record<string, { label: string; color: string }>);

  chartBarConfig.quantidade = {
    label: "Quantidade",
    color: "hsl(var(--foreground))",
  };

  const top5PorComissao = data?.tabelaTiposAtendimento
    ? [...data.tabelaTiposAtendimento]
        .sort((a, b) => b.comissaoTotal - a.comissaoTotal)
        .slice(0, 5)
    : [];

  const chartPieData = top5PorComissao.map((item, index) => ({
    browser: item.tipo,
    visitors: item.comissaoTotal,
    fill: `var(--chart-${(index % 5) + 1})`,
  }));

  const chartPieConfig = top5PorComissao.reduce((acc, item, index) => {
    acc[item.tipo] = {
      label: item.tipo,
      color: `var(--chart-${(index % 5) + 1})`,
    };
    return acc;
  }, {} as Record<string, { label: string; color: string }>);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Procedimentos
            </CardTitle>
            <FileText className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? (
                <Spinner className="h-6 w-6" />
              ) : (
                data?.totalProcedimentos || 0
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Quantidade total de procedimentos realizados
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Valor Médio por Procedimento
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? (
                <Spinner className="h-6 w-6" />
              ) : (
                `R$ ${(data?.valorMedioProcedimento || 0).toLocaleString(
                  "pt-BR",
                  {
                    minimumFractionDigits: 2,
                  }
                )}`
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Média de valor por procedimento
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Comissões
            </CardTitle>
            <DollarSign className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? (
                <Spinner className="h-6 w-6" />
              ) : (
                `R$ ${(
                  data?.tabelaTiposAtendimento.reduce(
                    (sum, item) => sum + item.comissaoTotal,
                    0
                  ) || 0
                ).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}`
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Soma total de todas as comissões
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top 5 Procedimentos Mais Realizados</CardTitle>
            <CardDescription>
              Procedimentos ordenados por quantidade
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center justify-center py-10">
                <Spinner className="mr-2" />
                Carregando...
              </div>
            ) : chartBarData.length > 0 ? (
              <ChartContainer config={chartBarConfig}>
                <BarChart
                  accessibilityLayer
                  data={chartBarData}
                  margin={{
                    top: 20,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="browser"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 15)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        nameKey="quantidade"
                        labelKey="browser"
                      />
                    }
                  />
                  <Bar dataKey="quantidade" fill="color" radius={8}>
                    <LabelList
                      position="top"
                      offset={12}
                      className="fill-foreground"
                      fontSize={12}
                    />
                  </Bar>
                </BarChart>
              </ChartContainer>
            ) : (
              <div className="flex items-center justify-center py-10 text-muted-foreground">
                Nenhum dado disponível
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader className="items-center pb-0">
            <CardTitle>Top 5 Procedimentos por Comissão Gerada</CardTitle>
            <CardDescription>
              Distribuição por valor de comissão
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            {isLoading ? (
              <div className="flex items-center justify-center py-10">
                <Spinner className="mr-2" />
                Carregando...
              </div>
            ) : chartPieData.length > 0 ? (
              <ChartContainer
                config={chartPieConfig}
                className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square h-[400px] pb-0"
              >
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                  <Pie
                    data={chartPieData}
                    dataKey="visitors"
                    label
                    nameKey="browser"
                  />
                </PieChart>
              </ChartContainer>
            ) : (
              <div className="flex items-center justify-center py-10 text-muted-foreground">
                Nenhum dado disponível
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Procedimentos por Tipo de Atendimento</CardTitle>
          <CardDescription>
            Análise detalhada de procedimentos agrupados por tipo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            {isLoading ? (
              <div className="flex items-center justify-center py-10">
                <Spinner className="mr-2" />
                Carregando...
              </div>
            ) : data?.tabelaTiposAtendimento &&
              data.tabelaTiposAtendimento.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tipo de Atendimento</TableHead>
                    <TableHead className="text-center">Quantidade</TableHead>
                    <TableHead className="text-right">Valor Total</TableHead>
                    <TableHead className="text-right">Valor Médio</TableHead>
                    <TableHead className="text-right">Comissão Total</TableHead>
                    <TableHead className="text-right">Comissão Média</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.tabelaTiposAtendimento.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.tipo}</TableCell>
                      <TableCell className="text-center">
                        {item.quantidade}
                      </TableCell>
                      <TableCell className="text-right">
                        R${" "}
                        {item.valorTotal.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                        })}
                      </TableCell>
                      <TableCell className="text-right">
                        R${" "}
                        {item.valorMedio.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                        })}
                      </TableCell>
                      <TableCell className="text-right font-semibold">
                        R${" "}
                        {item.comissaoTotal.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                        })}
                      </TableCell>
                      <TableCell className="text-right">
                        R${" "}
                        {item.comissaoMedia.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                        })}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="flex items-center justify-center py-10 text-muted-foreground">
                Nenhum procedimento encontrado
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProceduresTab;
