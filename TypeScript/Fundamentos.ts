/*
    TypeScript: es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft,
    se clasifica como un superset de JavaScript. Es decir, TypeScript es una extensión de JavaScript
    que agrega nuevas características y capacidades al lenguaje, como tipado estático, funciones de tipo 
    e interfaces.

    Ademas, se compila a JavaScript, lo que significa que el código TypeScript que escribimos
    se puede ejecutar en cualquier navegador web o plataforma que admita JavaScript. 
*/


// Tipado de datos basico

// String

// En JavaScript
let nombre = "Diego";
console.log(nombre);

// En TypeScript
let nombre2:string = "Cesar";
console.log(nombre2);




// Numeros

// En JavaScript
let edad = 27;
console.log(edad);

// En TypeScript
let edad2:number = 27;
console.log(edad2);



// Booleanos

// En JavaScript
let estaActivo = true;
console.log(estaActivo);

// En TypeScript
let estaActivo2:boolean = true;
console.log(estaActivo2);


// Null
// En JavaScript
let miVariable = null;
console.log(miVariable);

// En TypeScript
let miVariable2:null = null;
console.log(miVariable2);


// Undefined

// En JavaScript
let miVariable3;
console.log(miVariable3);

let miVariable4 = undefined;
console.log(miVariable4);

// En TypeScript
let miVariable5:undefined = undefined;
console.log(miVariable5);


// Any: Permite asignar cualquier tipo de dato existente.

// En JavaScript
let miVariable6 = ["Diego", 27, true, {apellido: "Rodriguez"}, null, undefined, [1,2,3]];
console.log(miVariable6);

// En TypeScript
let miVariable7:any = ["Diego", 27, true, {apellido: "Rodriguez", gustos: ["programacion", "musica", "video juegos"]}, null, undefined, [1,2,3]];

console.log(miVariable7);







// Estructuras de datos

// Enumerar lista de valores
// Ejemplo 1

enum DiaSemana {Lunes,Martes,Miercoles,Jueves,Viernes,Sabado,Domingo}
console.log(DiaSemana);

let dia:DiaSemana = DiaSemana.Sabado;
console.log(dia);


if( dia === DiaSemana.Sabado || dia === DiaSemana.Domingo){
    console.log(`Hoy es ${DiaSemana[dia]}, por lo tanto es fin de semana`);
}else{
    console.log("No es Fin de semana");
}




// Ejemplo 2
enum TallaCamiseta{
    SS = "Super Small",
    S = "Small",
    M = "Medium",
    L = "Large",
    XL = "Extra Large",
    XXL = "Extra Extra Large"
}


console.log(TallaCamiseta);
console.log(TallaCamiseta.S);



let talla1:TallaCamiseta = TallaCamiseta.S;
let talla2:TallaCamiseta = TallaCamiseta.XL;

console.log(talla1);
console.log(talla2);

// NOTA: En cierta medida los enums y los objetos son similares, ya que ambos son 
// estructuras de datos utilizadas para representar información. 
// Sin embargo, su propósito y funcionalidad son diferentes.





/** Tipado de datos avanzado **/


// Crear un array de números

// En JavaScript
let numeros = [1,2,3,4,5];

// En TypeScript
let numeros2:number[] = [1,2,3,4,5,6];





// Crear un array de cadenas de texto

// En JavaScript
let nombres = ["Diego", "Cesar", "Cristian"];

// En TypeScript
let nombres2:string[] = ["Diego", "Cesar", "Cristian"];





// Array mixto

// En JavaScript
let mixto = [1,"Diego",true,{apellido: "Rodriguez"},[1,2,"3"]];

// En TypeScript
let mixto2:any[] = [1,"Diego",true,{apellido: "Rodriguez"},[1,2,"3"]];





// Objetos

// En JavaScript
let persona = {
    nombre:"Diego",
    edad: 27,
    sexo:"masculino",
    pais: "Chile"
};

// En TypeScript
let objeto2:{ nombre:string, edad: number, sexo:string, pais:string } = {
    nombre:"Diego",
    edad: 27,
    sexo:"masculino",
    pais: "Chile"
};




// Array de Objetos

// En JavaScript
let personas = [
    {
        nombre:"Diego",
        edad: 27,
        sexo:"masculino",
        pais: "Chile"
    },
    {
        nombre:"Cesar",
        edad: 22,
        sexo:"masculino",
        pais: "Venezuela"
    },
    {
        nombre:"Cristian",
        edad: 30,
        sexo:"masculino",
        pais: "Colombia"
    }
];



// En TypeScript
let personas2: {nombre:string, edad:number, sexo:string, pais:string}[] = [
    {
        nombre:"Diego",
        edad: 27,
        sexo:"masculino",
        pais: "Chile"
    },
    {
        nombre:"Cesar",
        edad: 22,
        sexo:"masculino",
        pais: "Venezuela"
    },
    {
        nombre:"Cristian",
        edad: 30,
        sexo:"masculino",
        pais: "Colombia"
    }
];





// Crear Tuple o Lista ordenada de elementos

/*
    Un tuple en es un tipo de datos que permite definir una colección ordenada 
    de elementos con tipos específicos. A diferencia de los arrays, los tuples 
    tienen un número fijo de elementos y cada elemento puede tener un tipo de 
    dato diferente. 

    Curiosidad: en python tambien existen los tuples con una ligera diferencia
*/


let miPrimeraTupla: [string, number, boolean] = ["Diego", 27, true];

// Errores que surgirian al modificar una tupla.
/* Aqui veremos un error que indica que no se puede colocar un numero entero donde deberia ir
un string, ni un string donde deberia ir un numero entero.
*/
// miPrimeraTupla= [1,"Diego",true]; 


// Aqui veremos un error que indica que no se puede colocar mas datos de los que estan definidos por defecto.
// miPrimeraTupla = ["Diego", 27, true, 1];



/* 
    - Fundamentos
    - Funciones de tipo
    - Interfaces
    - DOM
*/