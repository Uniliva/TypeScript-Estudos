class Views {
    constructor(_elemento) {
        this._elemento = _elemento;
    }
    update(msg) { this._elemento.html(this._template(msg)); }
    ;
}
