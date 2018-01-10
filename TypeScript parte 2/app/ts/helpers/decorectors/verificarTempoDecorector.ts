export function verificaTempoExecucao() {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
       
     
        const metodoOriginal = descriptor.value; descriptor.value = function (...args: any[]) {
            console.log(`       [ Executando ${propertyKey} ]`);
            console.log(`O metodo [${propertyKey}] foi decorado!`)
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            console.log(`O metodo [${propertyKey}] foi Executado!`)
            const t2 = performance.now();
            console.log(`O metodo [${propertyKey}] Levou ${ t2-t1} ms para executar!`)
            console.log(`       [ Finalizando ${propertyKey} ]`);

            return retorno;
        }
        return descriptor;
    }
}