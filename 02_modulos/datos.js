var url = 'http://wikipedia.com';

function dato(mensaje){
    //Enviar un http request
    console.log(mensaje);
}

// module.exports.log = dato; //Exporta la funcion dato con el alias log
// module.exports.url = url; //exporta la variable url con el mismo nomnre

module.exports = dato; //exporta solamente la funcion dato

//Las exportaciones se vuelven publicas para ser accedidas desde otros programas .

// console.log(module);