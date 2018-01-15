import { HandleFuntion } from './NegociacaoService';


import { Negociacao, NegociacaoParcial } from "../models/index";


export class NegociacaoService {

    getNegociacoes(handler:HandleFuntion): Promise<Negociacao[]> {
       
      return fetch("http://localhost:8015/dados")
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) =>   dados.map(d =>  new Negociacao(new Date(), d.vezes, d.montante)))
    }

}

export interface HandleFuntion{
        (res:Response):Response;
}