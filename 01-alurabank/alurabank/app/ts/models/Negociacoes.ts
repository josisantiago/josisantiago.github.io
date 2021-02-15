class Negociacoes {

    // erro de compilação, não podemos deixar o tipo any por padrão

        // Member 'negociacoes' implicitly has an 'any[]' type.
        private _negociacoes: Negociacao[] = [];

        adiciona(negociacao: Negociacao): void {

            this._negociacoes.push(negociacao);
        } 

        paraArray(): Negociacao[] {

            return [].concat(this._negociacoes);
        }

    }