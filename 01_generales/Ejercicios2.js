// 2. Ejercicios ciclos (for, while) y arrays (generales)
//Jair Chavez Islas
//LEYENDO SOBRE FUNCIONES Y DOCUMENTACION DE JS, ME DI CUENTA QUE HAY MUCHAS FUNCIONES UTILES QUE PUDE IMPLEMENTAR EN ESTOS PROGRAMAS, COMO MATH.FLOOR(); O PARSEINT(); PERO NO CONSIDERE USARLOS YA QUE NO SE HABIAN VISTO EN CLASE


// 	1. Solicitar por la terminal 10 calificaciones para un alumno y calcular su promedio
const prompt = require('prompt-sync')();

function E1()
{
    let suma = 0;
    let caln;
    for(let i = 0; i<=9; i++)
    {
        // const cal = parseInt(prompt(`Calficacion ${i+1}:`))
        const cal = prompt(`Calficacion ${i+1}:`)
        caln = +cal;//Cuando usas "prompt", lo que captura el usuario, lo devuelve en cadena, esta linea sirve para pasarlo a dato numerico, de ptra manera, no podmeos manipular los datos
        console.log(caln)
        suma += caln;
    }
    let prom = suma/10;
    console.log(prom);
}
//E1();

// 	2. Escribir un programa que imprima los números pares entre 1 y un número entero dado por el usuario
function E2()
{   
    let num = prompt(`Indique el numero: `)
    let numy = +num;

    for(let i=1;i<=numy;i++)
    {
        if(i %2 == 0)
        {
            console.log(i)
        }
    }
}
//E2();

// 	3. Solicitar 10 edades y decir cuántos menores y mayores de edad hay\
function E3()
{
    let menores = 0;
    let mayores = 0;
    for(let i=0; i<=9  ;i++)
    {
        let edad = prompt(`Edad del ninho: `)
        if(edad>=18)
        {
            mayores++;
        }else
        {
            menores++;
        }
    }
    console.log(`hay ${menores} menores de edad y ${mayores} mayores de edad`)
}
//E3();

// 	4. Solicitar n números enteros y decir cuántos son pares, cuántos impares, cuántos negativos, cuantos positivos y cuántos ceros
function E4()
{
    let numy = prompt(`Escoge la cantidad de numeros: `);
    let nume = +numy;
    let pares=0,impares=0,negativos=0,positivos=0,ceros=0;
    for(let i = 0; i<=nume-1; i++)
    {
        let nume = prompt(`numero: `)

        switch(true)//Para que el switch entre afuerzas por estos casos, el switch debe recibir el valor booleano "true", de otra manera no podia usar otra variable
        {
            case (nume < 0 && (nume*-1)%2 == 0):
                negativos++;
                pares++
                break;
            case (nume < 0 && (nume*-1)%2 != 0):
                negativos++;
                impares++;
                break;
            case (nume%2 == 0 && nume>0)://Tenia problemas con el caso de que fuera positivos, negativos, pares o impares, ya que solo entraba en una de esas 3, asi que agregue mas condiciones a cada caso, tomando en cuenta tambien que el se le considera numero par
                pares++;
                positivos++;
                break;
            case (nume%2 != 0 && nume>0):
                impares++;
                positivos++;
                break;
            case (nume == 0):
                ceros++;
                pares++;
                break;
        }
    }
    console.log(`Hay ${negativos} numeros negativos, ${positivos} numeros positivos, ${pares} numeros pares ${impares} numeros impares y ${ceros} ceros`);
}
//E4();

// 	5. Solicitar 2 números enteros y calcular su producto por sumas sucesivas
function E5()
{
    let num1 = prompt(`numero 1: `)
    let nump = +num1;
    let num2 = prompt(`numero 2: `)
    let nums = +num2;
    let producto = 0;
    for(let i = 0; i<=nums-1; i++)
    {
        producto += nump;
    }
    console.log(`la suma de ${nums} veces el numero ${nump} es igual a ${producto}`)
}
//E5();

// 	6. Solicitar n calificaciones, encontrar las calificaciones menor y mayor
function E6()
{
    let numy = prompt(`Escoge la cantidad de calificaciones: `);
    let nume = +numy;
    let mayor=0, menor=0;
    let cal2=0,cal;
    for(let i = 0; i<=nume-1; i++)
    {
        cal = prompt(`cal: `)
        cal2 = +cal;
        
        if(i=== 0)//Cuando el usuario ingresa el priemr numero, me percate de que se vuelve el numero mayor y al mismo tiempo el numero menor, y eso lo declaro en este if
        {
            mayor = cal2;
            menor = cal2;
        }
        if(cal2 > mayor)//Evalua las demas calificaciones despues de la primera, si es mayor que la calificacion maoyr, esta se vuelve el mayor
        {
            mayor = cal2;
            // cal1 = cal2;
            // menor = cal1;
            // if(cal2 < menor)
            // {
            //     menor = cal2;
            // }
        }
        if(cal2<menor)//Si no, si es menor que la calificacion menor, se vuelve la calificacion menor
        {
            menor = cal2;
        }
    }
    console.log(`el mayor es: ${mayor} y el menor es: ${menor}`);
}
//E6();

// 	7. Una persona deposita una cantidad n en un banco a m meses, el banco le paga un porcentaje p de interés mensual. Calcular cuanto tendrá en su cuenta al finalizar el periodo.
function E7()//Duda para el profe. El 5% se le aumenta por mes a la cantidad qeu hay a la cuenta, o a la cantidad que deposita la persona por mes??????????
{
    let p = 5;
    //let n = prompt(`que cantidad va a depositar? `)
    let m = prompt(`a cuantos meses? `)
    let m2 = +m;
    let c = 0;

    for(let i=0; i<=m2-1 ;i++)
    {
        let d = prompt(`cuanto dinero pagara el mes ${i+1}: `)
        let d2 = +d;

        c += (d2 + ((d2/100) * 5));
        console.log(c);
    }
}
//E7();

// 	8. Una persona adquirió un producto para pagar en 20 meses. El primer mes pagó $10, el segundo $20, el tercero $40 y así sucesivamente (múltiplos de 2). Calcular cada pago mensual y el total de lo que pagó después de los 20 meses.
function E8()
{
    let m = 20;
    let t = 0;
    let p = 10;
    for(let i=0;i<=m-1;i++)
    {
        if(i===0)
        {
            p=10;//El primer mes, seran 10$
        }else
        {
            p *= 2;//A partir de aqui, el valor por mes se va doblando.    
        }
        t += p;//Se suma el valor actual con el del el proximo mes
        
        console.log(`El mes numero ${i+1} pagara ${p}`)//Imprimo la cantidad que pagara ese mes
        //console.log(p)
        console.log(`El total de dinero que ha pagado hasta ahorita es de ${t}`)//E imprimo lo que ha pagado en total hasta ese momento
    }
    console.log(`El total de dindero que pago fue de ${t}`);//El total que pago al final
}
//E8()

// 	9. A partir de una población n (enteros) de individuos, se tiene una epidemia en donde el día 1 muere 1 persona, el día 2 mueren 2 personas, el día 3 mueren 4 personas, etc. Usando un ciclo while, calcular en cuántos días se moriría toda la población.
function E9()
{
    let p = prompt(`Escribe la cantidad de poblacion mundial: `)
    let p2 = +p;
    //let p = 8000000000;
    let m = 1;
    let d = 1;
    let tm = 0;
    while(tm<p2)
    {
        if(d===1)
        {
            m = 1;
           //tm = 1;
        }else
        {
            //tm +=m;
            m *=2
            
        }
        tm +=m;
        
        
        if(tm>p2)
        {
            m = p2-m+1;
            tm = p2;
        }

        //tm +=m;
        console.log(`el dia ${d} murieron ${m} personas`)
        console.log(`Se han muerto ${tm} personas en total`)
        d++
    }
    console.log(`Se ha muerto toda la poblacion en el dia ${d-1}`)
    console.log(`Se tardarian ${d-1} dias, para que mueran ${p2} personas`)
}
//E9()

// 	10. Pedir una cantidad entera que equivale a un número de días e indicar a cuantos años, meses y días corresponde. Considerar que un mes tiene 30 días.
function E10()
{
    let d = prompt(`Cantidad de dias: `);
    let d2 = +d;
    let y=0,m=0,di=0;

    while(d2>=365)
    {
        y++;
        d2 -= 365
    }

    while(d2>=30)
    {
        m++;
        d2-=30;
    }

    di = d2;
    console.log(`${d} dias corresponde a ${y} anhos, ${m} meses y ${di} dias`)
}
//E10()

// 	11. Dado un array con número flotantes (crea un array por tu cuenta), escribe un programa que devuelve todos los valores que sean mayores que un número dado (defínelo tú).
function E11()
{
    arr = [1.4,5.7,5.3,8.2,8.4,10.45,102.583,12.65,3.3];
    let n = 6.6;

    let mayor = (elemento) => elemento > n;
    let mayores = arr.filter(mayor);
    console.log(mayores);
}
//E11()

// 	12. Dado un array lleno con números flotantes (crea un array por tu cuenta), escribe un programa que calcule la suma y el promedio de todos los elementos.
function E12()
{
    let arr = [1.4,5.7,5.3,8.2,8.4,10.45,102.583,12.65,3.3];
    let suma = 0;
    let prom = 0;
    console.log(arr.length)
    for(i=0;i<arr.length;i++)
    {
        suma += arr[i];
        console.log(suma)
    }
    prom = suma/arr.length;

    console.log(`la suma de todos los numeros del array es de ${suma} y el promedio es de ${prom}`)
}
//E12()

// 	13. Dado un array lleno con números enteros (crea un array por tu cuenta), escribe un programa que encuentre cuáles son los valores mayor y menor.
function E13()
{
    let arr = [5,6,1,9,7,8,2,3,4]
    console.log(arr.length);
    let mayor = 0;
    let menor = 0;

    for(let i = 0; i<=arr.length; i++)
    { 
        if(i=== 0)
        {
            mayor = arr[i];
            menor = arr[i];
        }
        if(arr[i] > mayor)
        {
            mayor = arr[i];
        }
        if(arr[i]<menor)
        {
            menor = arr[i];
        }
    }
    console.log(`el mayor es: ${mayor} y el menor es: ${menor}`);
}
//E13()

// 	14. Dado un array de tres números enteros (crea un array por tu cuenta), escribe un programa que determine si el array está ordenado en orden ascendente o descendente, o si no está ordenado.
function E14()
{
    let arr = [4,2,3]
    let ascendente=true,descendente=true;


    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] < arr[i+1])
        {
            descendente=false;
        }else if(arr[i] > arr[i+1])
        {
            ascendente=false;
        }
    }
    
    if(ascendente)
    {
        console.log(`esta ordenado de forma ascendente`)
    }else if(descendente)
    {
        console.log(`esta ordenado de forma descendente`)
    }else
    {
        console.log(`no esta ordenado`)
    }
}
//E14()