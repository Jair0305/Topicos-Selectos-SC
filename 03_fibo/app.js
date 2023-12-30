const serie = require('./serie.js');

let argv = process.argv; //Propiedad del modulo process para saber los argumentos de ejecucion

console.log(argv);

let cantidad = 5;

cantidad = argv[2].split('=')[1];
console.log(argv[2].split('='));
console.log(cantidad);
serie.crearSerie(cantidad)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));