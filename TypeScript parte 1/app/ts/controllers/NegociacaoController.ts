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
        this._negociacaoView== new NegociacoesView($("#negociacaoview"));
    }
    adiciona(event: Event):void{
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace("/-/g",",")), parseInt(this._inputQuantidade.value),parseFloat( this._inputValor.value))
        this._negociacoes.adiciona(negociacao);
        
    
        this._negociacoes.paraArray().map(n => {
            console.log(n.data);
            console.log(n.quantidade);
            console.log(n.valor);
            console.log(n.volume);
        });
    }
}