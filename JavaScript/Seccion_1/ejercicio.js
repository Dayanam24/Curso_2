var color = prompt (
    `Elige un color inicial
    \n1) Verde
    \n2) Amarillo
    \n3) Rojo
    Otro) Opcion invalida`
);


switch (color){
    case "1":
        var accion = prompt("El semaforo esta en verde, que deseas hacer?\n1) Pasar normalmente\n2) Acelerar\n3) Esperar")
    switch (accion){
        case "1":
            alert("Bien hecho haz ganado")
            break

        case "2":
            alert("Oh no aceleraste demasiado")
            break

        case "3":
            alert("Oh no creaste un obstaculo")
            break

        default:
            alert("Respuesta invalida")

    }
    break

    case "2":
        var accion = prompt ("El semaforo esta en amarillo, que deseas hacer?\n1) Pasar normalmente\n2) Acelerar\n3) Esperar")
        switch (accion){
            case "1":
                alert("Oh no haz perdido")
                break

            case "2":
                alert("Felicidades, ganaste")
                break

            case "3":
                alert("Intenta de nuevo")
                break

            default:
                alert("Respuesta invalida")
        }
        break

    case "3":
        var accion = prompt ("El semaforo esta en rojo, que deseas hacer?\n1) Pasar normalmente\n2) Acelerar\n3) Esperar")
        switch (accion){
            case "1":
                alert("Intenta de nuevo")
                break

            case "2":
                alert("Oh no, perdiste")
                break

            case "3":
                alert("Felicitaciones, haz ganado")
                break

            default:
                alert("Respuesta invalida")

        }
        break

}