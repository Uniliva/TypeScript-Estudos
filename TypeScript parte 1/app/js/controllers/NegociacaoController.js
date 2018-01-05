class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacaoView == new NegociacoesView($("#negociacaoview"));
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace("/-/g", ",")), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao);
        this._negociacoes.paraArray().map(n => {
            console.log(n.data);
            console.log(n.quantidade);
            console.log(n.valor);
            console.log(n.volume);
        });
    }
}
