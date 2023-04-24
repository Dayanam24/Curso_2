// Ejemplo de una funcion con parametros
function mostrarSaludo(parametro1,parametro2){
    return `Hola mi nombre es ${parametro1} ${parametro2}, ¿Como estas?`
}

console.log( mostrarSaludo("Diego","Lopez") )
console.log( mostrarSaludo("Daniel","Rodriguez") )
console.log( mostrarSaludo("Pedro","el Hacker") )


// Ejemplo de Iteracion
let nombres = ["Diego","Kevin","Dayana","Keyner","Wilklert","Pedro","Alfredo","Cesar"];

nombres.map(
    function(persona){
        console.log(`Hola ${persona}`)
        console.log("Hola "+persona)
    }
)





// Ejemplo de Callback
let lista = ["Diego","Kevin"];
console.log(`La lista tiene los valores: ${lista}`)

function agregar(miArray, cualquierDato, miCallback){
    miArray.push(cualquierDato);
    miCallback();
}


agregar(lista,"Dayana",function(){
        console.log(`Ahora la lista tiene los valores: ${lista}`)
    }
);








// Promesas

// Pueden tener tres estados: 
// - Pendiente (pending): Cuando se esta ejecutando, es el estado inicial, ni cumplido ni rechazado.
// - Cumplida (fulfilled): Cuando la operacion se realiza satisaftoriamente.
// - Rechazada (rejected): Cuando la operacion fallo.

// - Con funcion de flecha:
//     const miPromesa = new Promise( (resolve,reject)=> { ... } );


let obtenerDatos = new Promise( 
    function(resolve,reject){
        if( 10 === 101){
            resolve("La promesa se cumplio");
        }else{
            reject("La promesa NO se cumplio");
        }
    } 
)


// Una vez creada la promesa, se pueden suscribir a ella los métodos .then y .catch.

//     .then: es un metodo que recibe como argumento una función que será llamada cuando la 
//     promesa se resuelva (es decir, cuando se llame a resolve) y se le pasará como argumento 
//     el resultado de la operación asíncrona. 

//     .catch: es un metodo que recibe como argumento una función que será llamada cuando la promesa sea 
//     rechazada (es decir, cuando se llame a reject) y se le pasará como argumento el error producido.

obtenerDatos
    .then(res =>{console.log("Respuesta: " + res)})
    .catch( error =>{console.log("Error: " + error)})



