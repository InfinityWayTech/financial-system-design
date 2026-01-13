import { useOverview } from "@/app/dashboard/_hooks/useDashboard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Spinner } from "@/components/ui/spinner";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Pie,
  PieChart,
  XAxis,
} from "recharts";

const OverviewTab = ({ month, year }: { month: number; year: number }) => {
  const { data, isLoading } = useOverview(month, year);

  const chartRadialData = [
    {
      browser: "OK",
      visitors: data?.listOK.length ?? 0,
      fill: "var(--chart-1)",
    },
    {
      browser: "Divergentes",
      visitors: data?.listDivergentes.length ?? 0,
      fill: "var(--chart-2)",
    },
  ];

  const chartRadialConfig = {
    OK: {
      label: "OK",
      color: "var(--chart-1)",
    },
    Divergentes: {
      label: "Divergentes",
      color: "var(--chart-2)",
    },
  };

  const chartBarData =
    data?.formasDePagamento?.map((forma, index) => ({
      browser: forma.forma,
      quantidade: forma.quantidade || 0,
      fill: `var(--chart-${(index % 5) + 1})`,
    })) ?? [];

  const chartBarConfig =
    data?.formasDePagamento?.reduce((acc, forma, index) => {
      acc[forma.forma] = {
        label: forma.forma,
        color: `var(--chart-${(index % 5) + 1})`,
      };
      return acc;
    }, {} as Record<string, { label: string; color: string }>) ?? {};

  chartBarConfig.quantidade = {
    label: "Quantidade",
    color: "hsl(var(--foreground))",
  };

  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center py-10">
          <Spinner className="mr-2" />
          Carregando...
        </div>
      ) : (
        <div>
          <div className="grid gap-2 lg:grid-cols-2 mb-4">
            <Card>
              <CardHeader>
                <CardTitle>Pacientes OK vs Divergentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">
                      {data?.listOK.length ?? 0}
                    </p>
                    <p className="text-xs text-slate-500">OK</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-red-600">
                      {data?.listDivergentes.length ?? 0}
                    </p>
                    <p className="text-xs text-slate-500">Divergentes</p>
                  </div>
                </div>
                <p className="mt-2 text-center text-sm text-slate-600">
                  {(
                    ((data?.listOK.length ?? 0) /
                      ((data?.listOK.length ?? 0) +
                        (data?.listDivergentes.length ?? 0))) *
                    100
                  ).toFixed(1)}
                  % OK
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Formas de Pagamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {data?.formasDePagamento?.length ?? 0}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-2 lg:grid-cols-2 mb-4">
            {" "}
            <Card className="flex flex-col">
              <CardHeader className="items-center pb-0">
                <CardTitle>Pacientes OK vs Divergências</CardTitle>
                <CardDescription>
                  Distribuição por status de validação
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 pb-0">
                <ChartContainer
                  config={chartRadialConfig}
                  className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square h-[400px] pb-0"
                >
                  <PieChart>
                    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                    <Pie
                      data={chartRadialData}
                      dataKey="visitors"
                      label
                      nameKey="browser"
                    />
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Formas de Pagamento</CardTitle>
                <CardDescription>
                  Distribuição por método de pagamento
                </CardDescription>
              </CardHeader>
              <CardContent>
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
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={
                        <ChartTooltipContent
                          nameKey="quantidade "
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
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default OverviewTab;
