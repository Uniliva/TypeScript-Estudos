

import { Negociacao } from './index';

export class Negociacoes{
    //usar array<Negociacao> é sememlhante a negociacao[]
    private _negociacoes:Negociacao[]=[];

    adiciona(negociacao:Negociacao){
        this._negociacoes.push(negociacao);
    }

    paraArray():Negociacao[]{
        return ([] as Negociacao[]).concat(this._negociacoes);
    }
}