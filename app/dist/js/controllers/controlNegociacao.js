var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoes--view");
        this.mensagemView = new MensagemView("#mensagem--view");
        this.negociacoesServices = new NegociacoesServices();
        this.negociacoesView.update(this.negociacoes);
    }
    adicionarNegociacao() {
        const negociacao = Negociacao.criarDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.diaUtil(negociacao.data))
            return this.mensagemView.update("Apenas negociações em dias úteis são aceitas!");
        this.negociacoes.adicionar(negociacao);
        this.limparForm();
        this.atualizarViews();
        imprimir(negociacao, this.negociacoes);
    }
    importarDados() {
        this.negociacoesServices
            .obterNegociacoes()
            .then((negociacoesImportadas) => negociacoesImportadas.filter((negociacaoImportada) => !this.negociacoes
            .listar()
            .some((negociacao) => negociacao.jaExiste(negociacaoImportada))))
            .then((negociacoesImportadas) => {
            negociacoesImportadas.forEach((negociacao) => this.negociacoes.adicionar(negociacao));
            this.negociacoesView.update(this.negociacoes);
        });
    }
    diaUtil(data) {
        return (data.getDay() > DiasDaSemana.DOMINGO &&
            data.getDay() < DiasDaSemana.SABADO);
    }
    limparForm() {
        this.inputData.value =
            this.inputQuantidade.value =
                this.inputValor.value =
                    "";
        this.inputData.focus();
    }
    atualizarViews() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso");
    }
}
__decorate([
    domInjector("#data")
], ControlNegociacao.prototype, "inputData", void 0);
__decorate([
    domInjector("#quantidade")
], ControlNegociacao.prototype, "inputQuantidade", void 0);
__decorate([
    domInjector("#valor")
], ControlNegociacao.prototype, "inputValor", void 0);
__decorate([
    inspecionar(),
    logarTempoDeExec()
], ControlNegociacao.prototype, "adicionarNegociacao", null);
//# sourceMappingURL=controlNegociacao.js.map