"use client"

import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface ReceitaPorPeriodo {
  periodo: string;
  valor: number;
}

interface FinancialChartProps {
  data: ReceitaPorPeriodo[];
}

export function FinancialChart({ data }: FinancialChartProps) {
  const chartData = data
    .sort((a, b) => new Date(a.periodo).getTime() - new Date(b.periodo).getTime())
    .slice(-30)
    .map((item) => ({
      date: new Date(item.periodo).toLocaleDateString("pt-BR", { month: "short", year: "numeric" }),
      total: item.valor,
    }))

  if (chartData.length === 0) {
    return <div className="flex items-center justify-center h-[300px] text-muted-foreground">Sem dados para exibir</div>
  }

  return (
    <ChartContainer
      config={{
        total: {
          label: "Receita",
          color: "hsl(var(--primary))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="date" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
          <YAxis className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="total"
            stroke="var(--color-total)"
            strokeWidth={2}
            dot={{ fill: "var(--color-total)" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
