/* 
    Funciones de Tipo: Las funciones de tipo se utilizan para definir la forma de una función, 
    especificando los tipos de los argumentos que espera y el tipo de valor que devuelve.
*/

// Una funcion estandar en JavaScript luce asi:
function saludo(){
    return("Hola");
}

console.log( saludo() );


// En el caso de una funcion de tipo en TypeScript, seria asi:

// Definimos un tipo de función personalizado para una función que toma dos números y devuelve un número.

type miAliasDeTipo = (num1:number, num2:number) => number;

// NOTA: La palabra clave type se utiliza para crear un alias de tipo. 
// Un alias de tipo es un nuevo nombre para un tipo existente, que puede ser una estructura de datos, 
// un tipo de datos primitivo o incluso otro alias de tipo.


// Definimos una función que utiliza el tipo de función personalizado.
function realizarOperacion(operacion:miAliasDeTipo, num1:number, num2:number){
    return operacion(num1, num2);
};

// Esta misma funcion en JavaScript luce asi:
/*
    function realizarOperacion(operacion, num1, num2){
        return operacion(num1, num2);
    }
*/


// Definimos dos funciones que coinciden con el tipo de función personalizado.
// Estas funciones se asignaran como callbacks de la funcion realizarOperacion.
function sumar(num1:number, num2:number):number{
    return num1 + num2;
};

function restar(num1:number, num2:number):number{
    return num1 - num2;
};

function multiplicar(num1:number, num2:number):number{
    return num1 * num2;
};

function dividir(num1:number, num2:number):number{
    return num1 / num2;
};



console.log( realizarOperacion(sumar, 10, 5) );
console.log( realizarOperacion(restar, 10, 5) );
console.log( realizarOperacion(multiplicar, 10, 5) );
console.log( realizarOperacion(dividir, 10, 5) );

// Podememos ver que en estos ejemplos la funcion llamara realizarOperacion() esta asignando los valores que recibe a una segunda funcion.


