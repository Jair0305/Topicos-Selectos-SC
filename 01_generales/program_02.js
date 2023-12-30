/*
    Created 2023-02-03
    Created by: Jair Chavez Islas
    Description: Operators
*/

// Operadores de asignacion

var x = 3;
var y;

y = x; //operador de asignacion
x+= y; //operador de adicion x = x+y
x -=y;//operador de resta
x*= y;//Operador de multiplicacion
x/= y;//Asignacion de division
x%=y;//Asignacion de modulo
x**=y; //Asignacion de exponenciacion
x&=y; //Asignacion de And bit a bit
x |= y; //Asignacion de Or bit a bit
x^=y; //Asignacion de XOR bit a bit
x &&=y; //Asignacion de AND logico 
x ||=y; //Asignacion de Or logico


/*
    Desestructuracion
    Para asignaciones mas complejas, la sintaxis de asignacion de deestructuracion es una expresion de js que hace posible extreer datos de arreglos u objetos
*/

var foo = ['one','two','three']

//Sin desestructurar
var one = foo[0];
var two = foo[1];
var three = foo[2];


//Con desestructuracion

var [one, two, three] = foo;

// console.log(one);
// console.log(two);
// console.log(three);

// Operadores de comparacion

var var1 = 3;
var var2 = 4;

//Igualdad: devuelve true si los operadores son iguales.
//Js intenta hacer la conversion de los operadores a un tipo de dato comun para hacer la comparacion

// console.log(3 == var1);
// console.log('3' == var1); //convierte los valorse a un tipo en comun
// console.log(3 == '3');

//No igualdad. Devuelve true si los operadores no son iguales. Js intenta hacer la conversion de los operandors a un tipo de dato comun para hacer la comparacion

// console.log(var1 != 4);
// console.log(var2 != '3');
// console.log(var1 != '3');

//Estrictamente igual: devuelve true si los operandos son iguales y del mismo tipo.
//En este caso JS no hace la conversion de tipos

// console.log(var1 === 3);
// console.log(var1 === '3');

// //Desigualdad estricta: Devuelve true si los operadores son mdel mismo tipo pero no son iguales, o si son de diferente tipo

// console.log(var1 !== '3');
// console.log(3 !== '3');
// console.log(var1 !== 3);

// Mayor que: Devuelve true si el operando izquierdo es mayor que el derecho

// console.log(var1 > var2);
// console.log(var2 > var1);
// console.log('12' > 2);

// //Mayor o igual que: devuelve true si el operando izquiero es mayor o igual que el derecho

// console.log(var1 >= var2);
// console.log(var1 >= '3');

// //Menor que: Devuelve true si el operando izquiero es menor que el derecho

// console.log(var1 < var2);
// console.log(var2 < var1);
// console.log('12' < 2);

//menor o igual que: devuelve true si el operando izquiero es mayor o igual que el derecho

// console.log(var1 <= var2);
// console.log(var1 <= '3');

// OPERADORES ARITMETICOS BASICOS

var var1 = 3;

// //    %  Devuelve el resto de la divisi0on entera de dos operandos
// console.log(var1%2);

// //Incremento(++) Operando unario. Agrega uno al operando

// console.log(var1++);//Devuelve la variable y luego la incrementa
// console.log(++var1);//Incrementa la variable y luego la regresa

// //Decrementa(--) Operando unario. Quita uno al operando

// console.log(var1--);//Devuelve la variable y luego la decrementa
// console.log(--var1);//Decrementaa la variable y luego la regresa

// //Negacion unaria: Devuelve la negacion del operando

// console.log(-var1);

// //Positivo unitario: Intenta convertir el operando a un numero si aun no lo es

// console.log(+'3')

//Exponente **: Calcula la base de la potencia del exponente

// console.log(2**3);
// console.log('10' ** -1);

// OPERADORES LOGICOS

//AND logico (&&)
// expr1 && expr2
//Devuelve expr1 si se puede convertir en false, de lo contrario devuelve expr2. Por lo tanto cuando se usa con valores boleanos && devuelve true si ambos operandos son true, de lo contrario devuelve false

// var a1= true && true;
// console.log(a1);
// var a2 = true && false;
// console.log(a2);
// var a3 = false && true;
// console.log(a3)
// var a4 = false && false;
// console.log(a4);

// var a5 = false && (3==4);
// console.log(a5);
// var a6 = 'Cat' && 'Dog';
// console.log(a6);
// var a7 = false && 'Cat';
// console.log(a7);
// var a8 = 'Cat' && false;
// console.log(a8);

//OR logico ||
//expr1 || expr2
//Devuelve expr1 si se puede convertir a true, de lo contrario devuelve expr2, por lo tanto cuando se usa con valores booleanos || devuelve true si alguno de los operadndos es true, si ambos son false, devuelve false

// var o1 = true || true;
// console.log(o1);
// var o2 = true || false;
// console.log(o2);
// var o3 = false || true;
// console.log(o3);
// var o4 = false || false;
// console.log(o4);

// var o5 = false || (3==4);
// console.log(o5);
// var o6 = 'Cat' || 'Dog';
// console.log(o6);

// var o7 = false || 'Cat';
// console.log(o7);
// var o8 = 'Cat' || false;
// console.log(o8);


// NOT LOGICO (!) -> operador unario
//!expr
//Devuelve false si su unico operando se puede convertir a true, de lo contrario, devuelve true

// var n1 = !true;
// console.log(n1);

// var n2 = !false;
// console.log(n2);

// var n3 = 'Cat';
// console.log(n3);





// OPERADORES DE CADENA
//El operador de concatenacion(+) concatena dos valores de cadena

// console.log('mi' + '' + 'cadena');

// var mystring = 'alpha';
// mystring += 'betha';
// console.log(mystring);


// //Operador typeof
// //Devuelve una cadena que indica el tipo de operando
// // typeof operand;

// var myFun = new Function('5 + 2');
// var shape = 'round';
// var size = '1';
// var foo = ['Apple','Orange','Mango'];
// var today = new Date();

// console.log(typeof myFun);
// console.log(typeof shape);
// console.log(typeof size);
// console.log(typeof today);
// console.log(typeof foo);
// console.log(typeof w);

// Operador condicional ternario

//El operador puede tener uno de los dos valores segun la condicion
//La sintaxis es: condition ? val1 : val2
//Si la condicion es true, el operador devuelve val1, si no, devuelve val2

var age = 17;
var sts = (age >=18) ? 'Adulto' : 'Menor';
console.log(sts);


//OPERADORES RELACIONALES
// in
//Devuelve true si la propiedad especificada esta en el objeto especificado
// propNameorNumber in objectName

//Arreglos

var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
console.log(0 in trees);
console.log(3 in trees);
console.log(6 in trees);

console.log('bay' in trees) //Devuelve false porque tenemos qeu especificar el indice donde hay un elemento o el nombre de una propiedad del objeto

console.log('length' in trees); //Devuelve true porque length es una propiedad del objecto


//Objetos personalizados

var myCar = { make: 'Honda', model:'Civic', year:'2022'};

console.log ('make' in myCar);// Devuielve true porque make es una propiedad del objeto
console.log('year' in myCar);
console.log('motor' in myCar);//Devuelve false




