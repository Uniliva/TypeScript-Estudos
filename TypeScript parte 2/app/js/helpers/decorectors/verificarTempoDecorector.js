System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function verificaTempoExecucao() {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                console.log(`       [ Executando ${propertyKey} ]`);
                console.log(`O metodo [${propertyKey}] foi decorado!`);
                const t1 = performance.now();
                const retorno = metodoOriginal.apply(this, args);
                console.log(`O metodo [${propertyKey}] foi Executado!`);
                const t2 = performance.now();
                console.log(`O metodo [${propertyKey}] Levou ${t2 - t1} ms para executar!`);
                console.log(`       [ Finalizando ${propertyKey} ]`);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("verificaTempoExecucao", verificaTempoExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
