export class Negociacao {
    //criando o construtor da classe Negociação
    constructor(private _data:Date, private _quantidade:number, private _valor:number) {
    }
    //criando getters
    get data() { return this._data }
    get quantidade() { return this._quantidade }
    get valor() { return this._valor }
    get volume() { return (this._quantidade * this._valor) }
}