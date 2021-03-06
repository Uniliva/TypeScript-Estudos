System.register(["./verificarTempoDecorector", "./domInject", "./TimerDecorator"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (verificarTempoDecorector_1_1) {
                exportStar_1(verificarTempoDecorector_1_1);
            },
            function (domInject_1_1) {
                exportStar_1(domInject_1_1);
            },
            function (TimerDecorator_1_1) {
                exportStar_1(TimerDecorator_1_1);
            }
        ],
        execute: function () {
        }
    };
});
