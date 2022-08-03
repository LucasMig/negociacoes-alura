import { Modelo } from "../interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao> {
  constructor(
    private _data: Date,
    public readonly valor: number,
    public readonly quantidade: number
  ) {}

  public static criarDe(
    data: string,
    quantidade: string,
    valor: string
  ): Negociacao {
    const date = new Date(data.replace(/-/g, ","));
    const qty = parseInt(quantidade);
    const value = parseFloat(valor);

    return new Negociacao(date, qty, value);
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const data: Date = new Date(this._data.getTime());
    return data;
  }

  public paraTexto(): string {
    return `
        Data: ${this.data}
        Quantidade: ${this.quantidade}
        Valor: ${this.valor}
    `;
  }

  public jaExiste(negociacao: Negociacao): boolean {
    return (
      this.data.getDate() === negociacao.data.getDate() &&
      this.data.getMonth() === negociacao.data.getMonth() &&
      this.data.getFullYear() === negociacao.data.getFullYear()
    );
  }
}
