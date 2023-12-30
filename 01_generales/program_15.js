/*

    Created: 2023-02-10
    Created by: Chavez Islas Jair
    Description: callback functions

*/
// Una funcion callback es una funcion que se pasa a otra funcion como un argumento(parametro), que luego se invoca dentro de la funcion externa para completar algun tipo de rutina o accion

//Ejemplo1

function mensaje(callback)
{
    console.log(`mensaje antes de la llamada a la funcion`);
    callback();
}

function saludo(){
    console.log(`saludo despues de la llamada a callback()`)
}

// mensaje(saludo);

function sumar(num1,num2,callback)
{
    let resultado = num1 + num2;
    callback(resultado)
}

function salida(res){
    console.log(`El resutlado de la suma es ${res}`)
}

sumar(5,8,salida)

//Ejemplo3

function salida2(){
    console.log(`Esto se ejecuta despues de 3 segundos`)
}

//Settimeout espera una cantidad de tiempo en ms y despues llama a una funcion callback
setTimeout(salida2, 3000)

setTimeout(() => console.log(`Esto se ejecuta despues de 5 segundos`), 5000)