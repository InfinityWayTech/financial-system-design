"use client";

import { useState } from "react";
import { ProfessionalsTable } from "@/app/professionals/_components/professionals-table";
import { ProfissionalDialog } from "@/app/professionals/_components/professionals-dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export type TipoProfissional =
  | "MEDICO"
  | "NUTRICIONISTA"
  | "BIOMEDICO"
  | "PSICOLOGO"
  | "OUTRO";
export type NivelProfissional = "JUNIOR" | "SENIOR";

export interface Profissional {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  nome: string;
  tipo: TipoProfissional;
  nivel?: NivelProfissional;
  aluguelFixo?: number;
  taxaMaquineta: boolean;
}

const ProfessionalsPage = () => {
  const [selectedProfissional, setSelectedProfissional] =
    useState<Profissional | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  // Dados mockados para visualização
  const profissionais: Profissional[] = [
    {
      id: "1",
      createdAt: new Date(),
      updatedAt: new Date(),
      nome: "Dr. João Silva",
      tipo: "MEDICO",
      nivel: "SENIOR",
      aluguelFixo: 5000,
      taxaMaquineta: true,
    },
    {
      id: "2",
      createdAt: new Date(),
      updatedAt: new Date(),
      nome: "Dra. Maria Santos",
      tipo: "NUTRICIONISTA",
      nivel: "JUNIOR",
      aluguelFixo: 3000,
      taxaMaquineta: false,
    },
    {
      id: "3",
      createdAt: new Date(),
      updatedAt: new Date(),
      nome: "Dr. Carlos Oliveira",
      tipo: "PSICOLOGO",
      taxaMaquineta: true,
    },
  ];

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProfissional(null);
    setIsCreating(false);
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Profissionais</h1>
          <p className="text-muted-foreground">
            Gerencie os profissionais e suas configurações
          </p>
        </div>
        <Button
          onClick={() => {
            setSelectedProfissional(null);
            setIsCreating(true);
            setIsDialogOpen(true);
          }}
        >
          <Plus className="mr-2 h-4 w-4" />
          Novo Profissional
        </Button>
      </div>

      <ProfessionalsTable
        profissionais={profissionais}
        onRowClick={(profissional) => {
          setSelectedProfissional(profissional);
          setIsCreating(false);
          setIsDialogOpen(true);
        }}
      />

      <ProfissionalDialog
        profissional={selectedProfissional}
        isOpen={isDialogOpen}
        isCreating={isCreating}
        onClose={handleCloseDialog}
      />
    </div>
  );
};

export default ProfessionalsPage;
