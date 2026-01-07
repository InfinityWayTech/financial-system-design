import { useFetch } from "@/hooks/useFetch";
import { postProcessar } from "@/lib/api/financeiro";

export const useUpload = () => {
  const {
    execute: uploadData,
    data,
    isLoading,
    error,
  } = useFetch(postProcessar, {
    successMessage: "Dados carregados com sucesso!",
    errorMessage: "Erro ao carregar os dados!",
  });

  const handleSubmit = async (files: {
    baseFinance: File | null;
    baseSister: File | null;
  }) => {
    const formData = new FormData();
    if (files.baseFinance) formData.append("baseFinance", files.baseFinance);
    if (files.baseSister) formData.append("baseSister", files.baseSister);
    await uploadData(formData);
  };

  return {
    uploadData,
    data,
    isLoading,
    error,
    handleSubmit,
  };
};
