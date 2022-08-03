export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionar(negociacao) {
        this.negociacoes.push(negociacao);
    }
    listar() {
        return this.negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
    jaExiste(negociacoes) {
        return (JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.listar()));
    }
}
//# sourceMappingURL=negociacoes.js.map