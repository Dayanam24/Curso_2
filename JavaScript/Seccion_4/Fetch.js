// fetch() es una función de JavaScript que permite hacer peticiones HTTP (como GET o POST) 
// a un servidor y obtener una respuesta. 
// Esta función retorna una promesa que se resuelve con los datos de la respuesta.

// En resumen, fetch() es una herramienta poderosa y flexible que te permite interactuar con un 
// servidor y obtener datos dinámicos en tu aplicación web.


//Sintaxis:
// fetch("URL") palabra reservada que entre parentesis y comillas contiene la ruta a consultar
//.then() contiene una funcion para tratar los datos, en este caso convertir 
// los datos recibidos en un formato json.
// .catch() contiene una funcion para tratar los errores, en este caso muestra un mensaje en consola.


const buscar = fetch("https://rickandmortyapi.com/api/character/820");
let datosObtenidos;

try{
    buscar
        .then(
            (respuesta)=>{
                console.log(`Esto es el JSON: ${respuesta}`)
                return respuesta.json()
            }
        )
        .then(
            respuesta => {
                console.log(`Esto es el JSON luego de ser transformado a objeto`)
                console.log(respuesta)
                document.getElementById("imagen").setAttribute("src",respuesta.image)
                document.getElementById("nombre").innerText = respuesta.name;
                document.getElementById("ciudad").innerText = respuesta.location.name;
                document.getElementById("especie").innerText = respuesta.species;
            }
        )
        .catch(
            err => console.log(`Error: ${err}`)
        )
}
catch(err){
    console.log(err)
}



