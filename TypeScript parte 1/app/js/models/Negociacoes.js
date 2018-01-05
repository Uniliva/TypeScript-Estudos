class Negociacoes {
    constructor() {
        //usar array<Negociacao> é sememlhante a negociacao[]
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return this._negociacoes;
    }
}
