// Solicitud de información
alert("Bienvenido a DC gimnasios");
let nombre = prompt("Ingrese su nombre por favor:").toUpperCase();
let ciudad = prompt("Ingrese la ciudad donde quiere asistir a nuestros gimnasios").toUpperCase();
let dias = Number(prompt("Hola " + nombre + ", ingresa cantidad de días (1-6 días) que asistiras al gimnasio:"));
let precio = 10000; // Declaración de precio mensual mínimo

//Funcion para aportar el precio teniendo en cuenta la cantidad de dias
function precios(){
    if(dias >= 7){
        alert(nombre + " la cantidad de días ingresado es erroneo, por favor ingresá un número entre 1 y 6. Muchas gracias");
    }else if((dias <= 6) && (dias > 4)){
        let mensualidad = precio * 1.5;
        alert(nombre + ", tu mensualidad será de $" + mensualidad );
    }else if((dias <= 4)&&(dias >2)){
        let mensualidad = precio * 1.25;
        alert(nombre + ", tu mensualidad será de $" + mensualidad );
    }else if((dias <= 2)&&(dias >=1)){
        alert(nombre + ", tu mensualidad será de $" + precio );
}else{
    alert(nombre + " la cantidad de días ingresado es erroneo, por favor ingresá un número entre 1 y 6. Muchas gracias");
}
}
precios();
// funciones vinculadas a la busqueda de sucursales

function mostrarSucursales(sucursales){
    sucursales.forEach(sucursal => {
        alert(nombre + ', nuestro gimnasio mas cercano en ' + sucursal.localidad + ' esta en ' + sucursal.domicilio + ' y el telefono es ' + sucursal.telefono)
    });
}

function filtrarLocalidad(sucursal){
    if(ciudad){
        return sucursal.localidad === ciudad
    }
    return sucursal;
}

function filtrarSucursal(){
    const resultado = sucursales.filter(filtrarLocalidad);
    if(resultado.length>0){
        mostrarSucursales(resultado)
    }else{
        alert(nombre + ", aun no tenemos sucursales cerca de tu casa.");
    }
}

filtrarSucursal();
filtrarLocalidad(ciudad);




//Ciclo para aportar las direcciones cercanas
// while(ciudad != "ESC"){
//     switch(ciudad){
//         case "LA PLATA":
//            alert(nombre + ", nuestro gimnasio mas cerca esta en calle 50 n°1326);
//             break;
//         case "QUILMES":
//             alert(nombre + ", nuestro gimnasio mas cerca esta en Av. H. Yrigoyen n°526");
//             break;
//         case "CABA":
//             alert(nombre + ", nuestros gimnasio en CABA son: Belgrano (Cramer n°1953), Recoleta (Laprida n°2147), Caballito (Formosa n°259)");
//             break;
//         default:
//             alert(nombre + ", aun no tenemos sucursales cerca de tu casa.");
//             break;
//     }
//     alert("Gracias por confiar en DC gimnasios");
// }

