"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Profissional } from "@/app/professionals/page";
import { useEffect } from "react";
import { DollarSign } from "lucide-react";
import { CommissionsFields } from "./commission/CommissionsFields";
import { PremiacoesFields } from "./commission/PremiacoesFields";

const commissionSchema = z.object({
  categoria: z.enum([
    "CONSULTA",
    "PROTOCOLO",
    "IMPLANTE",
    "PROCEDIMENTO",
    "CALORIMETRIA",
    "OUTRO",
  ]),
  tipoCalculo: z.enum(["PERCENTUAL", "VALOR_FIXO", "TABELA_PROGRESSIVA"]),
  percentual: z.string().optional(),
  valorFixo: z.string().optional(),
  tabelaProgressiva: z.string().optional(),
  ativo: z.boolean(),
});

const premiacaoSchema = z.object({
  tipo: z.enum([
    "AGENDAMENTO",
    "CONVERSAO_PROTOCOLO",
    "RECEPCAO",
    "RENOVACAO",
    "VENDA_INDICADA",
    "GESTOR_COMERCIAL",
    "ATENDIMENTO_SPA",
  ]),
  descricao: z.string(),
  tabelaFaixas: z.record(z.string(), z.any()).optional(),
  bonusMetaIndividual: z.string().optional(),
  metaIndividual: z.string().optional(),
  ativo: z.boolean(),
});

const formSchema = z.object({
  nome: z.string().min(3, {
    message: "O nome deve ter no mínimo 3 caracteres.",
  }),
  tipo: z.enum([
    "MEDICO",
    "NUTRICIONISTA",
    "BIOMEDICO",
    "PSICOLOGO",
    "COMERCIAL",
    "OUTRO",
  ]),
  nivel: z.enum(["JUNIOR", "SENIOR"]).optional(),
  aluguelFixo: z.string().optional(),
  commissionSchema: z.array(commissionSchema),
  premiacaoSchema: z.array(premiacaoSchema),
});

interface ProfissionalFormProps {
  profissional: Profissional | null;
  onClose: () => void;
}

export function ProfessionalsForm({
  profissional,
  onClose,
}: ProfissionalFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: profissional?.nome || "",
      tipo: profissional?.tipo || undefined,
      nivel: profissional?.nivel || undefined,
      aluguelFixo: profissional?.aluguelFixo?.toString() || "",
      commissionSchema: [
        {
          categoria: "CONSULTA",
          tipoCalculo: "PERCENTUAL",
          percentual: "",
          valorFixo: "",
          tabelaProgressiva: "",
          ativo: true,
        },
      ],
      premiacaoSchema: [
        {
          tipo: "AGENDAMENTO",
          descricao: "",
          tabelaFaixas: {},
          bonusMetaIndividual: "",
          metaIndividual: "",
          ativo: true,
        },
      ],
    },
  });

  useEffect(() => {
    if (profissional) {
      form.reset({
        nome: profissional.nome,
        tipo: profissional.tipo,
        nivel: profissional.nivel || undefined,
        aluguelFixo: profissional.aluguelFixo?.toString() || "",
      });
    } else {
      form.reset({
        nome: "",
        tipo: undefined,
        nivel: undefined,
        aluguelFixo: "",
      });
    }
  }, [profissional, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    onClose();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Dados Básicos */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Dados Básicos</h3>
            <p className="text-sm text-muted-foreground">
              Informações principais do profissional
            </p>
          </div>
          <Separator />

          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Dr. João Silva" {...field} />
                </FormControl>
                <FormDescription>Nome completo do profissional</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="tipo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="MEDICO">Médico</SelectItem>
                      <SelectItem value="NUTRICIONISTA">
                        Nutricionista
                      </SelectItem>
                      <SelectItem value="BIOMEDICO">Biomédico</SelectItem>
                      <SelectItem value="PSICOLOGO">Psicólogo</SelectItem>
                      <SelectItem value="COMERCIAL">Comercial</SelectItem>
                      <SelectItem value="OUTRO">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.watch("tipo") === "COMERCIAL" && (
              <FormField
                control={form.control}
                name="nivel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nível</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o nível" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="JUNIOR">Júnior</SelectItem>
                        <SelectItem value="SENIOR">Sênior</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>Opcional</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="aluguelFixo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Aluguel Fixo</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <DollarSign className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        {...field}
                        className="bg-background pl-9"
                        id="currency-input"
                        min="0"
                        placeholder="0.00"
                        step="0.01"
                        type="number"
                      />
                    </div>
                  </FormControl>
                  <FormDescription>
                    Valor fixo mensal do aluguel (opcional)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Relacionamentos</h3>
            <p className="text-sm text-muted-foreground">
              Configure comissões e premiações para este profissional
            </p>
          </div>
          <Separator />

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-md font-medium mb-4">Comissões</h4>
              <CommissionsFields control={form.control} />
            </div>

            <div>
              <h4 className="text-md font-medium mb-4">Premiações</h4>
              <PremiacoesFields control={form.control} />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit">
            {profissional ? "Salvar Alterações" : "Criar Profissional"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
