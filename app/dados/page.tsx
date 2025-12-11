import dynamic from "next/dynamic";
import { Suspense } from "react";

const DadosPageClient = dynamic(
  () => import("./dados-page-client").then((mod) => mod.DadosPageClient),
  { loading: () => <div>Carregando...</div> }
);

const DadosPage = () => {
  return (
    <Suspense fallback={<div>Carregando página...</div>}>
      <DadosPageClient />
    </Suspense>
  );
};

export default DadosPage;