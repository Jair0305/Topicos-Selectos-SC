//1. Dados dos números (dos variables) imprimir el mayor, el menor o imprimir "ambos son iguales"

// var a=6,b=8;

// function decidir (a,b)
// {
//   if(a>b)
//   {
//     console.log(`${a} es mayor que ${b}`);
//   }else if(b>a)
//   {
//     console.log(`${b} es mayor que ${a}`);
//   }else
//   {
//     console.log('son iguales')
//   }
// }

// decidir(a,b);


//2. Dado un número entero decir si es par, impar o cero

// var n=7;

// function decidir2(a)
// {
//   if(a%2 === 0)
//   {
//     console.log('el numero es par');
//   }else
//   {
//     console.log('no es par');
//   }
// }

// decidir2(n);

//3. Dadas tres calificaciones como números flotantes, calcular el promedio y decir si el alumno aprueba (>=7) o reprueba.

// var calif = [4.5,9.5,8.4]

// function prom(calif)
// {
//   var sum = calif[0] + calif[1] + calif[2]
//   var pro = sum / calif.length; 
//   if(pro >=7)
//   {
//     console.log(`Sacaste ${pro} de promedio, si pasaste`)
//   }else
//   {
//     console.log(`sacaste de promedio ${pro}, no pasaste`)
//   }
// }

// prom(calif);

//4. Dado un total de compra, aplicar un descuento de 20% si la compra es mayor a 1000 pesos, imprimir el total que pagará el cliente

// var compra = [20, 320, 10, 200, 400]

// var totalCompra = compra[0] + compra[1] + compra[2] + compra[3] + compra[4];

// function descuento(totalCompra)
// {
//   var faltante=((totalCompra - 1000)* -1)

//   if(totalCompra > 1000)
//   {
//     desc= ((totalCompra/100)*80)
//     console.log(`su compra fue de ${totalCompra}, se le aplico el cupon, pagara como final ${desc}`)
//   }else
//   {
//     console.log(`su compra fue de ${totalCompra}, le faltarian ${faltante}, para alcanzar el descuento`)
//   }
// }

// descuento(totalCompra);

//5. Dado un total de compra, aplicar un 10% de descuento si el total está entre 1000 y 2000 (incluidos), un 20% si está entre >2000 y 3000, un 30% si está entre >3000 y 4000, y un 40% si es mayor a 4000. Imprimir el total que pagará el cliente.

// var compra = [200, 320, 10, 200, 400]

// var totalCompra = compra[0] + compra[1] + compra[2] + compra[3] + compra[4];

// function descuento(totalCompra)
// {

//   if(totalCompra >= 1000 & totalCompra<2000)
//   {
//     desc= ((totalCompra/100)*90)
//     console.log(`su compra fue de ${totalCompra}, se le aplico el cupon del 10% , pagara como final ${desc}`)
//   }else if(totalCompra >=2000 & totalCompra <3000)
//   {
//   desc= ((totalCompra/100)*80)
//     console.log(`su compra fue de ${totalCompra}, se le aplico el cupon del 20% , pagara como final ${desc}`)
//   }else if(totalCompra >=3000 & totalCompra <4000)
//   {
//     desc= ((totalCompra/100)*70)
//     console.log(`su compra fue de ${totalCompra}, se le aplico el cupon del 30% , pagara como final ${desc}`)
//   }else if(totalCompra >=4000)
//   {
//     desc= ((totalCompra/100)*60)
//     console.log(`su compra fue de ${totalCompra}, se le aplico el cupon del 40% , pagara como final ${desc}`)
//   }
// }

// descuento(totalCompra);

//6. Dado el número de horas que una persona trabajo en una semana calcular el salario semanal. Se le pagan 120 pesos por hora si trabaja hasta 40 horas a la semana. Si trabaja más de 40 horas, cada hora extra se le paga a 200 pesos.

// var horasTrabajadas = 60;

// function salario(horasT)
// {
//   var pagoPorHora = 120;
//   var sal;
//   var pagoMas40 = 200;
//   var horasT2;

//   if(horasT <= 40)
//   {
//     sal = horasTrabajadas * pagoPorHora;
//     console.log(`El salario de esta semana es de ${sal}`)
//   }else
//   {
//     horasT2 = horasT - 40;
    
//     sal = (40*120) + (horasT2 * 200);
//     console.log(`El salario de esta semana es de ${sal}`)
//   }
// }

// salario(horasTrabajadas);

//7. Dado un número de la semana entre 1 al 7 y que diga que día de la semana es (indicar que el día no existe si el día es menor a 1 o mayor a 7)
// let day = 9

// if (day === 1) {
//   console.log(`El dia ${day} es : Lunes`)
// } else if (day === 2){
//   console.log(`El dia ${day} es : Martes`)
// } else if (day === 3){
//   console.log(`El dia ${day} es : Miercoles`)
// } else if (day === 4){
//   console.log(`El dia ${day} es : Jueves`)
// } else if (day === 5){
//   console.log(`El dia ${day} es : Viernes`)
// } else if (day === 6){
//   console.log(`El dia ${day} es : Sabado`)
// } else if (day === 7){
//   console.log(`El dia ${day} es : Domingo`)
// } else if (day < 1 || day > 7){
//   console.log(`Ese dia no existe`)
// }


//8. Dado un precio (flotante) y la clave (entera) de un artículo. Si la clave es 1, se le aplica un 10% al precio. Si la clave es 2, se le aplica un 20%. Cualquier otra clave, debe devolver "Error". Imprimir el precio final del producto. 

// var precio = 1.382_900_000_000
// console.log(precio)
// var clave = 1
// var precio2

// if(clave === 1)
// {
//   precio2  = (precio/100) * 90
//   console.log(`el precio normal es ${precio}, con el decuento aplicado son ${precio2}`);
// }else if(clave === 2)
// {
//   precio2  = (precio/100) * 80
//   console.log(`el precio normal es ${precio}, con el decuento aplicado son ${precio2}`);
// }else if(clave > 1 & clave > 2)
// {
//   console.log('Error')
// }

let nombre = "Juan David" + "Castro Gallego"
console.log(nombre)