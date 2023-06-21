/*alert("Usuario")

const nombreUsuario1 = prompt("Ingresa nombre de usuario")
const nombreUsuario2 = prompt("Ingrese nombre de usuario")

const nombreIdentico = nombreUsuario1 === nombreUsuario2


const longitudNombre = nombreUsuario1.length
const cumpleLongitud = longitudNombre >= 5 && longitudNombre <=15
const comienzaConArroba = nombreUsuario1.startsWith("@")
const terminaConDolar = nombreUsuario1.endsWith("$")
if(nombreIdentico && cumpleLongitud && comienzaConArroba && terminaConDolar){
    alert(`Felicidades ${nombreUsuario1} usted ha sido registrado con exito`)

}
else{
    let requisitoFallado =""
    if(!nombreIdentico) requisitoFallado += "\n- Los nombres de usuarios no son identicos"
    if(!cumpleLongitud) requisitoFallado += "\n- Nombre de usuario no cumple con la longitud requerida"
    if(!comienzaConArroba) requisitoFallado += "\n- Los nombre de usuario no comienza con @"
    if(!terminaConDolar) requisitoFallado += "\n- Los nombres de usuario no termina con $"
    alert(`Lo siento no ha sido registrado el usuario. Los siguiente requisito no se cumplieron: ${requisitoFallado}`)
}
    

const reiniciarProceso = confirm("Desea reiniciar el proceso")
if(reiniciarProceso){
    window.location.reload()

} else{
    alert("Gracias por utilizar el servicio")
}*/




/*let listaDeUsuario = ["Gerardo", "Eliana", "Dayana", "Diego",];

let algunDiego = listaDeUsuario.some(
    function(elemento) {
        return elemento === "Diego"
    }

)

algunDiego

console.log(listaDeUsuario[0]);
console.log(listaDeUsuario[1]);
console.log(listaDeUsuario[2]);
console.log(listaDeUsuario[3]);

listaDeUsuario[5] = "Alonso"

console.log(listaDeUsuario[5]);

let algunAlonso = listaDeUsuario.some(
    function(elemento){
        return elemento === "Alonso"
    }

)

algunAlonso

if(listaDeUsuario[5] === "Alonso"){
    console.log("Usuario existente")
}

else{
    console.log("Usuario no existente")
}*/







let productos = {
    tecnologia: {
        computadoras:{
            tipo:["lapto", "escritorio"],
            ram: ["4gb", "8gb", "16gb"],
            almacenamiento:["128gb", "256gb", "512gb", "1tb"],
            procesador: ["Intel", "AMDS"]
        },

        celulares:{
            marca:["samsumg", "lg", "xiaomi", "poco"],
            ram:["4gb", "6gb", "8gb", "12gb", "16gb"],
            almacenamiento: ["32gb", "64gb", "128gb", "256gb"],
        }
    },

    hogar: {
        electrodomesticos: {
            tipo: ["tv","parlante","licuadora","lavadora"],
            color: ["blanco","gris","negro"]
        },

        muebles:{
            tipo: ["silla","mesa","gabetero"],
            material: ["madera","plastico","meta"],
            color: ["blanco","beige","gris","negro"]
        }
    },

    alimentos:{
        carnes:{
            animal: ["pollo","res","cerdo"]
        },

        viveres:{
            harina:["trigo","maiz"],
            aceite:["girasol","oliva","maiz"],
            leche:["completa","soya","almendra","descremada"]
        },

        fruver:{
            frutas:["manzana","pera","uva","fresa","piña"],
            vegetales:["lechuga","zanahoria","cebolla","rabano","calabaza"]
        },

        aseo:{
            personal:["shampoo","acondicionador","jabon","crema dental","desodorante"],
            hogar:["cloro","desinfectante","jabon","paños"]
        }

    },

    salud:{
        medicamentos:{
            con_prescripcion:{
                jarabe:["Clonazepan", "Tramadol", "Cloperastina", "Terbutalina"],
                comprimidos:["Losartan", "Enalapril", "Ácido valproico", "Metformina"]
            },

            de_venta_libre:{
                jarabe:["Acetaminofén", "Loratadina", "Nitazoxanida", "Ambroxol"],
                comprimidos:["Cetirizina", "Albendazol", "Trimebutina", "Omeprazol"]
            },

            primeros_auxilios:{
                proteccion_personal:["mascarillas","lentes protectores"],
                curas_y_vendajes:["vendas","tijeras","curitas"],
                suministros_para_heridas:["algodon","compresas"]
            }
        }

    },

    ropa:{
        damas:{
            prenda:["vestido","jean","blusa","ropa interior","calzado"],
            temporada:["invierno","primavera","verano","otoño"], 
            importado:[true,false]
        },

        caballeros:{
            prenda:["short","jean","camisa","ropa interior","calzado"], 
            temporada:["invierno","primavera","verano","otoño"], 
            importado:[true,false]
        },

        niños:{
            prenda:["vestido","short","jean","camisa","blusa","ropa interior","calzado"], 
            temporada:["invierno","primavera","verano","otoño"], 
            importado:[true,false]
        }
    }
}

console.log(productos.tecnologia.computadoras.procesador[0])
console.log(productos.alimentos.viveres.leche[2])
console.log(productos.salud.medicamentos.con_prescripcion.comprimidos[0])
console.log(productos.hogar.electrodomesticos.tipo[2])
console.log(productos.ropa.damas.temporada[0])
    
        

    





