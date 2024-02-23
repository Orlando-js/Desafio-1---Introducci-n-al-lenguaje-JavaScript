alert("Deberas hacer ingreso de 5 numeros");

var num1 = parseInt(prompt("Ingresa el primer valor"));
var num2 = parseInt(prompt("Ingresa el segundo valor"));
var num3 = parseInt(prompt("Ingresa el tecer valor"));
var num4 = parseInt(prompt("Ingresa el cuarto valor"));
var num5 = parseInt(prompt("Ingresa el quinto valor"));

var suma = (num1 + num2 + num3 + num4 + num5)
var promedio = (suma / 5)

document.write(` te presento los resultado segun los numeros ingresados <br><br>`);

document.write(`la suma de todos los valores corresponden a: ${suma} <br>`);
document.write(`la suma del promedio corresponden a: ${promedio} <br>`);

