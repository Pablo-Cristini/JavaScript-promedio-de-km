alert("Hola! Vamos a calcular los kilometros que caminas ");

const dias = parseInt(prompt("ingresa la cantidad de veces que caminas a la semana"));

let total = 0;

let promedio = 0;

for( let i = 1; i <= dias; i++){
    const kilometros = parseInt(prompt("ingresa la cantidad de kilometros que caminaste el dia " + i));
    total = total + kilometros;
}

promedio = total/dias;

alert("caminaste un promedio de " + promedio + " kilometros");


























// if (dias == 1) {
//     parseInt(prompt("ingresa los kilometros del lunes"));
// } else if (dias == 2) {
//     parseInt(prompt("ingresa los kilometros del lunes"));
//     parseInt(prompt("ingresa los kilometros del martes"));
// }  else if (dias == 3) {
//     parseInt(prompt("ingresa los kilometros del lunes"));
//     parseInt(prompt("ingresa los kilometros del martes"));
//     parseInt(prompt("ingresa los kilometros del miercoles"));
// } else if (dias == 4) {
//     parseInt(prompt("ingresa los kilometros del lunes"));
//     parseInt(prompt("ingresa los kilometros del martes"));
//     parseInt(prompt("ingresa los kilometros del miercoles"));
//     parseInt(prompt("ingresa los kilometros del jueves"));
// } else if (dias == 5) {
//     parseInt(prompt("ingresa los kilometros del lunes"));
//     parseInt(prompt("ingresa los kilometros del martes"));
//     parseInt(prompt("ingresa los kilometros del miercoles"));
//     parseInt(prompt("ingresa los kilometros del jueves"));
//     parseInt(prompt("ingresa los kilometros del viernes"));
// } else if (dias == 6) {
//     parseInt(prompt("ingresa los kilometros del lunes"));
//     parseInt(prompt("ingresa los kilometros del martes"));
//     parseInt(prompt("ingresa los kilometros del miercoles"));
//     parseInt(prompt("ingresa los kilometros del jueves"));
//     parseInt(prompt("ingresa los kilometros del viernes"));
//     parseInt(prompt("ingresa los kilometros del sabado"));
// } else if (dias == 7) {
//     parseInt(prompt("ingresa los kilometros del lunes"));
//     parseInt(prompt("ingresa los kilometros del martes"));
//     parseInt(prompt("ingresa los kilometros del miercoles"));
//     parseInt(prompt("ingresa los kilometros del jueves"));
//     parseInt(prompt("ingresa los kilometros del viernes"));
//     parseInt(prompt("ingresa los kilometros del sabado"));
//     parseInt(prompt("ingresa los kilometros del domingo"));
// } 







// let nombreApellido = prompt("ingresa tu nombre y apellido");








