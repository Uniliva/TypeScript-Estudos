import { verificaTempoExecucao } from "../helpers/decorectors/indexs";

export abstract class Views<T>{
        constructor(protected _elemento: JQuery,private opcional:boolean=false) {
        if(opcional)
            console.log(` - O elemento opcional foi acionado`);
        }
        
        abstract _template(msg: T): string
        
        @verificaTempoExecucao()
        update(msg: T): void { this._elemento.html(this._template(msg)) };



    }
