import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/viewNegociacoes.js";
import { DiasDaSemana } from "../enums/diasDaSemana.js";
import { logarTempoDeExec } from "../decorators/logarTempoDeExec.js";
import { inspecionar } from "../decorators/inspecionar.js";
import { domInjector } from "../decorators/domInjector.js";
import { NegociacoesServices } from "../services/negociacoesServices.js";
import { imprimir } from "../utils/imprimir.js";

export class ControlNegociacao {
  @domInjector("#data")
  private inputData: HTMLInputElement;
  @domInjector("#quantidade")
  private inputQuantidade: HTMLInputElement;
  @domInjector("#valor")
  private inputValor: HTMLInputElement;

  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoes--view");
  private mensagemView = new MensagemView("#mensagem--view");
  private negociacoesServices = new NegociacoesServices();

  constructor() {
    this.negociacoesView.update(this.negociacoes);
  }

  @inspecionar()
  @logarTempoDeExec()
  public adicionarNegociacao(): void {
    const negociacao = Negociacao.criarDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );
    if (!this.diaUtil(negociacao.data))
      return this.mensagemView.update(
        "Apenas negociações em dias úteis são aceitas!"
      );

    this.negociacoes.adicionar(negociacao);
    this.limparForm();
    this.atualizarViews();

    imprimir(negociacao, this.negociacoes);
  }

  importarDados(): void {
    this.negociacoesServices
      .obterNegociacoes()
      .then((negociacoesImportadas) =>
        negociacoesImportadas.filter(
          (negociacaoImportada) =>
            !this.negociacoes
              .listar()
              .some((negociacao) => negociacao.jaExiste(negociacaoImportada))
        )
      )
      .then((negociacoesImportadas) => {
        negociacoesImportadas.forEach((negociacao) =>
          this.negociacoes.adicionar(negociacao)
        );

        this.negociacoesView.update(this.negociacoes);
      });
  }

  private diaUtil(data: Date): boolean {
    return (
      data.getDay() > DiasDaSemana.DOMINGO &&
      data.getDay() < DiasDaSemana.SABADO
    );
  }

  private limparForm(): void {
    this.inputData.value =
      this.inputQuantidade.value =
      this.inputValor.value =
        "";

    this.inputData.focus();
  }

  private atualizarViews(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update("Negociação adicionada com sucesso");
  }
}
