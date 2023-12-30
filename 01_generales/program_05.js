/*

    Created: 2023-02-07
    Created by: Chavez Islas Jair
    Description: Conditionals (if)

*/

// var edad = 15;

// if(edad >= 18)
// {
//     console.log('Mayor de edad');
// }else
// {
//     console.log('Menor de edad');
// }

// var dia = 0;
// if(dia === 0)
// {
//     console.log('Domingo');
// }else
// {
//     console.log('Otro dia');
// }

// var dia = 1;
// //Operador ternario
// var diaSemana = (dia === 0) ? 'Domingo':'Otro dia';
// console.log(diaSemana);

//BLOQUE DE SWITCH

// var fruta = 'Ciruelas';

// switch(fruta)
// {
//     case 'Naranjas':
//         console.log('El kilogramo de naranjas cuesta $20.00');
//         break;
//     case 'Manzanas':
//         console.log('El kilogramo de naranjas cuesta $45.00');
//         break;
//     case 'Platanos':
//         console.log('El kilogramo de naranjas cuesta $15.00');
//         break;
//     case 'Mangos':
//         console.log('Opcion mangos');
//     case 'Papayas':
//         console.log('El kilogramo de naranjas cuesta $35.00');
//         break;
//     case 'Cerezas':
//         console.log('El kilogramo de naranjas cuesta $90.00');
//         break;
//     default:
//         console.log(`Lo sentimos, por el momento no disponemos de ${fruta}`);
// }

// var foo = 0;
// switch(foo)
// {
//     case -1:
//         console.log('1 negativo');
//         break;
//     case 0:
//         console.log(0); 
//     case 1://No hay break e el case 0, por lo tanto este case tambien se ejecuta
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     default:
//         console.log('default');
// }

//Operacion unica con multiples casos

var animal = 'Vaca';

switch(animal)
{
    case 'Vaca':
    case 'Jirafa':
    case 'Perro':
    case 'Gato':
        console.log(`${animal} subira al arca de noe`);
        break;
    case 'Dinosaurio':
    case 'Unicornio':
    default:
        console.log('Este animal no lo hara.');
}