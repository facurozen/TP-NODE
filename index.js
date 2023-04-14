import {concatInvert} from './manejoStr.js'
let textoEntrada01 = "Facundito";
let textoEntrada02 = "MiAmor";

let textoSalida = concatInvert(textoEntrada01, textoEntrada02);
console.clear();
console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
console.log(`Texto de Salida: "${textoSalida}"`);

