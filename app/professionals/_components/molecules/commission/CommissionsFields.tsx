"use client";

import { useFieldArray, Control, useWatch } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
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

export function CommissionsFields({ control }: Props) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "comissoes",
  });

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <CommissionItem
          key={field.id}
          control={control}
          index={index}
          onRemove={() => remove(index)}
        />
      ))}

      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={() =>
          append({
            categoria: "CONSULTA",
            tipoCalculo: "PERCENTUAL",
            percentual: "",
            ativo: true,
          })
        }
      >
        + Adicionar comissão
      </Button>
    </div>
  );
}

function CommissionItem({ 
  control, 
  index, 
  onRemove 
}: { 
  control: Control<any>; 
  index: number; 
  onRemove: () => void;
}) {
  const tipoCalculo = useWatch({
    control,
    name: `comissoes.${index}.tipoCalculo`,
  });

  return (
    <div className="rounded-lg border p-4 space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h5 className="font-medium text-sm">Comissão #{index + 1}</h5>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onRemove}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid gap-4">
        {/* Categoria */}
        <FormField
          control={control}
          name={`comissoes.${index}.categoria`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoria</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="CONSULTA">Consulta</SelectItem>
                  <SelectItem value="PROTOCOLO">Protocolo</SelectItem>
                  <SelectItem value="IMPLANTE">Implante</SelectItem>
                  <SelectItem value="PROCEDIMENTO">Procedimento</SelectItem>
                  <SelectItem value="CALORIMETRIA">Calorimetria</SelectItem>
                  <SelectItem value="OUTRO">Outro</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        {/* Tipo cálculo */}
        <FormField
          control={control}
          name={`comissoes.${index}.tipoCalculo`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de cálculo</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="PERCENTUAL">Percentual</SelectItem>
                  <SelectItem value="VALOR_FIXO">Valor fixo</SelectItem>
                  <SelectItem value="TABELA_PROGRESSIVA">
                    Tabela progressiva
                  </SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        {/* Campo condicional baseado no tipo */}
        {tipoCalculo === "PERCENTUAL" && (
          <FormField
            control={control}
            name={`comissoes.${index}.percentual`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Percentual (%)</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="Ex: 10" 
                    {...field} 
                  />
                </FormControl>
              </FormItem>
            )}
          />
        )}

        {tipoCalculo === "VALOR_FIXO" && (
          <FormField
            control={control}
            name={`comissoes.${index}.valorFixo`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Valor fixo (R$)</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="Ex: 150.00" 
                    {...field} 
                  />
                </FormControl>
              </FormItem>
            )}
          />
        )}

        {tipoCalculo === "TABELA_PROGRESSIVA" && (
          <FormField
            control={control}
            name={`comissoes.${index}.tabelaProgressiva`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tabela progressiva</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Configurar faixas..." 
                    {...field} 
                  />
                </FormControl>
              </FormItem>
            )}
          />
        )}
      </div>
    </div>
  );
}