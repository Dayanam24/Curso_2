//Practica 1:
/*
    Defina toda la logica basica de un cajero automatico.
    
    Debe mostrar un menu con las opciones:
        Consultar
        Retirar
        Depositar
        Transferir

    Estas opciones deben ser ingresadas mediante numero
*/


// Saldo Base
let saldo = 1000;

// Menu
let menu = +prompt(`Bienvenido al cajero automatico
Que desea hacer:
1) Consultar
2) Retirar
3) Depositar
4) Transferir`,"Ingresa la opcion en numero");




switch(menu){
    case 1:
        alert(`Tu saldo actual es: ${saldo}`);
        break;

    case 2: 
        // Ingreso de monto a retirar
        let retiro = +prompt("Ingresa el monto a retirar");
        
        // Iniciar la funcion y enviar un parametro, en este caso la variable que contiene el monto a retirar
        retiroDeCajero(retiro);
        break;

    case 3:
        // Pedimos el monto a depositar
        let montoADepositar = +prompt("Ingresa el monto a depositar","Ingresa valor en numero");

        // Iniciar la funcion y enviar un parametro, en este caso la variable que contiene el monto a depositar
        depositoDinero(montoADepositar);
        break;

    case 4:
        // Se ejecuta la funcion de transferir dinero (Le faltan validaciones de monto disponible en saldo)
        transferirDinero()
        break;
    
    default:
        alert("Opcion NO valida");
}









/* FUNCIONES */

// Retiro
function retiroDeCajero(montoDeRetiro){
        
    // Si el saldo actual al restar el monto a retirar queda en menos de 0
    if((saldo - montoDeRetiro) < 0){
        
        return alert(`Saldo insuficiente, no se puede retirar ${montoDeRetiro}$, tu saldo actual es ${saldo}`)

    }
    // de lo contrario, Si el saldo actual al restarle el monto a retirar queda en 0 o mas
    else if((saldo - montoDeRetiro) >= 0){
        // Deduccion de saldo y reasignacion de saldo base
        saldo-= montoDeRetiro; //saldo = saldo - montoDeRetiro

        // Salida en pantalla de resultado de la operacion
        alert(`Retiraste ${montoDeRetiro}$, tu saldo restante es: ${saldo}`)

        // Retorno de la variable de saldo base luego de ser actualizada
        return saldo;

    }
}

// Deposito
function depositoDinero(montoDeDeposito){
    saldo += montoDeDeposito;
    alert(`Deposito exitoso!


    Se añadieron ${montoDeDeposito}$ a tu cuenta
    Tu saldo actual es: ${saldo}`);
    return saldo;
}





// Transferencia
function transferirDinero(){
    // Creamos la lista de cuentas
    let cuentas = [500,100,5000,25000,1,50];
        
    // Pedimos el monto a transferir
    let montoATransferir = +prompt("Ingresa el monto a transferir","Ingresa valor en numero");
    
    // Pedimos la destino
    let cuentaDestino = +prompt("Ingresa la cuenta destino","Ingresa valor en numero");

    switch(cuentaDestino){
        case 1:
            cuentas[0]+= montoATransferir;
            saldo-= montoATransferir;
            alert(`Deposito exitoso
            Se depositaron ${montoATransferir}$
            
            Tu saldo es: ${saldo}
            
            saldo de la cuenta destino es: ${cuentas[0]}`);
            break;

        case 2:
            cuentas[1]+= montoATransferir;
            saldo-= montoATransferir;
            alert(`Deposito exitoso
            Se depositaron ${montoATransferir}$
            
            Tu saldo es: ${saldo}
            
            saldo de la cuenta destino es: ${cuentas[1]}`);
            break;

        case 3:
            cuentas[2]+= montoATransferir;
            saldo-= montoATransferir;
            alert(`Deposito exitoso
            Se depositaron ${montoATransferir}$
            
            Tu saldo es: ${saldo}
            
            saldo de la cuenta destino es: ${cuentas[2]}`);
            break;

        case 4:
            cuentas[3]+= montoATransferir;
            saldo-= montoATransferir;
            alert(`Deposito exitoso
            Se depositaron ${montoATransferir}$
            
            Tu saldo es: ${saldo}
            
            saldo de la cuenta destino es: ${cuentas[3]}`);
            break;

        case 5:
            cuentas[4]+= montoATransferir;
            saldo-= montoATransferir;
            alert(`Deposito exitoso
            Se depositaron ${montoATransferir}$
            
            Tu saldo es: ${saldo}
            
            saldo de la cuenta destino es: ${cuentas[4]}`);
            break;

        case 6:
            cuentas[5]+= montoATransferir;
            saldo-= montoATransferir;
            alert(`Deposito exitoso
            Se depositaron ${montoATransferir}$
            
            Tu saldo es: ${saldo}
            
            saldo de la cuenta destino es: ${cuentas[5]}`);
            break;

        default:
            alert("La cuenta no existe");
    }
}








