/*

    Created: 2023-02-10
    Created by: Chavez Islas Jair
    Description: for in, for off

*/

// FOR IN
// Un bloque for in, itera sobre las propiedades de un objeto en un orden arbitrario
//Los indicies de un arreglo son solo propiedades enumerables con nombres enteros y, por lo demas, son identicos a las propeidades generales del objeto

//No hay garantia de que for in devuelva los indices en un orden particular

// Debido a que el orden de iteracion depende de la implementacion, es posible que la iteracion sobre un arreglo , no visite los elementos en un orden coherente. Por lo tanto, es mejor usar un ciclo for o el ciclo for of cuando se itera sobre arreglos donde el orden de acceso es importante

var obj = {a:1, b:3, c:3}

var arr = ['a','b','c'];

var arr_obj = {0:'a', 1:'b', 2:'c'};

// for(const prop in obj)
// {
//     console.log(`obj.${prop} = ${obj[prop]}`);
// }

//obj[prop] acceda al valor asociado con la propiedad

// for(const prop in arr_obj)
// {
//     console.log(`arr_obj.${prop} = ${arr_obj[prop]}`);
// }

// for (const prop in arr)
// {
//     console.log(`arr.${prop} = ${arr[prop]}`);
// }

// var dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
// for(const prop in dias)
// {
//     console.log(`dias.${prop} = ${dias[prop]}`)
// }

// FOR OF

//Ejecuta un bloque de codigo para cada elemento de un objeto iterable como lo son un string, un array, objetos similares a un array, map, set e iterables definidos por el usuario

//Arreglo

// let iterable = [10, 20, 30];
// for(const value of iterable)
// {
//     let val = value * 2;
//     console.log(val)
// }

// STRING

// let iterable = 'Hola mundo!';
// for(const value of iterable)
// {
//     console.log(value);
// }

// SET

// let iterable = new Set([1,1,2,2,3,3]); //JS quita los elementos repetidos
// console.log(iterable);

// for (const value of iterable)
// {
//     console.log(value);
// }

// MAP

let iterable = new Map([['a',1],['b',2],['c',3]]);
for(const entry of iterable)
{
    console.log(entry)
}

for(const [key, value] of iterable)
{
    console.log(`la llave es ${key}, el valor es ${value}`);
}