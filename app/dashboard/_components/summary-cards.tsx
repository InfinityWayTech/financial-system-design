import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DollarSign,
  Users,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { useSummary } from "@/app/dashboard/_hooks/useDashboard";

export function SummaryCards({ month, year }: { month: number; year: number }) {
  
  const { data, isLoading } = useSummary(month, year);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      <Card className="border-blue-200 dark:border-blue-900 bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-blue-900 dark:text-blue-100">
            Total de Comissões
          </CardTitle>
          <DollarSign className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-900 dark:text-blue-50">
            R${" "}
            {data?.totalComissao?.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
          <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
            Base de dados OK
          </p>
        </CardContent>
      </Card>

      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Pacientes Atendidos
          </CardTitle>
          <Users className="h-4 w-4 text-slate-600 dark:text-slate-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data?.totalPacientes?.toLocaleString("pt-BR")}</div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Divergências</CardTitle>
          <AlertTriangle className="h-4 w-4 text-slate-600 dark:text-slate-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            R${" "}
            {data?.totalProcedimentos?.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Total do período
          </p>
        </CardContent>
      </Card>

      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
          <TrendingUp className="h-4 w-4 text-slate-600 dark:text-slate-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            R${" "}
            {data?.ticketMedio?.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }) || "0,00"}
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Por procedimento
          </p>
        </CardContent>
      </Card>

      <Card
        className={`border-${
          data?.taxaConformidade === 0 ? "green" : "yellow"
        }-200 dark:border-${
          data?.taxaConformidade === 0 ? "green" : "yellow"
        }-900`}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Taxa de Conformidade
          </CardTitle>
          {data?.taxaConformidade === 0 ? (
            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
          ) : (
            <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
          )}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {data?.totalPacientes
              ? ((data?.taxaConformidade ?? 0) * 100).toFixed(1)
              : "0,0"}
            %
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Dados validados
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
