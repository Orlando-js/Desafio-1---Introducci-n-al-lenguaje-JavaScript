var nombre = prompt("Hola, favor ingresa tu nombre");
var temperatura = prompt(`${nombre} ingresa la temperatura en grados Celcius`)
var kelvin = (parseFloat(temperatura) + 273.15);
var fahrenheit = (kelvin - 255.98) * 9/5 + 32

document.write(` ${temperatura}°C equivale a ${kelvin}°K <br>`)
document.write(` ${temperatura}°C equivale a ${fahrenheit}°F`)