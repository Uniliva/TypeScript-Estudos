class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacaoView = new NegociacoesView($("#negociacaoview"));
        this._negociacaoView.update(this._negociacoes);
        this._mensagemView = new MensagemView($("#msg"));
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.val().replace("/-/g", ",")), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
        this._negociacoes.adiciona(negociacao);
        this._negociacaoView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionado com sucesso!");
        this._limpaCampos();
    }
    _limpaCampos() {
        this._inputData.val("1");
        this._inputQuantidade.val("1");
        this._inputValor.val(0);
        this._inputData.focus();
    }
}
