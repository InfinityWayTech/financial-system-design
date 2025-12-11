import { useFetch } from "@/hooks/useFetch";
import { getPacients, updateDailyMachineUpdate } from "@/lib/api/financeiro";
import { toast } from "sonner";

const usePacientsOptions = {
  errorMessage: "Erro ao carregar os dados!",
  auto: true,
  defaultArgs: [],
};

export const usePacients = (onSuccess?: () => void) => {
  const {
    execute: getPacientsData,
    data,
    isLoading,
    error,
  } = useFetch(getPacients, usePacientsOptions);

  const handleSubmit = async (updateData: { id: string; name: string }[]) => {
    try {
      const response = await updateDailyMachineUpdate(updateData);

      if (response?.status === "success") {
        toast.success("Dados atualizados com sucesso!");
        localStorage.removeItem("uploadTabData");
        localStorage.removeItem("selectedPatients");
        onSuccess?.();
      }

      return response;
    } catch (error) {
      console.error("Erro ao atualizar:", error);
      throw error;
    }
  };

  return {
    getPacientsData,
    handleSubmit,
    data,
    isLoading,
    error,
  };
};
