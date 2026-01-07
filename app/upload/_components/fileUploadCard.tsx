import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Upload, FileSpreadsheet, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface FileUploadCardProps<T extends string> {
  title: string;
  description: string;
  fileType: T;
  file: File | null;
  handleFileChange: (fileType: T, file: File | null) => void;
}

export const FileUploadCard = <T extends string>({
  title,
  description,
  fileType,
  file,
  handleFileChange,
}: FileUploadCardProps<T>) => {
  const [isDragging, setIsDragging] = useState(false);
  const getAcceptTypes = (type: string) => {
    if (type === "baseFinance") {
      return ".csv,.xlsx,.xls";
    }
    if (type === "baseSister") {
      return ".csv,.xlsx,.xls";
    }
    return ".csv,.xlsx,.xls";
  };

  const acceptTypes = getAcceptTypes(fileType);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <FileSpreadsheet className="h-5 w-5" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={`border-2 border-dashed rounded-lg p-4 text-center transition-colors ${
            file
              ? "border-primary bg-primary/10"
              : "border-muted hover:border-primary/50"
          } ${isDragging ? "border-primary bg-primary/10" : ""}`}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            const droppedFile = e.dataTransfer.files?.[0];
            if (droppedFile) {
              handleFileChange(fileType, droppedFile);
            }
          }}
        >
          <input
            type="file"
            accept={acceptTypes}
            onChange={(e) =>
              handleFileChange(fileType, e.target.files?.[0] || null)
            }
            className="hidden"
            id={`upload-${fileType}`}
          />
          <label htmlFor={`upload-${fileType}`} className="cursor-pointer">
            {file ? (
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="h-10 w-10 text-primary" />
                <p className="text-sm font-medium text-primary-foreground">
                  {file.name}
                </p>
                <p className="text-xs text-primary">Clique para alterar</p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <Upload className="h-10 w-10 text-muted-foreground" />
                <p className="text-sm font-medium">Clique para selecionar</p>
                <p className="text-xs text-muted-foreground">
                  {fileType === "baseFinance" ? "CSV ou Excel" : "CSV ou Excel"}
                </p>
              </div>
            )}
          </label>
        </div>
      </CardContent>
    </Card>
  );
};
