/*

    Created: 2023-02-22
    Created by: Chavez Islas Jair
    Description: map, reduce (arrays)

*/

//map()
//Crea un nuevo array con los resultados de la llamada a la funcion indicada, aplicada a cada uno de los elementos del array original

var numeros = [1,5,10,15];
var funcion = (x) => x*2;
var dobles = numeros.map(funcion);
console.log(numeros);
console.log(dobles);


//math es un modulo global con funciones matematicas
var raices = numeros.map((num) => Math.sqrt(num));
console.log(raices);

//reduce()
//Ejecuta una funcion reductora sobre caada elemento de un array, devolviendo como resutlado un unico valor

//La funcion reductora recibe 4 argumentos
//Acumulador (acc) --> valoranterior (resultado de la iteracion previa)
//valor actual
//indice actual
//array

//El avalor devuelto de la funcion reductora se asignaal acumulador, cuyo valor se recuerda en cada iteracion del array, en ultima isntancia, se convierte en el valor final, unico y resultante

funcion = (valorAnterior, valorActual, indice, array) =>{
    console.log(`Iteracion ${indice}: ${valorAnterior}, ${valorActual}, ${array}`)
    return valorAnterior + valorActual
}

var numeros = [0,1,2,3,4];
var resultado = numeros.reduce(funcion)
console.log(`resultado final: ${resultado}`)


//Pasandole un valor inciail
var resultado = numeros.reduce(funcion, 20);
console.log(`resultado final: ${resultado}`)

//Sise pasa un valor incial al llamar reduce, entonces el valor anterior sera igual a valor inciial y valor actual sera igual al primer elemento dela rray

//si no se pasa el valor inciial, entonces valor anterior sera igual al primer vlaor del array y el valor actual sera el segundo

var items = [5,6,7,8,9]
//Sumatoria
resultado = items.reduce((total, num) => total +num)
console.log(resultado)
//Resta
resultado = items.reduce((total, num) => total -num)
console.log(resultado)

//integrar (aplanar) un arreglo
var arr = [[0,1],[2,3],[4,5]];
var aplanado = arr.reduce((a,b) => {
    console.log(`valor anteiror: ${a}`);
    console.log(`valor actual: ${b}`);
    return a.concat(b)
});
console.log(aplanado);

//con objetos

var detalle = [
    {
        codigo:'123',
        cantidad:1
    },
    {
        codigo:'798',
        cantidad:2
    },
    {
        codigo:'567',
        cantidad:4
    }
];

resultado  = detalle.reduce((i, obj) =>{
    i.cantidad += obj.cantidad
    return i;
})

console.log(resultado);
console.log(resultado.cantidad)