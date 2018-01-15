import { Imprimivel } from "../models/index";

export function imprime(...objetos:Imprimivel[]){    
    console.log("|START ------------------------------------------ PRINT|")
    objetos.forEach(objeto => objeto.paraTexto());
    console.log("|END ------------------------------------------ PRINT|")
}