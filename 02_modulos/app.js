// //require('./datos');
// // console.log(global.test);
// // console.log(module); //Es un objeto que forma parte del objeto global

// // const dato = require('./datos');
// const datos = require ('./datos');

// // datos.log('hola mundo'); // Nombre de la funcion como se importa desde el modulo

// datos('Hola mundo'); //Datos recibe los exports del modulo datos, en este scaso solo se esta imporatndo la funcion definida en datos.js)



// LGUNOS MODULOS INTEGRADOS EN NODE

// MODULO PATH
// const path = require('path');
// console.log(__filename)//nombre del archivo local
// console.log(__dirname)//Nombre del directorio local

// const objPath = path.parse(__filename);

// console.log(objPath);
// console.log(objPath.name + '' + objPath.ext);

// const objPathDir = path.parse(__dirname);
// console.log(objPathDir);

// MODULO OS
// const os = require('os');
// var memoriaLibre = os.freemem();
// var memoriaTotal = os.totalmem();

// console.log(`Memoria libre: ${memoriaLibre}`);
// console.log(`Memoria total: ${memoriaTotal}`);

// MODULO EVENTOS

const EventEmitter = require('events');
const emitter = new EventEmitter();

//Registrar el listener del eventro, el evento llama a esta funcion ([nombre del evento], argumentos)

emitter.on('mensajeLoger', (arg) => //Le pasamos argumentos a la funcion callback
    console.log(`Listener llamado.... ${arg}`) //Despliega los argumentos en la consola
);

//Emite el evento mensajeloger

emitter.emit('MensajeLoger', {id:1, url: 'http://prueba.com'}); //MensajeLoger es el nombre del evento
//Debemos regustar un listener cona accion que se va a ejecutar cuando se active
//Estamos emitiando la llamada al listener de manera explicita porque no tenemos todavia una interfaz
//Le estamos pasando un objeto como argumento

// Modulo http

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){//la propiedad del objeto req
        res.write(`hola mundo desde node!`);//Escribe en el objeto res
        res.end();//Termina la definicion del objeto res
    }
    if(req.url === '/api/productos'){
        res.write(JSON.stringify(['mouse','teclado','bocinas']));
        res.end();
    }
});//Declarar el servdior http
//req recibe datos de aprte dle cliente y res envia una respuesta al cliente, req y res son objetos

server.on(`connection`, (puerto) => {
    console.log(`Nueva conexion...`);
});
//Connection es el nuombre del evento a llamar,ya esta definido dentro de server
//La ufncion recibe como parametro el puerto en el cual va conectado el servidor


server.listen(3000); //Decirle al servidor en que puerto escuchar

console.log(`nuestro servidor esta escuchando el puerto 3000...`);