/*
    Un array es un objeto que contiene una colección ordenada de valores. 
    Cada valor se almacena en una posición específica dentro del array, 
    y se puede acceder a estos mediante un índice numérico que determina su posicion.

    Los arrays en JavaScript son muy versátiles y se utilizan para almacenar y manipular datos de varios tipos, 
    como números, cadenas, objetos, etc. 
    
    Se pueden crear arrays vacíos o con elementos iniciales, y se pueden modificar y acceder a los elementos 
    de un array mediante métodos y propiedades específicas.
*/

let colores = ["Azul", "Verde", "Naranja", "Rojo","Beige"];


//¿Que es iterar?: Iterar es el proceso de recorrer un conjunto de datos, como una lista o un array.

//Acceder a indices
console.log(colores[0]);
console.log(colores[1]);
console.log(colores[2]);
console.log(colores[3]);
console.log(colores[4]);
console.log(colores[5]);


//Modificar Indice
colores[4] = "Morado";
console.log(colores[4]);
colores;






/* *******   Metodos de Arrays   ******* */

//length: Retorna la longitid de un array.
console.log(colores.length);




//push: Agrega elementos al final de un array.

console.log(colores[5]);
// Push permite agregar elementos al final de ina lista o array

colores;
colores.push("Celeste","Rosa");


console.log(colores[5]);
console.log(colores[6]);

colores;





//unshift: Agrega elementos al inicio de un array.

colores.unshift("Uno","Dos");
colores;







//pop: Elimina solo 1 elemento al final de un array.

// Observando la lista antes de ser modificada
colores;

// Guardando el elemento eliminado en uba variable
let elementoEliminado = colores.pop();

// Aqui se elimina un elemento pero no se guarda
colores.pop();

// Observando cual fue el elemento eliminado
elementoEliminado;

// Observando la lista modificada, en este caso se han eliminado 2 elementos.
colores;




//shift: Elimina el solo 1 elemento al inicio de un array.

colores;


let elementoEliminado2 = colores.shift()

console.log("Se elimino: "+elementoEliminado2)

colores;






//index-of: Devuelve la posición de la primera aparición de un valor en un array. (Si no existe el valor retorna -1)

colores;
console.log(colores.indexOf("Beige"));

console.log(colores.indexOf("Morado"));





/*  filter(filtrar): es una función de los arrays que permite filtrar los elementos 
    mediante una función de retorno booleana. 

    La función de retorno booleana se aplica a cada elemento del array y solo los elementos 
    para los cuales la función devuelve true se incluyen en el nuevo array de resultados.

    En pocas palabras, este método crea un nuevo array con todos los elementos que 
    pasan la prueba implementada por la función indicada.
*/


//Ejemplo 1 (filter):
let numeros = [1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1];


let numerosPares = numeros.filter(
    function(elemento){
        // Funcion de retorno booleano, donde se evalua si el numero es par, 
        // En caso de ser true filter retornara ese numero a una nueva lista.
            return elemento % 2 === 0;
    }
);


let numerosImpares = numeros.filter(
    function(elemento){
        // Funcion de retorno booleano, donde se evalua si el numero es impar, 
        // En caso de ser true filter retornara ese numero a una nueva lista.
            return elemento % 2 === 1;
    }
);

numerosPares;
numerosImpares;


// Ejemplo 2
let nombres = ["Wilklert","Luis","nelson","Victor","Alfredo","Cesar","Antonio","Ali","Karelys","Pedro","Adaff","Waldemar","MiniHacker","Nelson"]

let usuariosIdenticos = nombres.filter(
    function(nombre){
        return (nombre === "Nelson" || nombre === "nelson");
    }
)

usuariosIdenticos;


// Ejemplo 3
let nombresPorLetraA = nombres.filter(
    function(elemento){
        return (elemento.startsWith("A"))
    }
);


nombresPorLetraA;



// Ejemplo 4
let frutas = ["🍇","🍍","🍇","🍓","🍇","🍎","🍇"]; 


// Crear un nuevo array llamado uvas y filtrar todos los elementos 
// del array frutas que sean "🍇".


let uvas = frutas.filter(
    function(elemento){
        return elemento === "🍇"
    }
);


uvas;


// Ejemplo 5

//Obtener correos que terminan en "@gmail.com" con .filter() y .endsWith()

let correos = [
    "juanito@yahoo.com",
    "pedrito@gmail.com",
    "rubencito@aol.com",
    "juanito@yahoo.com",
    "Carlos1212@gmail.com",
    "rubencito@aol.com",
    "juanito@yahoo.com",
    "minihacker@gmail.com",
    "rubencito@aol.com",
    "juanito@yahoo.com",
    "pedroelhacker@gmail.com",
    "rubencito@aol.com",
    "juanito@yahoo.com",
    "adaff@gmail.com",
    "rubencito@aol.com",
    "juanito@yahoo.com",
    "didacusdev@gmail.com",
    "rubencito@aol.com",
    "juanito@yahoo.com",
    "ventas@gmail.com",
    "rubencito@aol.com",
];


let correosGmail = correos.filter(
    function(elemento){
        return elemento.endsWith("gmail.com")
    }
);

let correosAol = correos.filter(
    function(elemento){
        return elemento.endsWith("aol.com")
    }
);

let correosYahoo = correos.filter(
    function(elemento){
        return elemento.endsWith("yahoo.com")
    }
);


correosGmail;
correosAol;
correosYahoo;




// find(buscar): devuelve el valor del primer elemento del array que cumpla (retorne true) con la función definida. 
// Si ningún elemento cumple con la funcion (si retorna false), devuelve undefined.



let comidas = ["🍖","🥩","🧀","🥓","🥙"];

//Ejemplo 1 (find):
let queso = comidas.find(
    function(elemento){
        return elemento === "🧀"
    }
);


queso;

//Ejemplo 2 (find):
//Si busco un elemento que no este en la lista, retorna undefined
let tomate = comidas.find(
    function(elemento){
        return elemento === "🍅";
    }
);

tomate;



let correoGmail = correos.find(
    function(elemento){
        return elemento === "ventas@gmail.com"
    }
);


correoGmail;





//findindex: devuelve la posicion de la primera coincidencia de un elemento en un array.
console.log(comidas);


//Ejemplo 1 (¿Cual es la posicion de la tocineta?):

let indiceTocineta = comidas.findIndex(
    function(elemento){
        return elemento === "🥓"
    }
);


indiceTocineta;


//Ejemplo 2 (¿Cual es la posicion del mango?):
//Si no encuentra un elemento retorna undefined
let indexMango = comidas.find(
    function(elemento){
        return elemento === "🥭";
    }
)

console.log(indexMango);





//fill: Rellena el array con el elemento indicado desde un índice inicial hasta 
// una posicion antes del indice final indicado.
// Ejemplo: array.fill(elementoNuevo, posicionDeInicio, posicionFinal)


//  Ejemplo 1
let compra = ["🧃","🧁","🥑","🥦","🥕","🥩","🍞"];

//Como me gusta mucho el helado, voy reemplazar "🥑","🥦","🥕" y "🥩" por "🍦".
compra.fill("🍦",2,6);

compra;




// Ejemplo 2

let usuarios = ["Pago","Pago","Deuda","Deuda","Deuda","Pago"];

usuarios.fill("algo",2,3);
usuarios.fill("algo",4,5);

usuarios;




//every(todos): devuelve true SI TODOS los elementos del array CUMPLEN con la función proporcionada,
//de lo contrario retorna false.

//Ejemplo 1 (¿Todo es par?)
let listaNumeros = [1,3,5,7,9,11];


//Se evalua si TODOS los elementos del array son pares
let todosPares = listaNumeros.every(
    function(numero){
        return (numero % 2) === 0;
    }
);


todosPares;


//Ejemplo 2 (¿Todo es impar?)
let todoImpar = listaNumeros.every(
    function(numero){
        return (numero % 2) === 1;
    }
);


todoImpar;



//ejemplo 3 (¿Todo es carne?)
let comida = ["🥩","🥩","🥩","🥩","🥩"];


let todoCarne = comida.every(
    function(elemento){
        return elemento === "🥩";
    }
);

todoCarne;




//some(alguno): devuelve true si alguno de los elementos cumple con la funcion proporcionada,
//de lo contrario devuelve false.


let vegetales = ["🥦","🥕","🧅","🥬","🍫","🥔"];
let vegetales2 = ["🥦","🥦","🥦","🥦","🍫","🥦","🥦",];


//Ejemplo 1 (¿Alguno es es un chocolate?).
let noVegetal = vegetales.some(
    function(elemento){
        return elemento === "🍫"
    }
);

let todosVegetal = vegetales2.every(
    function(elemento){
        elemento = "🥦"
    }
)

noVegetal;
todosVegetal;





//Ejemplo 2 (¿Alguno es el numero 2?)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numbers = [1,"2", 3, 4, 5, 6, 7, 8, 9, 10];


const someEven = numbers.some(
    function igual(number){
        return number  === 2;
    }
);

console.log(someEven);






// Realiza un algoritmo que determine si algun usuario de una lista de usuarios se llama Diego
// adicional modifica el indice del usuario (si existe) con el nombre Alonso
// de lo contrario retornar un mensaje que diga el usuario no existe.