import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Profissional } from "@/app/professionals/page"

interface ProfissionaisTableProps {
  profissionais: Profissional[]
  onRowClick: (profissional: Profissional) => void
}

const tipoLabels: Record<string, string> = {
  MEDICO: "Médico",
  NUTRICIONISTA: "Nutricionista",
  BIOMEDICO: "Biomédico",
  PSICOLOGO: "Psicólogo",
  OUTRO: "Outro",
}

const nivelLabels: Record<string, string> = {
  JUNIOR: "Júnior",
  SENIOR: "Sênior",
}

const tipoColors: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  MEDICO: "default",
  NUTRICIONISTA: "secondary",
  BIOMEDICO: "outline",
  PSICOLOGO: "default",
  OUTRO: "outline",
}

export function ProfessionalsTable({ profissionais, onRowClick }: ProfissionaisTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Nível</TableHead>
            <TableHead>Aluguel Fixo</TableHead>
            <TableHead>Taxa Maquineta</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {profissionais.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center text-muted-foreground">
                Nenhum profissional encontrado
              </TableCell>
            </TableRow>
          ) : (
            profissionais.map((profissional) => (
              <TableRow
                key={profissional.id}
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => onRowClick(profissional)}
              >
                <TableCell className="font-medium">{profissional.nome}</TableCell>
                <TableCell>
                  <Badge variant={tipoColors[profissional.tipo]}>
                    {tipoLabels[profissional.tipo]}
                  </Badge>
                </TableCell>
                <TableCell>
                  {profissional.nivel ? (
                    <Badge variant="outline">{nivelLabels[profissional.nivel]}</Badge>
                  ) : (
                    <span className="text-muted-foreground text-sm">-</span>
                  )}
                </TableCell>
                <TableCell>
                  {profissional.aluguelFixo ? (
                    <span className="font-mono">
                      R$ {profissional.aluguelFixo.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  ) : (
                    <span className="text-muted-foreground text-sm">-</span>
                  )}
                </TableCell>
                <TableCell>
                  <Badge variant={profissional.taxaMaquineta ? "default" : "secondary"}>
                    {profissional.taxaMaquineta ? "Sim" : "Não"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}