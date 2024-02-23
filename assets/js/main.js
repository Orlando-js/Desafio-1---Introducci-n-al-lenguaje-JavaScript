//Capturo el valor del cliente
var nombre = prompt("¿Cuál es tu nombre?");
var num1 = prompt(`${nombre}, Favor ingresa un numero mayor que cero`);
var num2 = prompt(`Ahora ${nombre}, ingresa un segundo numero mayor que cero`);

//Creo
var suma = parseInt(num1) + parseInt(num2);
var resta = parseInt(num1) - parseInt(num2);
var multiplicacion = parseFloat(num1)*parseInt(num2);
var division = parseInt(num1)/parseFloat(num2); 
var modulo = parseInt(num1) % parseInt (num2);

//Muestro los resultados en pantalla
document.write(`${nombre} te presento los resultado segun los numeros ingresados <br><br>`)
document.write(`La suma entre ${num1} + ${num2} es: ${suma} <br>`)
document.write(`La resta entre ${num1} - ${num2} es: ${resta} <br>`);
document.write(`La multiplicación entre ${num1} * ${num2} "es: ${multiplicacion} <br>`);
document.write(`La división entre ${num1} / ${num2} es: ${division} <br>`);
document.write(`El modulo entre ${num1} % ${num2} es: ${modulo}` );