class Negociacao {
    private _data:Date;
    private _quatidade:Number;
    private _valor:Number;
    //criando o construtor da classe Negociação
    constructor(data:Date, quantidade:Number, valor:Number) {
        this._data = data;
        this._quatidade = quantidade;
        this._valor = valor;
    }
    //criando getters
    get data() { return this._data }
    get quantidade() { return this._quatidade }
    get valor() { return this._valor }
    get volume() { return this._quatidade * this._valor }
}