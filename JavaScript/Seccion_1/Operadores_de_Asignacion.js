0/* Asignacion = : como bien su nombre indica se utiliza para asignar un valor. */


// Variable asignada como string (cadena de texto)
let nombre = "Diego";
nombre;


// Variable asignada como nummero
let edad = 18;
edad


// Variables asignadas como array (lista y lista2)
let lista = ["Rodriguez",2023];
console.log(lista[1])

//   Indices: 0,1,2,3,4,5,6,7,8
let lista2 = [1,2,3,4,5,6,7,8,9];

// Mostrar todos los elementos
lista2;

// Mostrar elemento especifico
console.log(lista2[4])


let lista3 = [1,2,"tres","verde",true,5,false,undefined];

console.log(lista3[7])



// Variable de tipo Objeto
let controlRemoto = undefined;
controlRemoto;


controlRemoto = {
    color:undefined,
    tamano:undefined,
    numeroDeBotones: 10,
    tipoDeAlimentacion: "Baterias Recargables",
    funciona: true
};

controlRemoto;

// Mostrar informacion especifica
console.log(controlRemoto.numeroDeBotones);

// Primer llamado de la propiedad color antes de tener un valor asignado.
console.log(controlRemoto.color);

// Asignacion de valor a propiedad especifica
controlRemoto.color = "amarillo";

// Segundo llamado a la propiedad color LUEGO de la asignacion de un valor
console.log(controlRemoto.color);


controlRemoto.tamano ="20cm"

console.log(controlRemoto);








/*  Operador de asignacion y suma*/

let numero = 0;
let segundoNumero = 25;

numero += 5; //Equivale a decir: numero = numero + 5;

numero;

numero += 5 //Equivale a decir: numero = numero + 5;

numero;

numero = numero + 10;

numero;

numero += segundoNumero; //Equivale a decir: numero = numero + segundoNumero; // 20 = 20 + 25

numero;






/*  Operador de asignacion y resta*/

// Valor actual de la variable luego de mutar con el operador de asignacion y suma.
numero;


numero -= segundoNumero;

numero;

numero -= 18;

numero;





/* Operador de asignacion y multiplicacion */



numero *= 5;

numero




/* Operador de asignar y dividir */

// numero = numero / 2
numero /= 2

numero;


