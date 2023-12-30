/*
created by 2023-01-31
by Jair
First program in Js declaration and data types
*/

/*
    Hay 3 tipos de declaraciones en JS
    var: declara variables en un ambito (scope) local, inicializandolas con un valor opcional
    let: declara variables en un ambito (scope) bloque, inicializandolas con un valor opcional
    const: declara variables (constantes) de solo lectura
*/

var variable; //declaracion de variable
console.log(variable); //Salida a terminales

var variable = 'Jair Chavez';
console.log(variable);

//El ; en Js es opcional. Js determina si la instruccion termina en ese momento
//El ; depende del programador
//PAra e curso lo pondremos siempre, para evitar copnfusiones


//var nombre = 'Jorge'; //var no revisa que el nombre de la variable ya se declaro
//console.log(nombre);

//let nombre = 'Ana'; // let no deja declarar la variable con el mismo nombre dos veces

// Esto evita utilizar el mismo nombre de variable dos veces y que ahya problemas de logica

//Otra diferencia entre var y let es el scope


/*
var nombre = 'Jair Chavez';

    if(true)
{
    var nombre = 'Jorge';
    console.log(nombre);
}
console.log(nombre);

*/

//var declara la variable de forma local

// let nombre = 'Jair Chavez';

// if(true)
// {
//     let nombre = 'Jorge';
//     console.log(nombre);
// }
// console.log(nombre);

// let declara la variable dentro del ambito de bloque

/*
let nombre = 'Jair Chavez';
nombre = 'Ana';
console.log(nombre);

*/

/*

    Js es case sensitive, distingue entre mayusculas y minusculas, por ejemplo, Casa y casa son variables distintas, las variables en Js pueden comenzar con 
    Letra
    _
    $

*/

/*

    JS es un lenguaje debilmente tipado y dinamico, las variables en Js bno estan asociados directamente con un tipo de dato particular, y a cualquier variable se le pueden asignar y reasignar vvalores de todo tipo

*/

// let foo = 42;
// console.log(foo);
// foo = 'bar'; //foo ahora es un string
// console.log(foo);
// foo = true; //foo ahora es booleano
// console.log(foo);


/*

    Tipos primitivos

    boolean: representa una entidad logica y puede tomar 2 valores, true y false

*/

// let bool = true;
// bool = false;

//Null: tiene exactamente el valor null

let = null;

let x;
if(x == undefined)
{
    console.log('Si');
}else
{
    console.log('No');
}

// Number: es un valor en formato bianrio de 64 bits con doble precision

const n = 52.8;
console.log(n);

//Bigint: es un primitivo que puede representar numeros enteros con precision arbitraria

const y = 2 ** 53
console.log(y)

// String son cadenas de caracteres

const s = 'Maria';
