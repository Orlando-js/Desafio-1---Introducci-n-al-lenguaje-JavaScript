var nombre = prompt("Favor ingresa tu nombre")
var dias = prompt(`${nombre} ingresa una cantidad de dias para calcular a cuantos años,semas y dias equivale`);

var anios = Math.floor(dias / 365)
var semanas = Math.floor((dias - ( anios * 365))/ 7);
var dia = Math.floor (dias - (anios * 365) - (semanas * 7)) ;

document.write(`${nombre} te presento los resultado segun el numeros ingresados <br><br>`)

document.write(`${dias} dias equivalen a ${anios} años <br>`);
document.write(`${dias} dias equivalen a ${semanas} semanas <br>`);
document.write(`${dias} dias equivalen a ${dias} dias <br>`);