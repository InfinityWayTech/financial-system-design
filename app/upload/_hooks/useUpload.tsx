import { useFetch } from "@/hooks/useFetch";
import { uploadDados } from "@/lib/api/financeiro";

export const useUpload = () => {
  const {
    execute: uploadData,
    data,
    isLoading,
    error,
  } = useFetch(uploadDados, {
    successMessage: "Dados carregados com sucesso!",
    errorMessage: "Erro ao carregar os dados!",
  });

  const handleSubmit = async (files: {
    diaProducao: File | null;
    mittuInfinityMedcos: File | null;
    mittuMedca: File | null;
    mittuCatarina: File | null;
    mittuCatarinaLink: File | null;
    mittuInfinityMedcosLink: File | null;
    mittuMedcaLink: File | null;
  }) => {
    const formData = new FormData();
    if (files.diaProducao) formData.append("dia-producao", files.diaProducao);
    if (files.mittuInfinityMedcos)
      formData.append("mittu-infinity-medcos", files.mittuInfinityMedcos);
    if (files.mittuMedca) formData.append("mittu-medca", files.mittuMedca);
    if (files.mittuCatarina)
      formData.append("mittu-catarina", files.mittuCatarina);
    if (files.mittuCatarinaLink)
      formData.append("mittu-catarina-link", files.mittuCatarinaLink);
    if (files.mittuInfinityMedcosLink)
      formData.append("mittu-infinity-medcos-link", files.mittuInfinityMedcosLink);
    if (files.mittuMedcaLink)
      formData.append("mittu-medca-link", files.mittuMedcaLink);
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
