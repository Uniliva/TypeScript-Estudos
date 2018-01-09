class Negociacoes{
    //usar array<Negociacao> é sememlhante a negociacao[]
    private _negociacoes:Negociacao[]=[];

    adiciona(negociacao:Negociacao){
        this._negociacoes.push(negociacao);
    }

    paraArray():Negociacao[]{
        return  this._negociacoes;
    }
}