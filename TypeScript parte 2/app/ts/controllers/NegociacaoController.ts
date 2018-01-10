
import { Negociacoes, Negociacao } from './../models/index';
import { MensagemView, NegociacoesView } from './../views/index';
import { verificaTempoExecucao } from '../helpers/decorectors/indexs';

export class NegociacaoController {
    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacaoView:NegociacoesView;
    private _mensagemView:MensagemView;
    constructor() {
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor =$("#valor");
        this._negociacaoView = new NegociacoesView($("#negociacaoview"),true);
        this._negociacaoView.update(this._negociacoes);
        this._mensagemView= new MensagemView($("#msg"));
       
    }

    @verificaTempoExecucao()
    adiciona(event: Event):void{
        event.preventDefault();
        let data =new Date(this._inputData.val().replace("/-/g",","));
        if (this._ehDiaUtil){
            this._mensagemView.update("Só é permitdo cadastrar operações em dias uteis");
            return

        }
        const negociacao = new Negociacao(data, parseInt(this._inputQuantidade.val()),parseFloat( this._inputValor.val()))
        this._negociacoes.adiciona(negociacao);
        this._negociacaoView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionado com sucesso!")
        this._limpaCampos();   
     
    }
    _limpaCampos(){
        this._inputData.value="0";
        this._inputQuantidade.value="1";
        this._inputValor.value="0";
        this._inputData.focus();

    }

    //metodo que retorna um boolean
    private _ehDiaUtil(data:Date):boolean{
        return data.getDay() == diaDaSemana.domingo || data.getDay() == diaDaSemana.sabado;
    }
}

//Usando enum
enum diaDaSemana{
    domingo,segunda,terca,quarta,quinta,sexta,sabado
}