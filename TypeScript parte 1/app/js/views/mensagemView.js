class MensagemView extends Views {
    _template(msg) {
        return `<p class="alert alert-info"><strong>Msg:</strong> ${msg}</p> `;
    }
    update(msg) { this._elemento.innerHTML = this._template(msg); }
    ;
}
