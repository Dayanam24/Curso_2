/*
    Una expresión condicional es un conjunto de instrucciones que evalúan una expresión
    y solo se ejecutarán si dicha expresión es verdadera. 
    JavaScript admite dos expresiones condicionales: (if...else) y (switch).
*/

//if (Si)
// prompt: es una funcion nativa de JavaScript que muestra una ventana de entrada en el navegador.


let nombre = "Nelson";

if(nombre === "Diego"){
    console.log("El usuario se llama Diego");
}




// if-else (Si-Sino)

if(nombre === "Diego"){
    console.log("El usuario se llama Diego");
}
else{
    console.log("El usuario no se llama Diego");
}



//if - else if - else (Si - Sino Si - Sino)

let listaDeNombres = ["Diego","Pedro","Marcos","Daniela","Maria","Andres"]

if( listaDeNombres[4] === "Diego"){
    console.log("El usuario se llama Diego");
}
else if( listaDeNombres[4] === "Pedro"){
    console.log("El usuario se llama Pedro");
}
else if( listaDeNombres[4] === "Marcos"){
    console.log("El usuario se llama Marcos");
}
else if( listaDeNombres[4] === "Daniela"){
    console.log("El usuario se llama Daniela");
}
else if( listaDeNombres[4] === "Maria"){
    console.log("El usuario se llama Maria");
}
else if( listaDeNombres[4] === "Andres"){
    console.log("El usuario se llama Andres");
}
else{
    console.log("El nombre del usuario no concuerda con ninguno registrado");
}



//Ejercicio hecho por Marco
let estaciones = ["Primavera","Verano","Otoño","Invierno"]

if (estaciones[2] == "Primavera"){
    console.log("Esta floreciendo");
}
else if (estaciones[2] == "Verano"){
    console.log("Esta soleado");
}
else if (estaciones[2] == "Otoño"){
    console.log("Estan cayendo Hojas");
}
else if (estaciones[2] == "Invierno"){
    console.log("Esta nevando");
}
else {
    console.log("No estamos en el planeta tierra");
}


/*
    Ejercicio extra 1: Realizar un algoritmo que valide si la suma de 2 numeros es mayor, igual o menor
    a la multiplicacion de otros 2 numeros.
*/

// Variables para Sumar
let numero1 = 10;
let numero2 = 40;

// Variables para multiplicar
let numero3 = 26;
let numero4 = 2;

if( (numero1 + numero2) > (numero3 * numero4) ){
    console.log("La suma de los primeros 2 numeros es mayor que la multiplicacion de lo segundos 2 numeros");
}else if( (numero1 + numero2) == (numero3 * numero4)){
    console.log("La suma de los primeros 2 numeros es igual que la multiplicacion de lo segundos 2 numeros");
}else{
    console.log("La suma de los primeros 2 numeros es menor que la multiplicacion de lo segundos 2 numeros");
}




// prompt: es una funcion nativa de JavaScript que muestra una ventana de entrada en el navegador.
// let miNombre = prompt("Ingresa tu nombre");

// console.log(miNombre);



/*
    Ejercicio extra 2: Realizar un algoritmo que valide si un mensaje(Usuario) en un campo 
    es identico(===) a otro mensaje(Usuario) en otro campo.
*/

/*
let mensaje1 = prompt("Ingresa la contraseña");
let mensaje2 = prompt("Ingresa la contrasaña nuevamente");

if (mensaje1 === mensaje2){
    alert("Las contraseñas coinciden");
}else{
    alert("Las contraseñas NO coinciden");
}
*/



/* 
    Realiza un algoritmo que sume 2 numeros ingresados mediante prompt
    y retorne el resultado en un alert.


    Opcional: ademas si lo numeros no se pueden sumar retorna un mensaje de error en consola
*/


// let ingreso1 = prompt("Ingresa el primer numero","1");
// let ingreso2 = prompt("Ingresa el segundo numero","1");

// alert( +ingreso1 + +ingreso2 );




/*
    Operatos Ternario: El operador termario es una manera abreviada de realizar validaciones booleanas (if-else)
*/

let rol = "cliente";

(rol == "Administrador") 
    ? console.log("El usuario es "+rol+" permisos asignados") 
    : console.log("El usuario es "+rol+" No tiene permisos");






    /*
    Switch: Permite ejecutar un bloque de codigo basandose en casos.
        La sintaxis de switch consiste en una expresion a evaluar y en base a los resultados esperados,
        se desarrollan los casos a ejecutar, adicional se coloca break para evitar que se ejecuten los demas
        casos y default para uns respuesta por defecto en caso de que ningun caso se cumpla.
*/


let producto = +prompt(
    `Minimarket 🛒 
    ¿Que desea comprar?:
    1) Carne
    2) Verduras
    3) Frutas
    4) Dulces
    5) Bebidas
    6) Productos de aseo personal
    7) Productos de Limpieza
    8) Papeleria
    9) No veo lo que busco`
);


switch(producto){
    case 1:
        alert("Compraste Carne");
        break;
    case 2:
        alert("Compraste Verduras");
        break;
    case 3:
        alert("Compraste Frutas");
        break;
    case 4:
        alert("Compraste Dulces");
        break;
    case 5:
        alert("Compraste Bebidas");
        break;
    case 6:
        alert("Compraste Productos de aseo personal");
        break;
    case 7:
        alert("Compraste Productos de Limpieza");
        break;
    case 8:
        alert("Compraste Papeleria");
        break;
    case 9:
        alert("Lo sentimos, pronto llegaran mas productos");
        break;
    default:
        alert("Opcion no valida");
}


/* ACTIVIDAD - Juego del semaforo.

    Crea un mensaje en pantalla que muestre 3 colores a elegir: 
    verde, amarillo, rojo.
    Guarda la respuesta en una variable llamada color.

    Ejemplo: Elige un color para iniciar:
    1) verde
    2) amarillo
    3) rojo
    OTRO) Opcion invalida


    Si se ingresa un color valido, crea otro mensaje en pantalla que muestre una situacion con el color 
    ingresado previamente y 3 opciones a elegir: Pasar normalmente, Acelerar y Esperar.
    Guarda la respuesta en una variable llamada accion.

    Ejemplo: 
        - El semaforo esta de color rojo(variable color), ¿Que desea hacer?
        1) Pasar normalmente
        2) Acelerar
        3) Esperar
        OTRO) Opcion invalida


    Luego crea la logica con Switch-Case que evalue las respuestas ingresadas en el navegador
    y en base a ello inicie un caso.


    En caso de que la luz sea verde, evaluar:
    - Si el jugador pasa normalmente:
        mostrar un mensaje que diga: Bien hecho!, pasaste en el momento adecuado ✅, ¡Has ganado! 😁
    - Sino, Si el jugador acelera:
        mostrar un mensaje que diga: Oh no!, Aceleraste demasiado y chocaste 💥, ¡Has perdido! 😞
    - Sino, Si el jugador espera:
        mostrar un mensaje que diga: Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! ❌
    - De lo contrario
        mostrar un mensaje que diga: Respuesta invalida.
    
    
    En caso de que la luz sea amarillo, evaluar:
    - Si el jugador pasa normalmente:
        mostrar un mensaje que diga: Oh no!, No aceleraste lo suficiente y te han chocado 💥, ¡Has perdido! ❌
    - Sino, Si el jugador acelera:
        mostrar un mensaje que diga: Bien hecho!, pasaste en el momento justo ✅, ¡Has ganado! 😁
    - Sino, Si el jugador espera:
        mostrar un mensaje que diga: Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! 😞
    - De lo contrario
        mostrar un mensaje que diga: Respuesta invalida.


    En caso de que la luz sea rojo, evaluar:
    - Si el jugador pasa normalmente:
        mostrar un mensaje que diga: Oh no!, Pasaste en el momento indebido ❌, ¡Has perdido! 😞
    - Sino, Si el jugador acelera:
        mostrar un mensaje que diga: Oh no!, Crusaste mientras autos en otra direccion pasaban y chocaste 💥, ¡Has Perdido! ❌
    - Sino, Si el jugador espera:
        mostrar un mensaje que diga: Bien hecho!, Esperaste en el momento adecuado ✅, ¡Has ganado! 😁
    - De lo contrario
        mostrar un mensaje que diga: Respuesta invalida.


    PISTA: en algun momento necesitaras usar if y OR/||
    PISTA 2: Para los mensajes de retorno puedes usar alert() o console.log()
*/