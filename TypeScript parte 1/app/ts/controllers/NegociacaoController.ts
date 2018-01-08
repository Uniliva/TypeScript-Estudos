class NegociacaoController {
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacaoView:NegociacoesView;
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = <HTMLInputElement>$("#data");
        this._inputQuantidade = <HTMLInputElement>$("#quantidade");
        this._inputValor = <HTMLInputElement>$("#valor");
        this._negociacaoView = new NegociacoesView($("#negociacaoview"));
        this._negociacaoView.update(this._negociacoes);
    }
    adiciona(event: Event):void{
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace("/-/g",",")), parseInt(this._inputQuantidade.value),parseFloat( this._inputValor.value))
        this._negociacoes.adiciona(negociacao);
        this._negociacaoView.update(this._negociacoes);
        this._limpaCampos();
    
     
    }
    _limpaCampos(){
        this._inputData.value="0";
        this._inputQuantidade.value="1";
        this._inputValor.value="0";
        this._inputData.focus();

    }
}