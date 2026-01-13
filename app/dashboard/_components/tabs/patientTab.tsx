import React from "react";
import { usePatients } from "../../_hooks/useDashboard";
import { Spinner } from "@/components/ui/spinner";

const PatientTab = ({ month, year }: { month: number; year: number }) => {
  const { data, isLoading } = usePatients(month, year);

  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center py-10">
          <Spinner className="mr-2" />
          Carregando...
        </div>
      ) : (
        <div>
        </div>
      )}
    </div>
  );
};

export default PatientTab;
