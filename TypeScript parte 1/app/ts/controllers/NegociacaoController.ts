class NegociacaoController {
    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacaoView:Views.NegociacoesView;
    private _mensagemView:Views.MensagemView;
    constructor() {
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor =$("#valor");
        this._negociacaoView = new Views.NegociacoesView($("#negociacaoview"));
        this._negociacaoView.update(this._negociacoes);
        this._mensagemView= new Views.MensagemView($("#msg"));
       
    }
    adiciona(event: Event):void{
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.val().replace("/-/g",",")), parseInt(this._inputQuantidade.val()),parseFloat( this._inputValor.val()))
        this._negociacoes.adiciona(negociacao);
        this._negociacaoView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionado com sucesso!")
        this._limpaCampos();   
     
    }
    _limpaCampos(){
        this._inputData.value="0";
        this._inputQuantidade.value="1";
        this._inputValor.value="0";
        this._inputData.focus();

    }
}