//esse é o ponto de entrada da aplicação
// app/ts/app.ts

const controller = new NegociacaoController();

$('.form').submit(controller.adiciona.bind(controller));