/* 
    Una interfaz es un tipo de dato que se utiliza para definir la forma de un objeto. 
    Las interfaces permiten especificar qué propiedades y métodos debe tener un objeto 
    para que sea considerado de cierto tipo.
    
    Por ejemplo, supongamos que se desea definir un tipo de dato para representar a una 
    persona con nombre, edad y dirección.
*/



// Definición de una interfaz
interface Persona{
    nombre: string;
    apellido: string;
    direccion: string;
    edad?: number;
}

// El símbolo "?" se utiliza para indicar que una propiedad es opcional en una interfaz o tipo de objeto. 
/* 
    En cierta manera se podría decir que una interfaz se parece a un esquema 
    o definición de un objeto. La interfaz define la estructura de un objeto 
    y especifica qué propiedades y métodos deben estar presentes en ese objeto, 
    sin proporcionar ninguna implementación real.
*/




// Definición de una clase que implementa la interfaz Persona

class Empleado implements Persona{
    nombre: string;
    apellido: string;
    direccion: string;
    edad?: number;

    constructor(nombreEmpleado: string, apellidoEmpleado: string, direccionEmpleado: string, edadEmpleado?: number){
        this.nombre = nombreEmpleado;
        this.apellido = apellidoEmpleado;
        this.direccion = direccionEmpleado;
        this.edad = edadEmpleado;
    };


    mostrarInformacion(){
        return (`El empleado se llama: ${this.nombre} ${this.apellido}`);
    }
};


// Creacion de una instancia de la clase Empleado.
const empleado1 = new Empleado("Diego", "Rodriguez", "Santiago Centro", 27);
const empleado2 = new Empleado("Kevin", "Velasquez", "Los Puertos");
const empleado3 = new Empleado("Jesus", "Gorin", "No lo se", 30);


// Llamando de las propiedades que se asignaron al instanciar la clase Empleado.
console.log(empleado1.nombre);
console.log(empleado1.apellido);
console.log(empleado1.direccion);
console.log(empleado1.edad);


console.log(empleado2.nombre);
console.log(empleado2.apellido);
console.log(empleado2.direccion);
// En este llamado no se retorna la edad ya que al instanciar no se envio la informacion.
console.log(empleado2.edad);


console.log(empleado3.nombre);
console.log(empleado3.apellido);
console.log(empleado3.direccion);
console.log(empleado3.edad);


// Llamando al metodo mostrarInformacion que se asigna al instanciar la clase Empleado.
console.log(empleado1.mostrarInformacion());
console.log(empleado2.mostrarInformacion());
console.log(empleado3.mostrarInformacion());