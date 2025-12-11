const getMaquinetaBadgeVariant = (maquinetaName: string) => {
  switch (maquinetaName) {
    case "Mittu Catarina":
      return "default"; // Ou outra variante que você tenha, como "success"
    case "Mittu Infinity Medcos": // Exemplo de outra maquineta
      return "secondary";

    case "Mittu Medca":
      return "default";
    // Adicione mais casos conforme necessário
    default:
      return "outline"; // Variante padrão para maquinetas não mapeadas
  }
};

export { getMaquinetaBadgeVariant };
