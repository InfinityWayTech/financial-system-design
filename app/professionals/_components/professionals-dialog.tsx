"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProfessionalsForm } from "./molecules/professionals-form";
import { Profissional } from "@/app/professionals/page";

interface ProfissionalDialogProps {
  profissional: Profissional | null;
  isOpen: boolean;
  isCreating: boolean;
  onClose: () => void;
}

export function ProfissionalDialog({
  profissional,
  isOpen,
  isCreating,
  onClose,
}: ProfissionalDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-h-[90vh] overflow-auto no-scrollbar"
        style={{ maxWidth: "80vw" }}
      >
        <DialogHeader>
          <DialogTitle>
            {isCreating ? "Novo Profissional" : "Configurações do Profissional"}
          </DialogTitle>
          <DialogDescription>
            {isCreating
              ? "Adicione um novo profissional ao sistema"
              : "Configure os dados e parâmetros do profissional"}
          </DialogDescription>
        </DialogHeader>

        <ProfessionalsForm profissional={profissional} onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
}
