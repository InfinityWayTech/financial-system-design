import { getPatient} from "./services/index.service";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const month = searchParams.get("month");
  const year = searchParams.get("year");

  if (!month || !year) {
    return Response.json(
      { error: "month and year are required" },
      { status: 400 }
    );
  }

  const professional = await getPatient(Number(month), Number(year));

  return Response.json(professional);
}
