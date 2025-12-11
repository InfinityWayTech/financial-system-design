"use client";
import { Suspense, useState } from "react";

import { FileUploadCard } from "./_components/fileUploadCard";
import { Button } from "@/components/ui/button";
import { useUpload } from "./_hooks/useUpload";
import UploadTab from "./_components/uploadTab";

const UploadPage = () => {
  const { handleSubmit, data, isLoading } = useUpload();
  const machineData = Array.isArray(data) ? data.map((item) => item.data) : [];

  const [files, setFiles] = useState<{
    diaProducao: File | null;
    mittuInfinityMedcos: File | null;
    mittuMedca: File | null;
    mittuCatarina: File | null;
    mittuCatarinaLink: File | null;
  }>({
    diaProducao: null,
    mittuInfinityMedcos: null,
    mittuMedca: null,
    mittuCatarina: null,
    mittuCatarinaLink: null,
  });

  const handleFileChange = (
    fileType: keyof typeof files,
    file: File | null
  ) => {
    setFiles((prev) => ({ ...prev, [fileType]: file }));
  };

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">
          Upload de Arquivos Financeiros
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FileUploadCard
            title="Dia de Produção"
            description="Arquivo CSV ou Excel contendo os dados de produção diária."
            fileType="diaProducao"
            file={files.diaProducao}
            handleFileChange={handleFileChange}
          />
          <FileUploadCard
            title="Mittu Infinity Medcos"
            description="Arquivo CSV ou Excel da Mittu Infinity Medcos."
            fileType="mittuInfinityMedcos"
            file={files.mittuInfinityMedcos}
            handleFileChange={handleFileChange}
          />
          <FileUploadCard
            title="Mittu Medca"
            description="Arquivo CSV ou Excel da Mittu Medca."
            fileType="mittuMedca"
            file={files.mittuMedca}
            handleFileChange={handleFileChange}
          />
          <FileUploadCard
            title="Mittu Catarina"
            description="Arquivo CSV ou Excel da Mittu Catarina."
            fileType="mittuCatarina"
            file={files.mittuCatarina}
            handleFileChange={handleFileChange}
          />
          <FileUploadCard
            title="Mittu Catarina Link"
            description="Arquivo CSV ou Excel da Mittu Catarina Link."
            fileType="mittuCatarinaLink"
            file={files.mittuCatarinaLink}
            handleFileChange={handleFileChange}
          />
        </div>
        <div className="mt-6 flex justify-center">
          <Button onClick={() => handleSubmit(files)} disabled={isLoading}>
            {isLoading ? "Enviando..." : "Enviar Arquivos"}
          </Button>
        </div>
        {/* <UploadTab data={machineData} /> */}
      </div>
    </Suspense>
  );
};

export default UploadPage;
