import { ControlNegociacao } from "./controllers/controlNegociacao.js";

const negociacaoController = new ControlNegociacao();

const form = document.querySelector(".form");
const btnImportar = document.querySelector("#botão--importar");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    negociacaoController.adicionarNegociacao();
  });
} else {
  throw Error(
    "Não foi possível inicializar a aplicação. Verifique se o form existe."
  );
}

if (btnImportar) {
  btnImportar.addEventListener("click", function () {
    negociacaoController.importarDados();
  });
} else {
  throw Error("Botão 'importar' não foi encontrado.");
}
