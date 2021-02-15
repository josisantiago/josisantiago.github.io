class Negociacao {

    //definir as propriedades da classe no constructor. Colocando private na frente eu estou declarando que essas classes só podem ser alterados por métodos da própria classe
 
    constructor(private _data: Date, private _quantidade: number, private _valor: number) {}

    //como não posso acessar as propriedades acima, crio geters que me permitem acessar esses valore
    get data() {

        return this._data;
    }


    get quantidade() {

        return this._quantidade;
    }

    get valor () {

        return this._valor; 
    }

    get volume() {

        return this._quantidade*this._valor;
    }
}