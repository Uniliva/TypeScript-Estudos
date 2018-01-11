System.register(["./views"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var views_1, NegociacoesView;
    return {
        setters: [
            function (views_1_1) {
                views_1 = views_1_1;
            }
        ],
        execute: function () {
            NegociacoesView = class NegociacoesView extends views_1.Views {
                _template(model) {
                    return `
   <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>

        <tbody>
        ${model.paraArray().map(n => `<tr>
                        <td>${n.data.getDate()}/${n.data.getMonth() + 1}/${n.data.getFullYear()}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                  </tr>`).join('')}        
        </tbody>


        <tfoot>
        </tfoot>
    </table> `;
                }
                ;
            };
            exports_1("NegociacoesView", NegociacoesView);
        }
    };
});
