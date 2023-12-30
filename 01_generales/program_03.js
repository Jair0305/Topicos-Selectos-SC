/*

    Created: 2023-02-07
    Created by: Chavez Islas Jair
    Description: Functions (basic)

*/

// function nombre(nom = 'Juan')
// {
//     console.log('Entrada a la funcion');
//     console.log('hola ' + nom)
// }

// nombre('Jorge');
// nombre();

// function nombre(nom='Juan')
// {
//     console.log('Entrada a la funcion');
//     return 'Hola ' + nom;
// }

// var a = nombre('Jorge');
// console.log(a);
// var b = nombre(b);
// console.log(b)

// function nombreCompleto(nombre, apellido)
// {
//     return 'Hola ' + nombre + '' + apellido;
// }

// var c = nombreCompleto('Ana', 'Garcia Perez');
// console.log(c);


//FUNCIONES FLECHA

//(param1, param2, param3, ...) => {expresion;}
//Funcion anonima

//Funcion inicial

// function(a)
// {
//     return a + 100;
// }

// //Pasar a funcion flecha
// //Quitar la palabra function
// //Quitar las llaves y la palabra return
// //Quitar los parentesis del parametro

// a => a + 100;

// Funcion varios argumentos
//Funcion inicial
// function(a,b){
// return a + b + 100;
//}


//Fucnion flecha
// (a, b) +> a + b + 100;


//Con varias lineas de funciones

//Funcion inicial

// function(a,b){
//     let chuck = 42;
//     return a + b + chuk;
// }

//Funcion flecha

// (a,b) => {
//     let chuck = 42;
//     return a + b + chuck;
// }


//Funcion flecha para sumar dos numeros

// var sumar = (a,b) => a+b;
// var result = sumar(5,4);
// console.log(result);

//Parametros por default

// var sumar = (a, b=50) => a + b;
// var result = sumar(5);
// console.log(result);


// Sin parametros
// var nombre = () => 'Alberto Lopez Juarez';
// var result = nombre();
// console.log(result);

//Con varios parametros y varias lineas

// var promedio = (a,b,c) =>
// {
//     let suma = a + b + c;
//     return suma / 3;
// }
// var result = promedio(5,6,7);
// console.log(result);

//Devolver un objeto unico, se utilizan parentesis para indicar que se va a devolver un objeto unico

// var getPersona = id => ({identificador: id, nombre: 'Alicia'});
// var result = getPersona(1);
// console.log(result);
// var result2 = getPersona(35);
// console.log(result2);