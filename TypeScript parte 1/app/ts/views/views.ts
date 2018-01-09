class Views<T>{
    constructor(protected _elemento: Element){
    }
    _template(msg:T):string{
        throw new Error('NECESSARIO IMPLEMENTAR O TEMPLATE');
        
    }

    update(msg: T): void { this._elemento.innerHTML = this._template(msg) };


  
}