class Views {
    constructor(_elemento) {
        this._elemento = _elemento;
    }
    update(msg) { this._elemento.innerHTML = this._template(msg); }
    ;
}
