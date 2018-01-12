import { Negociacoes, Negociacao, NegociacaoParcial } from './../models/index';
import { MensagemView, NegociacoesView } from './../views/index';
import { verificaTempoExecucao, domInject, TimerDecorator } from '../helpers/decorectors/indexs';

export class NegociacaoController {
    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();
    private _negociacaoView:NegociacoesView;
    private _mensagemView:MensagemView;
    constructor() {
        this._negociacaoView = new NegociacoesView($("#negociacaoview"),true);
        this._negociacaoView.update(this._negociacoes);
        this._mensagemView= new MensagemView($("#msg"));
       
    }

    //@verificaTempoExecucao()
    adiciona(event: Event):void{
        event.preventDefault();
        let data =new Date(this._inputData.val().replace("/-/g",","));
        if (this._ehDiaUtil(data)){
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
        console.log(data.getDay());
        return data.getDay() == diaDaSemana.domingo || data.getDay() == diaDaSemana.sabado;
    }
    
    @TimerDecorator(500)
    importaDados(){
        function isOk(res:Response){
            if(res.ok){
                    return res;
            }else{
                throw new Error("Ocorreu um erro!");
            }
        }
        fetch("http://localhost:8015/dados")
        .then(res => isOk(res))
        .then(res => res.json())
        .then((dados:NegociacaoParcial[]) => {
            dados.map( d => new Negociacao(new Date(), d.vezes, d.montante))
            .forEach(negociacao => this._negociacoes.adiciona(negociacao))
            this._negociacaoView.update(this._negociacoes);
        })
        .catch(erro => console.log(erro));
    }
}

//Usando enum
enum diaDaSemana{
    domingo,segunda,terca,quarta,quinta,sexta,sabado
}