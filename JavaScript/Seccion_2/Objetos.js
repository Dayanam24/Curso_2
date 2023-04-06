/*
    los objetos son una de las estructuras de datos fundamentales. 
    Un objeto es un conjunto de pares clave-valor (o key-value) que representan una entidad o un concepto. 
    Las claves son cadenas de texto o símbolos y los valores pueden ser cualquier tipo de datos.
*/

let persona = {
    nombre: "Diego",
    apellido: "Rodriguez",
    edad: 15,
    pais: "Venezuela",
    habilidades: ["Correr","Ciclismo","Programar","Musica"]
}

console.log(persona.nombre);
console.log(persona.habilidades);

console.log( persona.habilidades[1] );


let mensaje = `Hola!, me llamo ${persona.nombre} ${persona.apellido}, tengo ${persona.edad} años de edad y vivo en ${persona.pais},  me gusta: el ${persona.habilidades[1]} y ${persona.habilidades[2]}`


mensaje;



// Objeto llamado AUTO

let auto = {
    marca: "Chevrolet",
    modelo: "Camaro",
    fecha: 1967,
    motor: "6 en Linea",
    transmision: "Manual",
    colores: ["Negro","Azul","Gris","Rojo"],
    versiones: [{fecha: 1968, techo: "Decapotable"},{fecha: 1969, techo: "transparente"}],
    detalles: function(){
            return (
                `Tengo un auto marca ${this.marca} que tiene un motor ${this.motor} y transmision ${this.transmision}.`
            );
        },
    avanzando: function(){
            return "El auto esta avanzando"
        },
    detenido: function(){
            return "El auto esta detenido"
        }
}


// Llamando valores en propiedades
console.log( auto.marca );
console.log( auto.modelo );
console.log( auto.fecha );
console.log( auto.versiones );
console.log( auto.colores );

// Lamando valores en propiedades complejas
console.log( auto.versiones[1].techo );


// Llamando metodos
console.log( auto.detalles() )
console.log( auto.avanzando() )
console.log( auto.detenido() )




// Agregar nueva propiedad a objeto existente

auto.estado = "Nuevo";

console.log( auto.estado );
console.log( auto );



// Agregar nuevo Metodo a objeto existente

auto.choco = function(){
    return "Oh no, el auto Chocó 💥"
};


console.log( auto.choco() )
console.log( auto );




// Ejercicios en clase
auto.gasolina = function(){
    return "El auto se quedo sin gasolina";
}


console.log( auto.gasolina() );



auto.pais = ["Venezuela","Chile","Ecuador","Colombia","Perú"]

console.log( auto.pais );

console.log( auto.pais[2] ); 


auto.concesionarios = [
    {ciudad:"Maracaibo",stock:100},
    {ciudad:"Caracas",stock:400},
    {ciudad:"Santiago",stock:6200},
    {ciudad:"Bogota",stock:10},
]


console.log( auto.concesionarios )


console.log( auto.concesionarios[2].stock );





/*
    Crea un objeto llamado productos, que contenga 5 propiedades, tecnologia,hogar,alimentos,salud,ropa.

    - tecnologia, debe ser un objeto con 2 propiedades:
        * computadoras: debe tener un objeto con 4 propiedades: tipo:[laptop,escritorio], ram:[4gb,8gb,16gb], almacenamiento:[128gb,256gb,512gb,1tb], procesador:[Intel,AMD].
        * celulares: debe tener un objeto con 3 propiedades: marca:[samsumg,lg,xiaomi,poco], ram[4gb,6gb,8gb,12gb,16gb], almacenamiento(32gb,64gb,128gb,256gb),
    
    - hogar, debe ser un objeto con 2 propiedades:
        * electrodomesticos: debe tener un objeto con 2 propiedades: tipo:[tv,parlante,licuadora,lavadora], color:[blanco,gris,negro]
        * muebles: debe tener un objeto con 3 propiedades: tipo:[silla,mesa,gabetero], material:[madera,plastico,metal], color:[blanco,beige,gris,negro]

    - alimentos, debe tener un objeto con 4 propiedadess:
        * carnes: debe tener un objeto con 1 propiedad: animal:[pollo,res,cerdo]
        * viveres: debe tener un objeto con 3 propiedades: harina:[trigo,maiz], aceite:[girasol,oliva,maiz], leche:[completa,soya,almendra,descremada]
        * fruver: debe tener un objeto con 2 propiedades: frutas:[manzana,pera,uva,fresa,piña], vegetales:[lechuga,zanahoria,cebolla,rabano,calabaza]
        * aseo: debe tener un objeto con 2 propiedades: personal:[shampoo,acondicionador,jabon,crema dental,desodorante], hogar[cloro,desinfectante,jabon,paños]


    - salud, debe tener un objeto con 2 propiedades:
        * medicamentos: debe tener un objeto con 2 propiedades:
            ° con_prescripcion: debe tener un objeto con 2 propiedades: jarabe:[Clonazepan, Tramadol, Cloperastina, Terbutalina], comprimidos:[Losartan, Enalapril, Ácido valproico, Metformina]
            ° de_venta_libre: debe tener un objeto con 2 propiedades: jarabe:[Acetaminofén, Loratadina, Nitazoxanida, Ambroxol], comprimidos:[Cetirizina, Albendazol, Trimebutina, Omeprazol]
        * primeros_auxilios: debe tener un objeto con 3 propiedades: proteccion_personal:[mascarillas,lentes protectores], curas_y_vendajes:[vendas,tijeras,curitas], suministros_para_heridas:[algodon,compresas]


    - ropa, debe tener un objeto con 3 propiedades:
        * damas: debe tener un objeto con 3 propiedades: prenda:[vestido,jean,blusa,ropa interior,calzado], temporada:[invierno,primavera,verano,otoño], importado:[true,false]
        * caballeros: debe tener un objeto con 3 propiedades: prenda:[short,jean,camisa,ropa interior,calzado], temporada:[invierno,primavera,verano,otoño], importado:[true,false]
        * niños: debe tener un objeto con 3 propiedades: prenda:[vestido,short,jean,camisa,blusa,ropa interior,calzado], temporada:[invierno,primavera,verano,otoño], importado:[true,false]

    Resultados estimados:
        console.log(productos.tecnologia.computadoras.procesador[0]); //intel
        console.log(productos.alimentos.viveres.leche[2]); //almendra
        console.log(productos.salud.medicamentos.con_prescripcion.comprimidos[0]); //Losartan
        console.log(productos.hogar.electrodomesticos.tipo[2]); //licuadora
        console.log(productos.ropa.damas.temporada[0]); //invierno
*/