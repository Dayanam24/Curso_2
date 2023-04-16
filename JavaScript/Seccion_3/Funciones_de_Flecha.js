/*
    Las funciones de flecha (arrow functions) son una forma abreviada de escribir funciones, 
    En lugar de utilizar la palabra clave "function" se utiliza la flecha "=>" para definir la función.

    NOTA: 
    Las funciones de flecha tienen un comportamiento diferente en cuanto al this. 
    No tienen su propio objeto this, en su lugar, heredan el this del contexto/scope en el que fueron creadas.
*/


// Por ejemplo, una función tradicional se escribiría así:
function suma(a, b) {
    return a + b;
}
console.log( suma(10,20) );

// Y la misma función escrita como una función de flecha quedaría así:
let sumar = (a,b) => a + b ;

console.log( sumar(10,90) );





// .map() con Funcion de Flecha

let mezcla = [100,20,"35","cuatro",51,"6",78,"8","9",10,"once",12,"13"];

let variableParaStrings = [];
let numerosEnteros = [];

mezcla.map(
    (valorDelIndice)=>{
        (typeof(valorDelIndice) === "string")
            ? variableParaStrings.push(valorDelIndice)
            : numerosEnteros.push(valorDelIndice)
        
        // (typeof(valorDelIndice) === "string")
        //     ? variableParaStrings.push(valorDelIndice)
        //     : (typeof(valorDelIndice) === "number")
        //         ? numerosEnteros.push(valorDelIndice)
        //         : console.log("El dato no se puede almacenar")
    }
);


variableParaStrings;
numerosEnteros;




// Ejemplo 2 (Saludar a todos los alumnos del array llamado "alumnos" usando .map() y funciones de flecha 
// adicional guardar el saludo en una variable tipo array llamada "saludos");


let alumnos = ["Pedrito","Juanito","Luisita","Camilito","Andreita","Joseito"];
let saludos = [];
saludos;

// alumnos.map(
//     (nombreDeAlumno,index)=>{
//         console.log(`Hola ${nombreDeAlumno}`);

//         console.log(`Alumno: ${index + 1}) ${nombreDeAlumno}`);

//         saludos.push(`Hola ${nombreDeAlumno}`);
//     }
// );

alumnos.map(
    function(nombreDeAlumno,index){
        console.log(`Hola ${nombreDeAlumno}`);

        console.log(`Alumno: ${index + 1}) ${nombreDeAlumno}`);

        saludos.push(`Hola ${nombreDeAlumno}`);
    }
);


saludos;