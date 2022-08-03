import { Negociacao } from "../models/negociacao.js";
export class NegociacoesServices {
    obterNegociacoes() {
        return fetch("http://localhost:8080/dados")
            .then((response) => response.json())
            .then((dados) => {
            return dados.map((item) => {
                return new Negociacao(new Date(), item.vezes, item.montante);
            });
        });
    }
}
//# sourceMappingURL=negociacoesServices.js.map