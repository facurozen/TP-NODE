import pizzasServices from './pizzasServices.js';

import {concatInvert} from './EJ01.js'
import {sumar,restar,multiplicar,dividir,PI} from './EJ02.js';
import {Alumno} from './EJ03.js';
import {copiar} from './EJ04.js';

let textoEntrada01 = "Facundito";
let textoEntrada02 = "MiAmor";

let textoSalida = concatInvert(textoEntrada01, textoEntrada02);
console.clear();
console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
console.log(`Texto de Salida: "${textoSalida}"`);


console.log("Sumar 10 y 5 da: ", sumar(10,5));
console.log("Restar 10 y 5 da: ", restar(10,5));
console.log("Multipilicar 10 y 5 da: ", multiplicar(10,5));
console.log("Dividir 10 y 5 da: ", dividir(10,5));
console.log("El valor de la constante PI es: ",PI)


const alumno1 = new Alumno('lukamosco', '46916069');
const alumno2 = new Alumno('facurozen', '46871290');

console.log(alumno1.mostrar());
console.log(alumno2.mostrar());


copiar('./entrada.txt', './salida.txt');

console.log(pizzasServices.getById(1));