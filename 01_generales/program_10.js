/*

    Created: 2023-02-10
    Created by: Chavez Islas Jair
    Description: Arrays, other functions

*/

//EVERY()
//Devuelve true si todos los elementos del array cumplen con el predicado que se recibe como parametro

var esGrande = (elemento) => elemento > 10;
var arr = [12,5,8,130,44];
var cumple = arr.every(esGrande);
console.log(cumple);

var arr2 = [12,54,18,130,44];
cumple = arr2.every(esGrande);
console.log(cumple);

//fill()
//Asigna un valor estatico a todos los elementos del array entre las posiciones iniocio y fin (-1), el fin no se incluye

arr.fill(4);//Rellena el arreglo con el valor 4
console.log(arr);
arr.fill(5,1);//Valor estatico 5, inicio =1
console.log(arr);
arr.fill(6,2,4); //Valor estatico 6, incio =2, fin =4
console.log(arr);

//filter()
//Devuelve un nuevo array que contiene todos los elementos del original para los que se cumple el predicado que se le pasa como parametro
arr = [12,5,8,130,44];
var filtrados = arr.filter(esGrande);
console.log(filtrados);

//find()
//Devuelve el primer elemento del array que cumpla con el predicado que se le pasa como parametro o undefined si no lo cumple
const esPar = (n) => n%2 === 0;
arr[5,4,3,10,13,8]
var encontrado = arr.find(esPar);
console.log(encontrado);
arr = [3,5,7,9,11];
encontrado = arr.find(esPar);
console.log(encontrado)

//findIndex
//Devuelve el indice del primer eemento del array que cumpla con el predicado que se le pasa como parametro o -1 si ninguno lo cumple

arr[5,4,3,10,13,8]
var idx = arr.findIndex(esPar);
console.log(idx);
arr = [3,5,7,9,11];
encontrado = arr.findIndex(esPar);
console.log(idx)

//includes()
//Determian si el array contiene el valor buscado y devuelve true o false segun sea el caso

// var esta = arr.includes('9');
// console.log(esta);
// esta = arr.includes(8);
// console.log(esta);

// //Inedexof
// //Devuelve el indicie del primer elemento del array que sea igual al elemento buscado o -1 si no existe

// console.log(arr.indexOf(9))
// console.log(arr.indexOf(45))

//Join()
//Concatena en un string todos los elementos de un array
const elementos = ['fuego','tierra','aire','agua'];
var s = elementos.join();
s = elementos.join('');//quita el separador
console.log(s);
s = elementos.join(', ')//cambia el separador
console.log(s);
s = elementos.join('+')
console.log(s);

//Last index of devuelve el indice del ultimo elemento del arrar que sea igual al elemento buscado o -1 si no existe

const animales = ['oso', 'tigre ', 'pinguino', 'oso'];
console.log(animales.lastIndexOf('oso'))
console.log(animales.lastIndexOf('tigre'))

//reverse()

//invierte el orden de los elementos de un array (el primero a ser el ultimo y el ultimo a ser el primer), este metodo modifica el array

const array1 = ['uno','dos','tres'];
console.log(`array 1 ${array1}`);
console.log(`reversed : ${array1.reverse()}`);
console.log(`array1: ${array1}`)

//Some()
//Devuelve true si al menos un elemento del array cumple con el predicado qeu se le apsa como aprametro

const arreglo = [1,2,3,4,5]
console.log(arreglo.some(esPar));

//sort()
//Ordena los elementos de un array modfiicando este y devuelve el array ordenado

var frutas = ['toronjas','manzanas','bananas']
console.log(frutas.sort());//Modifica el array
console.log(frutas)

//sort() puede utilizar una funcion de comapracion
//Si no se provee compareFucntion, los elementos son ordenados convirtiendolos en strings y comparando la posicion del valor unicod de dichos strings

arr = ['80','9','700',40,1,5,200];
console.log(arr.sort());

var comparar = (a,b) => a-b;
console.log(`Original: ${arr}`);
console.log(`ordenado sin funcion: ${arr.sort()}`)
console.log(`ordenado con funcion: ${arr.sort(comparar)}`)

//Si compareFunction(a,b) es menor que 0, si situa a en un indice menor que b, es decir que a viene primero
//si con comparefunction() retorna 0, se dejan a y b sin cambios entre ellos, pero ordenados respecto a los elementos diferentes
//Si comparefunction es maytor que 0, se situa b en un indice menor que a