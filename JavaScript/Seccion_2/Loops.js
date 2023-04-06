/*
    Los bucles soin estructuras que nos permiten ejecutar un bloque de código varias veces. 
    JavaScript admite diferentes tipos de bucles.

    for(in of), while(do-while)
*/

let ciclos = 5;

// for - recorre un bloque de código un numero determinado de veces
//for(Inicializador; codicion; tipo incremento){... codigo ...};

for( i = 0; i <= ciclos; i++){
    console.log( i );
    console.log(`Ciclo: ${i}`);
}



// Tabla de multiplicar con for

for(i = 1; i <= 10; i++){
    console.log(`${5} x ${i} = ${5*i} `);
}


for(i = 0; i <= 10; i++){
    console.log("Hola")
}



// Funcion que rebiba un numero mediante prompt y muestre su tabla de multiplicar basica
// function tabla(){
//     let ingreso = +prompt("Ingresa un numero para ver su tabla");
//     for(i = 1; i <= 10; i++){
//         console.log(`${ingreso} x ${i} = ${ingreso * i} `);
//     }
// }


// tabla();







// for/of - Recorre los valores de un array.
// //For of con arrays, retorna el valor del indice en el ciclo actual.

let listaDeProductos = ["Celular","TV","Microfono","Estereo","Proyector","Teclado","PS5"];

// for(elemento of lista){... codigo ...}

for(producto of listaDeProductos){
    console.log(`Elemento: ${producto}`)
}



//For in con arrays, NO retorna el valor, en su lugar retorna el indice.
for(producto in listaDeProductos){
    console.log(`Indice: ${producto}`)
}






// for/in - Recorre las propiedades de un objeto de forma ordenada, se utiliza a menudo para
// recorrer objetos que NO son arrays.
// Sin embargo es posible recorrer un array con for in, pero el resultado no 
// serian los valores sino los indices.


let persona = {
    nombre: "Luisito",
    edad: 30,
    ciudad: "Bogota",
    telefono: "123-123-12-12",
    email: "luisito@email.com"
}


for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
    console.log(persona[propiedad]);
}




// Ejemplo 2(Objetos anidados)
let personas = {
    Persona1:{
        nombre: "Samuel",
        edad: 20,
        ciudad: "Santiago",
        telefono: "+56934887123",
        email:"samuel@gmail.com"
    },
    Persona2:{
        nombre: "Christian",
        edad: 24,
        ciudad: "Caracas",
        telefono: "+584129387465",
        email:"christian@gmail.com"
    },
    Persona3:{
        nombre: "Valentina",
        edad: 30,
        ciudad: "Madrid",
        telefono: "+344129387465",
        email:"valentina@gmail.com"
    }
};


console.log( personas.Persona1.nombre );
console.log( personas.Persona2.nombre );

for(propiedad in personas) {
    console.log(`Propiedad: ${propiedad} `);        
    console.log(`Me llamo: ${personas[propiedad].nombre} Tengo: ${personas[propiedad].edad} años Vivo en: ${personas[propiedad].ciudad} Mi numero es: ${personas[propiedad].telefono} Mi correo es: ${personas[propiedad].email}`);
};