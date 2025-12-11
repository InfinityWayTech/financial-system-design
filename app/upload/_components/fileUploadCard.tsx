import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Upload, FileSpreadsheet, CheckCircle2 } from "lucide-react";

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
  const getAcceptTypes = (type: string) => {
    if (type === "diaProducao") {
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
          className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
            file
              ? "border-green-500 bg-green-50"
              : "border-muted hover:border-primary/50"
          }`}
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
                <CheckCircle2 className="h-10 w-10 text-green-600" />
                <p className="text-sm font-medium text-green-700">
                  {file.name}
                </p>
                <p className="text-xs text-green-600">Clique para alterar</p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <Upload className="h-10 w-10 text-muted-foreground" />
                <p className="text-sm font-medium">Clique para selecionar</p>
                <p className="text-xs text-muted-foreground">
                  {fileType === "CSV ou Excel"}
                </p>
              </div>
            )}
          </label>
        </div>
      </CardContent>
    </Card>
  );
};
