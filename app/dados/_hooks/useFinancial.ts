import { dailyFinancialUpdate } from "@/lib/api/financeiro";
import { FinancialDataUpdate } from "@/lib/api/types/financial";
import { useState } from "react";

export const useFinancial = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pendenciaChecked, setPendenciaChecked] = useState<
    Map<number, boolean>
  >(new Map());
  const [obs, setObs] = useState<Map<number, string>>(new Map());

  const handlePendenciaChange = (index: number, checked: boolean) => {
    setPendenciaChecked((prev) => new Map(prev).set(index, checked));
  };

  const handleObsChange = (index: number, value: string) => {
    setObs((prev) => new Map(prev).set(index, value));
  };

  const handleSave = async (data: FinancialDataUpdate[], onSuccess?: () => void) => {
    const changes: FinancialDataUpdate[] = [];

    data.forEach((row, index) => {
      const hasPendenciaChange = pendenciaChecked.has(index);
      const hasObsChange = obs.has(index);

      if (hasPendenciaChange || hasObsChange) {
        changes.push({
          id: row.id,
          pendente: hasPendenciaChange
            ? pendenciaChecked.get(index)!
            : row.pendente,
          obs: hasObsChange ? obs.get(index)! : row.obs,
        });
      }
    });

    if (changes.length === 0) {
      console.log("Nenhuma alteração para salvar");
      return;
    }

    setIsLoading(true);
    try {
      await Promise.all(changes.map((change) => dailyFinancialUpdate([change])));

      setPendenciaChecked(new Map());
      setObs(new Map());
      onSuccess?.();
    } catch (err) {
      console.error("Falha ao salvar:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handlePendenciaChange,
    handleObsChange,
    handleSave,
    isLoading,
    pendenciaChecked,
    obs,
  };
};
