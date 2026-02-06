// import { getProfessional } from "./services/index.service";

import { getProfessionals } from "./services/index.service";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search");  

  const professional = await getProfessionals({ search: search || undefined });

  return Response.json(professional);
}

export async function POST() {
}