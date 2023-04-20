/*
    ¿Que es un Callback?
        Un callback es una función que se pasa a otra función como argumento
        y se invoca después de que algún evento o proceso ha terminado, de alli 
        el nombre callback que significa: llamar de vuelta.

        Es decir, la funcion receptora cuando es iniciada, recibe una funcion que viene definida 
        en los parametros y es iniciada o llamada dentro de la misma funcion receptora.
*/


// *** EJEMPLO 1 ***

// En este ejemplo, primero defino una funcion que recibe como parametros un array y una funcion callback.

// creacion de la funcion "agregar"

function agregar(miArray, miCallback, nuevoDato){

    // Realizo un proceso con el array recibido como parametro
    miArray.push(nuevoDato);


    // Despues de hacer el proceso ejecuto el callback que es recibido por parametros,
    // este realizara un proceso con los resultados obtenidos en las lineas superiores de la funcion agregar(), 
    // el proceso que realiza el callback se define al iniciar la funcion agregar().
    miCallback();
}


// Defino el array que sera enviado por parametros.
let nombres = ["Jean","Carlos","Jose"];

console.log(nombres);

// Iniciando la funcion agregar().
// El primer parametro es el array nombres.
// El segundo parametro es un callback, una funcion.
// Esta funcion va a llamar de vuelta (callback) datos de la funcion "agregar".

agregar(nombres, ()=>{console.log(nombres)},"Diego");

agregar(nombres, function(){console.log(nombres)},"Daniel");



function algo(){
    console.log(nombres)
}

agregar(nombres, algo,"Pedro");





// *** Ejemplo 2 *** (Realizar diferentes operaciones con un callback) 

// En este ejemplo se crea una funcion "operacion" que recibira 2 parametros y un callback,
// en su interior solo hay un retorno, en el cual asignará los 2 parametros (num1 y num2 ) recibidos dentro 
// del callback y lo ejecuta.

function operacion(num1, num2, callback){
    return ( callback(num1,num2) );
};

// En esta ocacion el callback suma los 2 parametros que recibe al ser iniciado en la funcion "operacion",
// resliza una logica que es definida en el mismo llamado de la funcion "operacion" y retorna un resultado.

console.log( operacion(5, 4 ,function(a,b){ return a + b} ) );

console.log( operacion(5, 4, function(a,b){ return a - b} ) );

console.log( operacion(5, 4, function(a,b){ return a * b} ) );

console.log( operacion(5, 4, function(a,b){ return a / b} ) );

console.log( operacion(5, 4, function(a,b){ return a ** b} ) );

console.log( operacion(5, "5", function(a,b){ return a == b} ) );

console.log( operacion(5, 4, function(a,b){ return a < b} ) );

console.log( operacion(5, 4, function(a,b){ return a > b} ) );