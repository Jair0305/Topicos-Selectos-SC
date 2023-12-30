/*

    Created: 2023-02-24
    Created by: Chavez Islas Jair
    Description: Async/await

*/

// La declaracion de funcion asyn defina una funcion asincrona
//cuando se llama a una funcion async, esta devuelve una promesa, un elemento promise. Cuando la funcion async devuelve un valor, promise se resolvera con el valor devuelto. Si la funcion async genera una excepcion o algun error, promise rechazara con el valor generado

//una funcion async puede contener una expresionwawait, la cual pausa la ejecucion de la funcion asincrona y espera la resolucion de la promise pasada y, a contuinuacion, reanuda la ejecucion de la funcion async y devuelve el valor resuelto

function mensaje(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true)
                resolve('Esto se ejecuta despues de 5 segundos');
            else
                reject(`hubo un error`);
        }, 5000);
    });
}

async function llamadaAsync(){
    console.log(`llamada...`);
    const res = await mensaje();
    console.log(`listo`);
    return res;
}

llamadaAsync()
    .then(msg => console.log(msg))
    .catch(error => console.log(error))