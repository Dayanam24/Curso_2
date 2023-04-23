/*
    ¿Que son Promesas?
    Las promesas son la forma mas sencilla de manejar la asincronía.

    Pueden tener tres estados: 
        - Pendiente (pending): Cuando se esta ejecutando, es el estado inicial, ni cumplido ni rechazado.
        - Cumplida (fulfilled): Cuando la operacion se realiza satisaftoriamente.
        - Rechazada (rejected): Cuando la operacion fallo.

    Una promesa representa el resultado de una operación que aún no ha finalizado, pero que eventualmente 
    producirá un resultado o un error. Tal como en la vida cotidiana, una promesa es un hecho que estara
    pendiente y que puede cumplirse o no.

    Una vez que una promesa cambia a un estado cumplido o rechazado, su valor se mantiene y NO puede cambiar.


    Una promesa se crea usando la palabra clave new y la función constructora Promise ( new Promise() ).
    La función constructora recibe como argumento o parametros una función que acepta dos callbacks, 
    resolve y reject. 
        - resolve: nombre que se utiliza por convenio, y que se dedica a almacenar una respuesta satisfactoria.
        - reject: nombre que se utiliza por convenio, y que se dedica a almacenar una respuesta de error.

    La función que se pasa a la promesa debe realizar la operación asíncrona y, una vez terminada, 
    llamara a resolve si todo fue bien o a reject si ocurrió algún error.



    Sintaxis: 

    - Con funcion de flecha:
    const miPromesa = new Promise( (resolve,reject)=> { ... } );

    - Con funcion anonima:
    const miPromesa =  new Promise( function(resolve,reject){ ... } ); 



    Una vez creada la promesa, se pueden suscribir a ella los métodos .then y .catch.

    .then: es un metodo que recibe como argumento una función que será llamada cuando la 
    promesa se resuelva (es decir, cuando se llame a resolve) y se le pasará como argumento el resultado 
    de la operación asíncrona. 

    .catch: es un metodo que recibe como argumento una función que será llamada cuando la promesa sea 
    rechazada (es decir, cuando se llame a reject) y se le pasará como argumento el error producido.


    En resumen, las promesas permiten manejar de forma elegante y sencilla la asincronía en JavaScript, 
    permitiendo encadenar operaciones y controlar los errores de manera eficiente.

*/




// Ejemplo 1 (Promesa no asincrona que evalua igualdad de tipo de datos y retorna una respuesta).

const obtenerDatos = new Promise(
    (resolve,reject)=>{
        if( 10 === 10){
            resolve("Le promesa se cumplio")
        }else{
            reject("La promesa NO se cumplio")
        }
    }
);


obtenerDatos
    .then(
        function(res){
            console.log(res)
        }
    )
    .catch(
        function(err){
            console.log(err)
        }
    )




// Ejemplo 2 (Promesa asincronica, usando setTimeout()).
// Es la misma promesa del ejemplo anterior solo que se ejecuta asincronicamente.


const obtenerDatos2 = new Promise(
    function(cumplido,fallido){
        setTimeout(
            function(){
                if(10 === 10){
                    cumplido("Se cumplio la promesa luego de 5 segundos");
                }else{
                    fallido("No se cumplio la promesa")
                }
            },5000
        )
    }
);

//Al ser una promesa puedo ejecutar metodos en ella, 
// .then: Permite manejar una promesa resuelta (En este caso se ejecuta cumplido)
// .catch: Permite manejar una promesa rechasada (En este caso se ejecuta fallido)

obtenerDatos2
    .then(
        function(respuesta){
            console.log(`Se recibio: ${respuesta}`);
        }
    )
    .catch(
        function(respuestaError){
            console.log(`Se recibio: ${respuestaError}`);
        }
    )




// Ejemplo 3 (Objetos y setTimeout) .
// De un un array de objetos llamado "peliculas", donde cada objeto es una pelicula, 
// extrae asincronicamente con una promesa llamada "tomarPeliculas" los titulos, 
// y guardalos en un nuevo array llamado "peliculas2".


let peliculas = [
    {
        id: 1,
        titulo: "Dr. Strange 2",
        fecha: 2022
    },
    {
        id:2,
        titulo: "El Rey Leon",
        fecha: 1995
    },
    {
        id:3,
        titulo: "El Padrino",
        fecha: 1972
    },
    {
        id:4,
        titulo:"Ant Man",
        fecha: 2023
    },
    {
        id: 5,
        titulo: "John Wick 4",
        fecha: 2023
    },
    {
        id: 6,
        titulo: "Oldboy",
        fecha: 2003
    }
];

let peliculas2 = [];

const capturarTitulos = new Promise(
    (cumplido, noCumplido)=>{
        let i = 0;
        if(i <= peliculas.length){
            setInterval(
                peliculas.map(
                    function(){
                        peliculas2.push(peliculas[i].titulo);
                        i++;
                    }
                ),5000
            )
            cumplido(peliculas2);
        }else{
            noCumplido(error);
        }
    }
);



capturarTitulos
    .then(
        (respuesta)=> console.log(`Esta fue la respuesta de la promesa: ${respuesta}`)
    )
    .catch(
        error => console.log(error)
    )

console.log(peliculas2)



/* 
    A simple vista esto puede parecer mucho codigo para algo que podemos hacer solo usando .map(),
    y es que si, todo sucede tan instantaneamente que el asincronismo no se aprecia del todo,
    a menos que llamemos a setInterval() y simulemos una situacion de la web normal, en este caso
    los tiempos de respuesta entre servidor y cliente.
*/



// Callback Hell llevado a Promesas
let carrito = "🛒";

function agregarProducto(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            carrito += "📦";
            resolve(carrito);
        }, 2000);
    });
}

agregarProducto()
    .then((carritoActualizado) => {
        console.log(carritoActualizado); 
        // mostrará el carrito actualizado con un elemento 📦
    })
    .catch((error) => {
        console.log(error); 
        // manejar errores aquí
    });





// Realiza una promesa asincrona llamada "obtenerMensaje" que obtenga datos de un objeto llamado "persona" 
// y forme un mensaje luego de 3 segundos.
// El objeto "persona" debe tener 3 propiedades, nombre, apellido y correo.


// Objeto llamado Persona
const persona = {
    nombre: "Cesar",
    apellido: "Lozano",
    correo: "cesar@gmail.com"
}

//Promesa asincrona que retorna un mensaje luego de 3 segundos con los datos obtenidos del objeto "persona"
// Se utiliza para este ejemplo try-catch y setTimeout()

const obtenerMensaje = new Promise((resolve, reject)=>{
    try{
        setTimeout(
            ()=>{
                resolve(`Hola me llamo ${persona.nombre} ${persona.apellido}, mi correo es: ${persona.correo}`)
            },3000
        )
    }catch(err){
        reject(`Ocurrio el error: ${err}`)
    }
})

obtenerMensaje
    .then(
        (respuesta)=>{
            console.log(respuesta)
        }
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )