/* 
    ¿Qué es el asincronismo?
    El asincronismo es una técnica que permite a los programas ejecutar tareas de manera no bloqueante. 
    Esto permite que el programa puede continuar con otras tareas mientras se completa una tarea asíncrona, 
    en lugar de bloquearse y esperar a que se complete.

    El asincronismo es fundamental para mejorar la experiencia del usuario y mejorar la eficiencia del 
    programa, especialmente cuando se trata de tareas que pueden tardar un tiempo en completarse, como 
    las solicitudes de red y consumo de API´s.

    Hay varias formas de lograr el asincronismo, como promesas, async-await, setTimeout, setInterval
    y la utilización de eventos, cada uno de estos enfoques ofrece diferentes ventajas y desventajas 
    y puede ser apropiado en función del uso que se le quiera dar.

    Para resumir, el asincronismo es una técnica esencial para mejorar la experiencia del usuario y 
    la eficiencia del programa.
*/



// setTimeout(): Realiza una accion luego de transcurrido el tiempo indicado

setTimeout(
    ()=>{
        let parrafo = document.getElementById("miParrafo");
        parrafo.innerText = "Este mensaje se ha cambiado luego de 5 segundos con la funcion asincrona setTimeout()";
        parrafo.style.color = "red";
        parrafo.style.fontSize = "20px"
    },5000
);




// setInterval(): Realiza una accion cada cierto tiempo.

let contador = 1;

setInterval(
    ()=>{
        contador += 1;
        let parrafoContador = document.getElementById("conteo");
        parrafoContador.innerText = `La cuenta va por: ${contador}`
    },1000
);


/*
    Ahora que sabemos manejar funciones asincronas veremos como sacar provecho de ello.

    Por ejemplo, podemos obtener la fecha de nuestro equipo y mostrarla asincronicamente.

    para obtener la fecha local usamos la funcion constructora Date();
*/

// Captura de objeto de tiempo Date

let tiempo = new Date()

// Informacion de tiempo completa
console.log(tiempo)

// // Fecha local
console.log(`La fecha actual es: ${tiempo.toLocaleDateString()}`)

// // Hora local
console.log(`La hora actual es: ${tiempo.toLocaleTimeString()}`)

// Obtener año
console.log(`El año actual es: ${tiempo.getFullYear()}`);

// Obtener mes
console.log(`El mes actual es: ${tiempo.getMonth()}`);

// Obtener dia
console.log(`El dia actual es: ${tiempo.getDay()}`);

// Obtener horas
console.log(`La hora actual es: ${tiempo.getHours()}`);


// Determinar si la hora en formato 24h sobrepara las 12h
(tiempo.getHours() > 12) 
    ? console.log(`Hola, la hora actual es: ${tiempo.getHours() - 12}`)
    : console.log(`La hora actual es: ${tiempo.getHours()}`);



// Obtener minutos
console.log(`El minuto actual es: ${tiempo.getMinutes()}`)

// Obtener Segundos
console.log(`El segundo actual es: ${tiempo.getSeconds()}`)

// Obtener Milesimas / Milisegundos
console.log(`El milisegundo actual es: ${tiempo.getMilliseconds()}`)




// Base para crear reloj digital
let hora = document.getElementById("hora");
let minuto = document.getElementById("minuto");
let segundo = document.getElementById("segundo");

setInterval(
    ()=>{
        let tiempo = new Date();
        hora.innerText = tiempo.getHours();
        minuto.innerText = tiempo.getMinutes();
        segundo.innerText = tiempo.getSeconds();

        // Reloj en consola
        console.log(`La hora es: ${tiempo.getHours()}:${tiempo.getMinutes()}:${tiempo.getSeconds()}`)
    },1000
);



setInterval(()=>{let reloj = new Date();document.getElementById("reloj").innerText = reloj.toLocaleTimeString()},1000);
