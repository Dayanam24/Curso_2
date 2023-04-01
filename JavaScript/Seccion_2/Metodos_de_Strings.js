// Los strings o cadenas de caracteres cuentan con metodos para ser manipulados, 
// entre los principales metodos se encuentran:


let saludo = " Hola Mundo, mensaje de Prueba! ";

saludo;

//  length: No es un metodo, es una propiedad que devuelve la longitud de una cadena. (No recibe parametros)
console.log(saludo.length);


let password = "diEgo";
console.log(password.length);



//  toUpperCase() y toLowerCase(): convierten una cadena a mayúsculas o minúsculas, respectivamente. (No reciben parametros)
console.log(password.toUpperCase());
console.log(password.toLowerCase());




//  indexOf() y lastIndexOf(): buscan un valor específico en una cadena y devuelven su posición.
let saludo_2 = "Hola todos!";

console.log(saludo_2.indexOf("o"));
console.log(saludo_2.lastIndexOf("o"));




//  slice(): Extrae una porción de una cadena.
//slice(start, end)
console.log(saludo_2.slice(5,11))


//  substring(): Extrae una porcion de una cadena.
//substring(index, index2)
console.log(saludo_2.substring(10,4));





//  replace(): reemplaza un valor específico en una cadena con otro valor.

let mensaje = "El perro de juanito persigue al raton";
console.log( mensaje.replace("perro","gato") );




//  concat(): une dos o más cadenas.

let nombre = "Diego";
let saludo_3 = "Hola!, me llamo ";
let mensaje_completo = saludo_3.concat(nombre)

console.log(saludo_3 + nombre)
console.log(saludo_3.concat(nombre));

mensaje_completo;


//  split(): divide una cadena en un array de subcadenas, su argumento sirve para delimitar la cadena original.
let articulo = "divide una cadena en un array. de subcadenas. su argumento sirve. para delimitar la cadena. original."

console.log(articulo.split("."))

articulo = articulo.split(".");

articulo;



//  trim(): elimina los espacios en blanco al principio y al final de una cadena. (No recibe parametros)
    console.log( saludo.trim());
    console.log(saludo.length);

    saludo = saludo.trim()
    console.log(saludo.length);



//  startsWith() y endsWith(): determinan si una cadena comienza o termina 
//  con un sufijo(Secuencia al inicio) o prefijo(Secuencia al final) específico.

let usuario = "@usuario_didacusdev";
let usuario2 = "@usuario_corebik";
let usuario3 = "@r-casapon";

console.log( usuario.startsWith("@usuario_") )
console.log( usuario2.startsWith("@usuario_") )
console.log( usuario3.startsWith("@usuario_") )




let email1 = "didacusdev@gmail.com";
let email2 = "didacusdev@gmail.online";
let email3 = "didacusdev@gmail.cl";
let email4 = "didacusdev@gmail.com";
let email5 = "didacusdev@gmail.info";
let email6 = "didacusdev@gmail.com";
let email7 = "didacusdev@gmail.me";


console.log( email1.endsWith(".com") ) 
console.log( email2.endsWith(".com") ) 
console.log( email3.endsWith(".com") ) 
console.log( email4.endsWith(".com") ) 
console.log( email5.endsWith(".com") ) 
console.log( email6.endsWith(".com") ) 
console.log( email7.endsWith(".com") ) 







/*
    Realiza un algoritmo que:

    1) muestre un  mensaje en pantalla indicando una serie de requisitos
    2) pida 2 veces el nombre de usuario mediante prompt
    3) compare si son identicos
    4) verifique si el usuario tiene al menos 5 caracteres y maximo 15
    5) Si comiensa con @
    6) Si termina con $
    7) Luego muestra un mensaje en pantalla indicando si cumple los requisitos indicados
    7.1) en caso de no cumplir TODOS los requisitos, muestra otro mensaje indicando los requisitos
    cumplidos y los fallados.
    7.2) en caso de cumplir TODOS los requisitos, muestra un mensaje en pantalla con el nombre del usuario
    y un mensaje de felicidades, usuario registrado.
    8) Adicional, muestra un mensaje preguntando si desea reiniciar el proceso (Sin Loops)

*/