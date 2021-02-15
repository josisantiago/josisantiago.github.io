class Negociacao {
    //definir as propriedades da classe no constructor. Colocando private na frente eu estou declarando que essas classes só podem ser alterados por métodos da própria classe
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    //como não posso acessar as propriedades acima, crio geters que me permitem acessar esses valore
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
