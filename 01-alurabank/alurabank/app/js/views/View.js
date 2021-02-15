//posso usar o jQuery para corrigir erros de compatibilidade, principalmente com android. Para isso preciso declarar o $ como uma variável, de tipo any, pro compilador aceitar.
//um método abstract é aquele que não tem implementação, porque aqui, o elemento pai não tem como saber quem vai herdar o que. Não pode dar new nesse método pq se ela tiver um método abstrato esse método não tem implementação, então eu obrigo as filhas a implementarem. Assim eu obrigo o compilador a me informar erro de compilação em tempo de desenvolvimento se eu esquecer de implementar o método template.
//<T> indica que a minha classe View é uma classe com tipo genérico. Assim, no momento que essa classe for extendida, ela pode definir o tipo que será utilizado em todo lugar que eu definir o tipo T.
class View {
    constructor(seletor) {
        this._elemento = $(seletor);
    }
    update(model) {
        this._elemento.html(this.template(model));
    }
}
