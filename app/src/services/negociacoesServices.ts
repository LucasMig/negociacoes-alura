import { Negociacao } from "../models/negociacao.js";
import { NegociacoesImportadas } from "../interfaces/negociacoesImportadas.js";

export class NegociacoesServices {
  public obterNegociacoes(): Promise<Array<Negociacao>> {
    return fetch("http://localhost:8080/dados")
      .then((response) => response.json())
      .then((dados: Array<NegociacoesImportadas>) => {
        return dados.map((item) => {
          return new Negociacao(new Date(), item.vezes, item.montante);
        });
      });
  }
}
