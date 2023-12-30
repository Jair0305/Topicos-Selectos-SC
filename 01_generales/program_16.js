/*

    Created: 2023-02-24
    Created by: Chavez Islas Jair
    Description: promises

*/

//Las promesas son utilizadas en computaciones asincronas
//Una promesa representa un valor que puede estar disponible ahora, en el futuro o nunca.

//Permite asociar manejadores que actuaran asincornamente sobre un eventual valor en caso de exito, o la razon d ela falla en caso de una falla. Esto permite que metodos asincronos devuelvan valores como si fueran sincronos: en vez de inmediatamente retornar el valor final
//El metodo asincrono devuelve una promesa de suministrar el valor en algun momento del futuro.

//Una promesa se encuentra en uno d elos siguientes estados

//pendiente (pending): Estado inicial, no cumplida, ni rechazada
//cumplida(fulfilled): significa que la operacion se completo satisfactoriamente
//rechazada (rejected): significa que la operacion fallo
//establecida (settled): ya se determino si fue cumplida o rechazada

const mensaje = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(false)
            resolve(`Esto se ejecutara despeus de 5 segundos`);
        else
            reject(`hubo un error`)
    }, 5000);
});

mensaje
    .then(msg => console.log(msg))
    .catch(error => console.log(error))


const mensaje2 = new Promise((resolve, reject) => {
    let a = 5;
    let b = 2;
    if(b!=0)
    {
        let c = a/b;
        resolve(`se pudo ahcer la operacion`);
    }else
    {
        reject(`division por cero`);
    }
});

mensaje2
    .then(msg => console.log(msg))
    .catch(error => console.log(error));