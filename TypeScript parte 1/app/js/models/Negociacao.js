class Negociacao {
    //criando o construtor da classe Negociação
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    //criando getters
    get data() { return this._data; }
    get quantidade() { return this._quantidade; }
    get valor() { return this._valor; }
    get volume() { return (this._quantidade * this._valor); }
}
