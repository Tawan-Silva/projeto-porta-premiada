export default class PortaModel {
  private numero: number;
  private temPresente: boolean;
  private selecionada: boolean;
  private aberta: boolean;

  constructor(
    numero: number,
    temPresente = false,
    selecionada = false,
    aberta = false
  ) {
    this.numero = numero;
    this.temPresente = temPresente;
    this.selecionada = selecionada;
    this.aberta = aberta;
  }



  get getNumero() {
    return this.numero;
  }

  get getTemPresente() {
    return this.temPresente;
  }

  get getSelecionada() {
    return this.selecionada;
  }

  get getAberta() {
    return this.aberta;
  }

  get getFechada() {
    return !this.aberta;
  }

  desselecionar() {
    const selecionada = false;
    return new PortaModel(this.getNumero, this.getTemPresente, selecionada, this.getAberta)
  }

  alternarSelecao() {
    const selecionada = !this.getSelecionada;
    return new PortaModel(this.getNumero, this.getTemPresente, selecionada, this.getAberta)
  }

  abrir() {
    const aberta = true;
    return new PortaModel(this.getNumero, this.getTemPresente, this.getSelecionada, aberta)
  }

}
