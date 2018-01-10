export abstract class Views<T>{
        constructor(protected _elemento: JQuery,private opcional?:boolean) {
        if(opcional)
            console.log(` - O elemento opcional foi acionado`);
        }
        abstract _template(msg: T): string

        update(msg: T): void { this._elemento.html(this._template(msg)) };



    }
