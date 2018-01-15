import { Imprimivel } from './index';


export class Negociacao extends Imprimivel {
    //criando o construtor da classe Negociação
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {
        super();
    }
    //criando getters
    get volume() { return (this.quantidade * this.valor) }

    paraTexto(): void {
            console.log(`
            |Data:${this.data}
            |Quantidade:${this.quantidade}
            |Valor:${this.valor}
            |Volume:${this.volume}
            `);
    }
}