System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Views;
    return {
        setters: [],
        execute: function () {
            Views = class Views {
                constructor(_elemento, opcional = false) {
                    this._elemento = _elemento;
                    this.opcional = opcional;
                    if (opcional)
                        console.log(` - O elemento opcional foi acionado`);
                }
                update(msg) { this._elemento.html(this._template(msg)); }
                ;
            };
            exports_1("Views", Views);
        }
    };
});
