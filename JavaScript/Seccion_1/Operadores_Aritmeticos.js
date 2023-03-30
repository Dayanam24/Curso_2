/*
    Se comoce como operadores aritmeticos a los simbolos que nos permiten
    realizar operaciones matematicas, sumar, restar, Multiplicar, Dividir.
*/

//Ejemplo:

//Suma (+)
console.log(5 + 5);
console.log(50 + 5);
console.log("5" + 5);
console.log("15" + "10");
console.log("Diego" + " Rodriguez")

// Suma de Variables
let nombre = "Diego ";
let apellido = "Parra";
console.log(nombre + apellido);

let edad = 30;

//Concatatenacion
// let mensaje = "Hola, me llamo " + nombre + apellido + " y tengo " + edad + " años";
let mensaje = `Hola, me llamo ${nombre} ${apellido} y tengo ${edad} años de edad`;

console.log(mensaje);


//Ejemplo 2 de suma
let numero1 = 50;
let numero2 = 20;
let numeroString = "100";

let total = numero1 + numeroString;
total;


//Reasignacion de variable
total = numero1 + numero2;
total;




//Resta
console.log(5 - 4);
/* NaN = Not a Number, este error es muy directo, y les puede ayudar mucho a depurar 
    el código teniendo en cuenta su significado, de esta manera podrán tener una idea de 
    cómo solucionarlo (dependiendo de lo que se quiera obtener).
*/
console.log("Diego" - 4);
console.log("25" - "20");
console.log(100 - "30");


let saldo = 1000;
let monto = 600;

let retiro = saldo - monto;

retiro;



//Multiplicacion
console.log(5 * 5); 

let valor1 = 30;
let valor2 = 10;
let valorString = "5";

let multiplicar = valor1 * valor2;
multiplicar;

//Multiplicacion de numero y string(solo numero)
let multiplicar2 = multiplicar * valorString;
multiplicar2;





//Division
console.log(10 / 2);


let num1= 100;
let num2= 3;

let resultado = num1 / num2;

resultado;




//Tambien existen operadores aritmeticos para operaciones mas complejas.

//Incremento: Agrega uno a su operando.
let numero = 10;

numero++;
numero;

numero++;
numero;

numero++;
numero;

numero++;
numero;

numero++;
numero;


//Decremento: Resta uno de su operando. 
let numero_2 = 10;

numero_2--;
numero_2;

numero_2--;
numero_2;

numero_2--;
numero_2;

numero_2--;
numero_2;

numero_2--;
numero_2;




//Negacion Unitaria: Devuelve el negativo de su operando.
let miNumero = 10;

miNumero = -miNumero;

miNumero;

miNumero = -miNumero;

miNumero;


//Positivo Unitario: Intenta convertir el operando en un número, si aún no lo es.
let cadenaNumero = "2023";
console.log(typeof cadenaNumero);

cadenaNumero = +cadenaNumero;

console.log(typeof cadenaNumero);



//Exponenciacion / Potencia: Calcula la base a la potencia del exponente
let potencia = 5 ** 2;
potencia;

console.log(5 ** 6);
/*
    1) 5: 5
    2) 5 x 5: 25
    3) 25 x 5: 125
    4) 125 x 5: 625
    5) 625 x 5: 3125
    6) 3125 x 5: 15625
*/

//Formula de raiz cuadrada
let raiz = 25 ** (1/2)
raiz;

// Funcion de raiz cuadrada
console.log(Math.sqrt(25));




//Módulo: devuelve el resto de la división entre dos números. 
//(Se usa comunmente para determinar numeros pares e impares)
let modulo = 10 % 2;
modulo;

modulo = 10 % 3;
modulo;

modulo = 10 % 5.5;
modulo;


