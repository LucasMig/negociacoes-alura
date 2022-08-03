import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes> {
  private negociacoes: Array<Negociacao> = [];

  public adicionar(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  public listar(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }

  public paraTexto(): string {
    return JSON.stringify(this.negociacoes, null, 2);
  }

  public jaExiste(negociacoes: Negociacoes): boolean {
    return (
      JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.listar())
    );
  }
}
