class Negociacoes {
    constructor() {
        // erro de compilação, não podemos deixar o tipo any por padrão
        // Member 'negociacoes' implicitly has an 'any[]' type.
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return [].concat(this._negociacoes);
    }
}
