abstract class Views<T>{
    constructor(protected _elemento: JQuery){
    }
   abstract  _template(msg:T):string

    update(msg: T): void { this._elemento.html(this._template(msg)) };


  
} 