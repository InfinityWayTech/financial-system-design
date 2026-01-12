import { NextRequest, NextResponse } from "next/server";
import {
  getSummaryService,
  processarDadosService,
} from "./services/index.service";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const arquivoSistema = formData.get("baseSister") as File;
    const arquivoFinanceira = formData.get("baseFinance") as File;

    if (!arquivoSistema || !arquivoFinanceira) {
      return NextResponse.json(
        {
          error: "Ambos os arquivos são obrigatórios",
        },
        { status: 400 }
      );
    }

    const resultado = await processarDadosService(
      {
        baseSister: arquivoSistema,
        baseFinance: arquivoFinanceira,
      },
    );

    return NextResponse.json({
      sucesso: true,
      dados: resultado,
    });
  } catch (erro) {
    console.error("Erro ao processar dados:", erro);
    return NextResponse.json(
      { error: "Erro ao processar dados" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const month = Number(request.nextUrl.searchParams.get("month"));
    const year = Number(request.nextUrl.searchParams.get("year"));

    const summary = await getSummaryService(month, year);
    return NextResponse.json(summary);
  } catch (erro) {
    console.error("Erro ao trazer o resumo:", erro);
    return NextResponse.json(
      { error: "Erro ao trazer o resumo" },
      { status: 500 }
    );
  }
}
