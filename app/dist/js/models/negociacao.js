export class Negociacao {
    constructor(_data, valor, quantidade) {
        this._data = _data;
        this.valor = valor;
        this.quantidade = quantidade;
    }
    static criarDe(data, quantidade, valor) {
        const date = new Date(data.replace(/-/g, ","));
        const qty = parseInt(quantidade);
        const value = parseFloat(valor);
        return new Negociacao(date, qty, value);
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    paraTexto() {
        return `
        Data: ${this.data}
        Quantidade: ${this.quantidade}
        Valor: ${this.valor}
    `;
    }
    jaExiste(negociacao) {
        return (this.data.getDate() === negociacao.data.getDate() &&
            this.data.getMonth() === negociacao.data.getMonth() &&
            this.data.getFullYear() === negociacao.data.getFullYear());
    }
}
//# sourceMappingURL=negociacao.js.map