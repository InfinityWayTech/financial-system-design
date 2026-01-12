-- CreateTable
CREATE TABLE "Procedimento" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataAtendimento" TEXT NOT NULL,
    "paciente" TEXT NOT NULL,
    "profissional" TEXT NOT NULL,
    "formaPagamento" TEXT NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "tipo" TEXT NOT NULL,
    "comissao" DECIMAL(65,30) NOT NULL DEFAULT 0,

    CONSTRAINT "Procedimento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "dataAtendimento" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "totalProcedimentos" DECIMAL(65,30) NOT NULL,
    "totalGeral" DECIMAL(65,30) NOT NULL,
    "totalComissao" DECIMAL(65,30) NOT NULL,
    "status" TEXT NOT NULL,
    "diferenca" DECIMAL(65,30) NOT NULL DEFAULT 0,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Procedimento_paciente_idx" ON "Procedimento"("paciente");

-- CreateIndex
CREATE INDEX "Procedimento_profissional_idx" ON "Procedimento"("profissional");

-- CreateIndex
CREATE INDEX "Procedimento_dataAtendimento_idx" ON "Procedimento"("dataAtendimento");

-- CreateIndex
CREATE INDEX "Paciente_nome_idx" ON "Paciente"("nome");

-- CreateIndex
CREATE INDEX "Paciente_status_idx" ON "Paciente"("status");

-- CreateIndex
CREATE INDEX "Paciente_dataAtendimento_idx" ON "Paciente"("dataAtendimento");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_nome_createdAt_key" ON "Paciente"("nome", "createdAt");
