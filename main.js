let hamburguesas = 200;
let papas = 150;
let bebidas = 100;
let suma = 0;
const bebidaGratis = 100;
const personas = parseInt(prompt("ingresa la cantidad de personas que van a comprar")); 
    for(let i = 1; i <= personas; i++){
        const cantHamburguesas = parseInt(prompt("ingresa la cantidad de hamburguesas del cliente N" +i));
        const cantPapas = parseInt(prompt("ingresa la cantidad de papas del cliente N" +i));
        const cantBebidas = parseInt(prompt("ingresa la cantidad de bebidas del cliente N" +i));  
        sumar(cantHamburguesas, cantPapas, cantBebidas);
    }
let pago = parseInt(prompt("Ingrese 1 si el pago es en efectivo o 2 si es con tarjeta"));
if (pago <= 1) {
   alert("el total a pagar es de: " + (suma - bebidaGratis));
} else {
    alert("el total a pagar es de: " + suma);
}
function sumar (cantHamburguesas, cantPapas, cantBebidas) {   
    suma += cantHamburguesas * hamburguesas + cantPapas * papas + cantBebidas * bebidas;      
}