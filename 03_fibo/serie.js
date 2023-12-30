// 0 1 1 2 3 5 8 13

let crearSerie = (cantidad) => {
    return new Promise((resolve, reject) => {
        const fs = require('fs');
        let fibo = 1;
        let fibo2 = 1;
        let serie = '';

        for(let i=2; i<cantidad;i++)
        {
            serie += `${fibo2}\t`;
            fibo2 = fibo + fibo2;
            fibo = fibo2 - fibo;
        }

        fs.writeFile('Fibonacci.txt', serie, (err) => {
            if(err)
                reject (`Hay un error al crear el archivo`);
            else
                resolve (`El arhvio fue creado con exito`);
        });
    });
}

//Exportar el metodo del modulo
module.exports = {
    crearSerie
}