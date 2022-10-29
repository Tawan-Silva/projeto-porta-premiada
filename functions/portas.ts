import PortaModel from "../model/PortaModel";

export function CriarPortas(
  qtde: number,
  portaComPresente: number
): PortaModel[] {
  return Array.from({ length: qtde }, (_, i) => {
    const numero = i + 1;
    const temPresente = numero === portaComPresente;
    return new PortaModel(numero, temPresente);
  });
}

export function AtualizarPortas(
  portas: PortaModel[],
  portaModificada: PortaModel
) {
  return portas.map((portaAtual) => {
    const igualAModificada = portaAtual.getNumero === portaModificada.getNumero;

    if (igualAModificada) {
      return portaModificada;
    } else {
      return portaModificada.getAberta
        ? portaAtual
        : portaAtual.desselecionar();
    }
  });
}
