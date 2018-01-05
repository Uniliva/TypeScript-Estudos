class NegociacaoController {
    private _inputData:Date;
    private _inputQuantidade:Number;
    private _inputValor:Number;
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
    }
    adiciona(event) {
        event.preventDefault();
        const negociação = new Negociacao(this._inputData.value, this._inputQuantidade.value, this._inputValor.value)
        console.log(negociação);
    }
}