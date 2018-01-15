
import { Negociacao } from './Negociacao';
import { Imprimivel } from './Imprimivel';


export class Negociacoes extends Imprimivel {
    //usar array<Negociacao> é sememlhante a negociacao[]
    
    constructor(private _negociacoes: Negociacao[] = []){
        super();
    }

    adiciona(negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }
    paraTexto(): void {
        console.log(this._negociacoes);

    }
}