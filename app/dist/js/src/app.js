import { ControlNegociacao } from "../controllers/controlNegociacao.js";
const negociacaoController = new ControlNegociacao();
const form = document.querySelector(".form");
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        negociacaoController.adicionarNegociacao();
    });
}
else {
    throw Error("Não foi possível inicializar a aplicação. Verifique se o form existe.");
}
//# sourceMappingURL=app.js.map