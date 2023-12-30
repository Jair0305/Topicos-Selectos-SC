/*

    Created: 2023-02-10
    Created by: Chavez Islas Jair
    Description: terminal input

*/

const prompt = require('prompt-sync')();

const nombre = prompt('como te llamas?');
console.log(`Hola ${nombre} como estas?`);

var numero = prompt('Dame un numero');

numero = Number(numero);
console.log(`el numero mas 6 es = ${numero+6}`);