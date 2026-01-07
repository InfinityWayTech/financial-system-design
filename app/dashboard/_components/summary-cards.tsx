import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DollarSign,
  Users,
  FileText,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function SummaryCards({ data }) {
  const totalComissao = data.dadosOk.reduce(
    (sum, item) => sum + item.totalComissao,
    0
  );
  const totalPacientes = data.dadosOk.length + data.divergencias.length;
  const totalProcedimentos = data.dadosOk.reduce(
    (sum, item) => sum + item.procedimentos.length,
    0
  );
  const ticketMedio =
    totalPacientes > 0 ? totalComissao / data.dadosOk.length : 0;
  const taxaConformidade =
    totalPacientes > 0 ? (data.dadosOk.length / totalPacientes) * 100 : 0;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      <Card className="border-blue-200 dark:border-blue-900 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-blue-900 dark:text-blue-100">
            Total de Comissões
          </CardTitle>
          <DollarSign className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-900 dark:text-blue-50">
            R${" "}
            {totalComissao.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
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
          <div className="text-2xl font-bold">{totalPacientes}</div>
          <div className="flex items-center gap-2 mt-1">
            <Badge
              variant="secondary"
              className="bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-400"
            >
              {data.dadosOk.length} OK
            </Badge>
            {data.divergencias.length > 0 && (
              <Badge
                variant="secondary"
                className="bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-400"
              >
                {data.divergencias.length} Div.
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Procedimentos Realizados
          </CardTitle>
          <FileText className="h-4 w-4 text-slate-600 dark:text-slate-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalProcedimentos}</div>
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
            {ticketMedio.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Por paciente
          </p>
        </CardContent>
      </Card>

      <Card
        className={`border-${
          taxaConformidade === 100 ? "green" : "yellow"
        }-200 dark:border-${taxaConformidade === 100 ? "green" : "yellow"}-900`}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Taxa de Conformidade
          </CardTitle>
          {taxaConformidade === 100 ? (
            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
          ) : (
            <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
          )}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {taxaConformidade.toFixed(1)}%
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Dados validados
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
