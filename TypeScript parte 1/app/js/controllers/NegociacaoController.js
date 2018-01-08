class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacaoView = new NegociacoesView($("#negociacaoview"));
        this._negociacaoView.update(this._negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace("/-/g", ",")), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao);
        this._negociacaoView.update(this._negociacoes);
        this._limpaCampos();
    }
    _limpaCampos() {
        this._inputData.value = "0";
        this._inputQuantidade.value = "1";
        this._inputValor.value = "0";
        this._inputData.focus();
    }
}
