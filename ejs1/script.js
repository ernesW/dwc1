/*  Ejercicio1 --------------------------------------

var names = "ernesto";
var surname = "martin";
var age = 20;
var anio = 2004;

function mostrarAlerta(){
    alert('\'hola buenas\'');
};

function mostrarInfo(){
    alert(`${names}\n${surname}`);
};

function mostrarEdad(){
    alert(`La edad es sumada es: ${age + anio}`)
}
*/

// Ejercicio2 ------------------------------------

// var operacion1 = (10 == 10)

// var operacion2 = (10 === 10)

// var operacion3 = (10 === 10.0)

// var operacion4 = ("Laura" == "laura")

// var operacion5 = ("Laura" > "laura")

// var operacion6 = ("Laura" < "laura")

// var operacion7 = ("123" == 123)

// var operacion8 = ("123" === 123)

// var operacion9 = (parseInt("123") === 123)

// alert("La operación 10 == 10 es " + operacion1);
// alert("La operación 10 === 10 es " + operacion2);
// alert("La operación 10 === 10.0 es " + operacion3);
// alert("La operación 'Laura' == 'laura' es " + operacion4);
// alert("La operación 'Laura' > 'laura' es " + operacion5);
// alert("La operación 'Laura' < 'laura' es " + operacion6);
// alert("La operación '123' == 123 es " + operacion7);
// alert("La operación '123' === 123 es " + operacion8);
// alert("La operación parseInt('123') === 123 es " + operacion9);

// Ejercicio 3 -------------------------------------------

// var edad = 0;

// var edad = prompt ("Dime una edad");

// if(edad >= 0 && edad <= 12 ){
//     alert("Niño")
// }

// else if(edad >= 13 && edad <= 26 ){
//     alert("Joven")
// }

// else if(edad >= 26 && edad <= 60 ){
//     alert("Adulto")
// }

// else if(edad >= 60  ){
//     alert("Jubilado")
// }

// else{
//     alert("numero no valido")
// }

//Ejercicio 4 -------------------------------------

// var num = prompt ("Dime un numero");

// if(num % 2 == 0){
//     alert("el numero "  + num +  " es par")
// }
// else if(num % 2 !== 0){
//     alert("el numero "  + num +  " es impar")
// };

// Ejercicio 5 ----------------------------------------------

// var nota = prompt ("Dime tu nota");

// if(nota < 5 ){
//     alert("Suspenso")
// }

// else if(nota >= 5 && nota < 7  ){
//     alert("Aprobado")
// }

// else if(nota >= 7 && nota < 9  ){
//     alert("Notable")
// }

// else if(nota >= 9 && nota < 10 ){
//     alert("Sobresaliente")
// }

// else{
//     alert("numero no valido")
// };

// Ejercicio 6 -------------------------------------------------

// Inicializamos las horas de inicio y fin
// var horaInicio = 9; // 9 AM
// var horaFin = 21; // 9 PM
// var esHoraPunto = true; // Variable booleana para verificar si es hora en punto o media

// Recorremos desde la hora de inicio hasta la hora de fin
// for (var hora = horaInicio; hora <= horaFin; hora++) {
//   Generamos las horas en punto y media
//   document.write(hora + ":" + (esHoraPunto ? "00" : "30") + "<br>");
//   Alternamos la variable booleana
//   esHoraPunto = !esHoraPunto; // Cambiamos el valor entre true y false

//   Si es media hora y estamos en la última hora, mostramos 21:30 y salimos del bucle
//   if (!esHoraPunto && hora === horaFin) {
//     document.write(hora + ":30" + "<br>"); // Muestra 21:30
//     break; // Salimos para no exceder las 21:30
//   }
// }

// Ejercicio 7 -------------------------------------------------

// // Inicializamos las horas de inicio y fin
// var horaInicio = 9; // 9 AM
// var horaFin = 21; // 9 PM


// // Recorremos desde la hora de inicio hasta la hora de fin
// for (var hora = horaInicio; hora <= horaFin; hora++) {
//     for(var minutos = 0; minutos < 60; minutos += 5){
//         if(hora == horaFin && minutos > 0){
//             break;
//         }
//         document.write(hora + ":" + (minutos < 10 ? "0" + minutos : minutos) + "<br>"); 

//         //  condición ? valorSiVerdadero : valorSiFalso

//     }
// }