import { dailyProductionUpdate } from "@/lib/api/financeiro";
import { FinancialDataUpdate, ProductionData } from "@/lib/api/types/financial";
import { useState } from "react";

export const useProduction = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [nutriChecked, setNutriChecked] = useState<Map<number, boolean>>(
    new Map()
  );
  const [pendenciaChecked, setPendenciaChecked] = useState<
    Map<number, boolean>
  >(new Map());
  const [obs, setObs] = useState<Map<number, string>>(new Map());

  const handleNutriChange = (index: number, checked: boolean) => {
    setNutriChecked((prev) => new Map(prev).set(index, checked));
  };

  const handlePendenciaChange = (index: number, checked: boolean) => {
    setPendenciaChecked((prev) => new Map(prev).set(index, checked));
  };

  const handleObsChange = (index: number, value: string) => {
    setObs((prev) => new Map(prev).set(index, value));
  };

  const handleSave = async (data: ProductionData[], onSuccess?: () => void) => {
    const changes: FinancialDataUpdate[] = [];

    data.forEach((row, index) => {
      const hasNutriChange = nutriChecked.has(index);
      const hasPendenciaChange = pendenciaChecked.has(index);
      const hasObsChange = obs.has(index);

      if (hasNutriChange || hasPendenciaChange || hasObsChange) {
        changes.push({
          id: row.id,
          nutri: hasNutriChange ? nutriChecked.get(index)! : row.nutri,
          pendencia: hasPendenciaChange
            ? pendenciaChecked.get(index)!
            : row.pendencia,
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
      await Promise.all(changes.map((change) => dailyProductionUpdate(change)));
      setNutriChecked(new Map());
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
    handleNutriChange,
    handlePendenciaChange,
    handleObsChange,
    handleSave,
    isLoading,
    nutriChecked,
    pendenciaChecked,
    obs,
  };
};
