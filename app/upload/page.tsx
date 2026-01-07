"use client";
import { Suspense, useState } from "react";

import { FileUploadCard } from "./_components/fileUploadCard";
import { Button } from "@/components/ui/button";
import { useUpload } from "./_hooks/useUpload";

const UploadPage = () => {
  const { handleSubmit, isLoading } = useUpload();

  const [files, setFiles] = useState<{
    baseFinance: File | null;
    baseSister: File | null;
  }>({
    baseFinance: null,
    baseSister: null,
  });

  const handleFileChange = (
    fileType: keyof typeof files,
    file: File | null
  ) => {
    setFiles((prev) => ({ ...prev, [fileType]: file }));
  };

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <div className="container mx-auto p-4 transition-colors text-center">
        <h1 className="text-3xl font-bold mb-6">
          Upload de Arquivos Financeiros
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FileUploadCard
            title="Base Financeira"
            description="Arquivo CSV ou Excel contendo os dados financeiros básicos."
            fileType="baseFinance"
            file={files.baseFinance}
            handleFileChange={handleFileChange}
          />
          <FileUploadCard
            title="Base Sistema"
            description="Arquivo CSV ou Excel contendo os dados financeiros básicos."
            fileType="baseSister"
            file={files.baseSister}
            handleFileChange={handleFileChange}
          />
        </div>
        <div className="mt-6 flex justify-center">
          <Button onClick={() => handleSubmit(files)} disabled={isLoading}>
            {isLoading ? "Enviando..." : "Enviar Arquivos"}
          </Button>
        </div>
      </div>
    </Suspense>
  );
};

export default UploadPage;
