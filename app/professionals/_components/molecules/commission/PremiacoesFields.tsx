"use client";

import { useFieldArray, Control } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface Props {
  control: Control<any>;
}

export function PremiacoesFields({ control }: Props) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "premiacoes",
  });

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div
          key={field.id}
          className="rounded-lg border p-4 space-y-4"
        >
          <div className="flex items-center justify-between mb-2">
            <h5 className="font-medium text-sm">Premiação #{index + 1}</h5>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => remove(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-4">
            <FormField
              control={control}
              name={`premiacoes.${index}.tipo`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="AGENDAMENTO">Agendamento</SelectItem>
                      <SelectItem value="CONVERSAO_PROTOCOLO">
                        Conversão de protocolo
                      </SelectItem>
                      <SelectItem value="RECEPCAO">Recepção</SelectItem>
                      <SelectItem value="RENOVACAO">Renovação</SelectItem>
                      <SelectItem value="VENDA_INDICADA">
                        Venda indicada
                      </SelectItem>
                      <SelectItem value="GESTOR_COMERCIAL">
                        Gestor comercial
                      </SelectItem>
                      <SelectItem value="ATENDIMENTO_SPA">
                        Atendimento SPA
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name={`premiacoes.${index}.descricao`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ex: Bônus por meta batida..."
                      rows={2}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={control}
                name={`premiacoes.${index}.metaIndividual`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meta individual</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Ex: 50"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name={`premiacoes.${index}.bonusMetaIndividual`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bônus meta (R$)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Ex: 500.00"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={() =>
          append({
            tipo: "AGENDAMENTO",
            descricao: "",
            ativo: true,
          })
        }
      >
        + Adicionar premiação
      </Button>
    </div>
  );
}