class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        //quando NegociacaoController é reinderizado eu vou reinderizar negociacoesView baseado nos dados dessas negociacoes
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        // mudou aqui
        const negociacao = new Negociacao(new Date(this._inputData.val().replace(/-/g, '/')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
        this._negociacoes.adiciona(negociacao);
        //assim que eu acabo de reinderizar a lista de negociacoes de negociacoes eu vou pedir pra minha negociacoesView atualizar os dados com as novas negociacoes
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso');
    }
}
