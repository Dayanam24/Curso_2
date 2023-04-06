/*
    Funcion Constructora: 
    Estas funciones permiten la creacion de nuevos objetos en base de una estructura predefinida(plantilla)

    las funciones constructoras son la forma más antigua de crear objetos en JavaScript. 
    Se definen utilizando la palabra clave "function" seguida del nombre de la función.

    Una vez definidas se inicializan con la palabra clave "new" para crear un nuevo objeto o instancia.
    
    Dentro de la función, se asignan valores a las propiedades del objeto instanciado utilizando "this".

    NOTA: Es un convenio o buena practica nombrar las funciones constructoras con la primera letra en mayuscula.
    Esto con la finalidad de diferenciar con mas facilidad cuando se esta trabajando con una funcion normal,
    o una variable.
*/


// Ejemplo 1 
function Usuario(miNombre, miApellido, miEdad){
    this.nombre = miNombre,
    this.apellido = miApellido,
    this.edad = miEdad
}


let usuario1 = new Usuario("Diego","Rodriguez",20);
let usuario2 = new Usuario("Daniel","Rondon",25);
let usuario3 = new Usuario("Sabrina","Lopez",30);

usuario1;
usuario2;
usuario3;