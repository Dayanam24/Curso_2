/******  FUNCIONES  ******/

/*
    Una función es un bloque de código que se puede ejecutar múltiples veces. (Tantas como deseemos)
    Se puede pensar en una función como una "subrutina" que realiza una tarea específica 
    y devuelve un resultado. Las funciones permiten encapsular y reutilizar código, 
    lo que hace que el desarrollo sea más eficiente y fácil de mantener.

    Sintaxis
        Palabra reservada (Function (F. Declarativa) var (F. de Expresión)).
        Nombre de Funcion (Para las F. de Expresión se suelen dejar como anonimas). 
        Parentesis () donde se indican los parametros.
        Llaves {} que contienen el proceso a realizar.
        IMPORTANTE: cada sentencia dentro de una funcion debe finalizar con ;
*/

let nombre = "Diego"


//Declarativas
function imprimirSaludo(){
    console.log("Hola Diego");
    console.log("Este mensaje se muestra desde una funcion")
}

// imprimirSaludo()

// if(nombre === "Diego"){
//     imprimirSaludo();
// }else{
//     console.log("El usuario no se llama Diego");
// }

// nombre === "Diego" 
//     ? imprimirSaludo()
//     :console.log("El usuario no se llama Diego");



/* Funciones de Expresion */

// miFuncion()

let miFuncion = function(){
    console.log("Hola Diego");
    console.log("Este mensaje se muestra desde una funcion")
}

// miFuncion();



/* Funciones con parametros */
// function saludarPersona(nombrePersona,generoPersona,edadPersona,paisPersona){
//     alert(`Hola, me llamo ${nombrePersona}, soy ${generoPersona} y tengo ${edadPersona} años de edad, vivo en ${paisPersona}`)
// }

// saludarPersona("Waldemar","Hombre",30,"Canada");
// saludarPersona("Victor","Hombre",32,"España");
// saludarPersona("Pedro","Hombre",20,"Chile");
// saludarPersona("Ralimar","Mujer",20,"Alemania");


//Practica 1:
// En una funcion, elabora la logica de un cajero automatico que retorne el mensaje: "Saldo insuficiente"
// cuanto el saldo sea menor a 0;


// Saldo Base
let saldo = 1000;

// Saludo de bienvenida e informacion de saldo base
alert("Bienvenido al Cajero Automatico: Tu saldo actual es: "+saldo);

// Ingreso de monto a retirar
let retiro = +prompt("Ingresa el monto a retirar");


// Definicion de la funcion
function retiroDeCajero(montoDeRetiro){

    // Si el saldo actual al restar el monto a retirar queda en menos de 0
    if((saldo - montoDeRetiro) < 0){
        
        return alert(`Saldo insuficiente, no se puede retirar ${montoDeRetiro}$, tu saldo actual es ${saldo}`)

    }
    // Si el saldo actual al resterle el monto a retirar queda en 0 o mas
    else if((saldo - montoDeRetiro) >= 0){
        // Deduccion de saldo y reasignacion de saldo base
        saldo-= montoDeRetiro; //saldo = saldo - montoDeRetiro

        // Salida en pantalla de resultado de la operacion
        alert(`Retiraste ${montoDeRetiro}$, tu saldo restante es: ${saldo}`)

        // Retorno de la variable de saldo base luego de ser actualizada
        return saldo;

    }
}

// Iniciar la funcion y enviar un parametro, en este caso la variable que contiene el monto a retirar
retiroDeCajero(retiro);