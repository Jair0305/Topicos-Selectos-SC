/*

    Created: 2023-02-10
    Created by: Chavez Islas Jair
    Description: Arrays (basic)

*/

// Los arreglos son objetos similares a una lista cuyo prototipo proporciona metodos para efectuar operaciones de recorrido y de mutacion

// DEFINICION
let frutas = ['manzana', 'banana'];
//Los arreglos son flexibles
let varios = ['Juan', 13, 'Ana', ['Hola', 31]];
let otra = new Array(); //Arreglo vacio
// let otra = [];
// console.log(otra);

otra = new Array('Jorge', 'Karen');
// console.log(otra);

otra = new Array(5);
// console.log(otra);

// LONGITUD DEL ARREGLO
//console.log(frutas.length);

// RECORRER ARRAY
//ForEach()

//frutas.forEach((elemento, indice) => console.log(elemento,indice));
//El elemento forEach() toma como parametro una funcion que a su vez toma dos elementos, elemento e indice
//El elemento forEach() aplica la funcion para cada elemento del arreglo

//Anhadir un elemento al final del array

frutas.push('naranja');
console.log(frutas);

//anhadir varios elementos
frutas.push('pera','melon','uva');
console.log(frutas)

//anhadir elementos al incio
frutas.unshift('fresa');
console.log(frutas);

//Eliminar el ultimo elemento del array
let ultimo = frutas.pop();
console.log(ultimo);
console.log(frutas);

//Eliminar el primer elemento del array
let primero = frutas.shift();
console.log(primero)
console.log(frutas)

//Encontrar el indice de un elemento del array
frutas.push('fresa');
let pos = frutas.indexOf('banana');
// console.log(frutas);
// console.log(pos);

//Eliminar elementos mediante su posicion
let eliminados = frutas.splice(pos, 2); //(posicion inicial, numero de elementos a eliminar)
console.log(eliminados)
console.log(frutas);

//Acceso a los elementos del array
let arr = ['primer elemento0', 'segundo elemento', 'tercer elemento', 'último elemento']
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[arr.length - 1]);

//Los indices de un array pueden considerarse propiedades el objeto, pero se tendra un error si se intenta accerder a un elemento de un array de la siguiente forma, ya que el nombre de la propiedad no sera valido
console.log(arr[0]);

//En js, las propeidades cuyo nombre comienza con un digito no pueden referenciarse ccon la notacion punto y deben accederse mediante la notacion corchete

//Obtener varios elementos de un array
let nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
let masculinos = nombres.slice(1,3); //(incioi,fin) -->indicces
console.log(masculinos);
console.log(nombres);
//El metodo slice devuelve una copia de una parte del array dentro de un nuevo array empezando en el indice inicio, hasta el indice fin(no esta incluido) fin-1
//El array original no se modifica


//LENGTH
//La propiedad lenght en un array en JS esta asociada con algunas propiedades numericas.

console.log(frutas);
console.log(frutas.length);
frutas[5] = 'papaya';
console.log(frutas);

//Si se da un valor entero valido para un indice, se puede agregar un elemento a esa posicion.
//Si no es continuo, als posisciones intermedias se llenan con valores no definidos

console.log(frutas.length);

//Aumentar el valor de lenght
frutas.length = 10;
//Rellena los espacios con elementos undefined
console.log(frutas);
console.log(frutas.length);

//Si se disminuye el valor de la propeidad lenght pueden eliminarse elementos

frutas.length = 2;
console.log(frutas)
console.log(frutas.length)