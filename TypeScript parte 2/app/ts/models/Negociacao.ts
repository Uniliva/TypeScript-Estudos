export class Negociacao {
    //criando o construtor da classe Negociação
    constructor(readonly data:Date,  readonly quantidade:number,  readonly valor:number) {
    }
  
    get volume() { return (this.quantidade * this.valor) }
}