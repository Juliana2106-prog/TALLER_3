//EJERCICIO 1
let n = Number(prompt("Ingrese la cantidad de los primeros N numeros naturales que quiera sumar: "));
let suma = 0;
document.write("EJERCICIO 1" + "<br>")
for (let i = 1; i <= n; i++) {
    suma += i;
}

document.write("La suma de los primeros " + n + " números naturales es: " + suma + "<br>");

//EJERCICIO 2
let nombre = prompt("Ingrese el nombre del estudiante:");
let cantidadNotas = Number(prompt("Ingrese la cantidad de notas:"));
let sumaNotas = 0;
let j = 1;

document.write("<br>" + "EJERCICIO 2" + "<br>")
while (j <= cantidadNotas) {
    let nota = Number(prompt("Ingrese la nota " + j + ":"));
    sumaNotas += nota;
    j++;
}
let promedio = sumaNotas / cantidadNotas;
if (promedio >= 3) {
    document.write(nombre + " aprueba con un promedio de: " + promedio + "<br>");
} else {
    document.write(nombre + " reprueba con un promedio de: " + promedio + "<br>");
}
document.write("<br>");

//EJERCICIO 3
let sumaNumeros = 0;
let contadorNumeros = 0;
let entrada;

document.write("<br>" + "EJERCICIO 3" + "<br>")
do {
    entrada = prompt("Ingrese un número (o escriba 'FIN' para terminar):");
    if (entrada.toUpperCase() !== "FIN") {
        sumaNumeros += Number(entrada);
        contadorNumeros++;
    }
} while (entrada.toUpperCase() !== "FIN");

document.write("Cantidad de números ingresados: " + contadorNumeros + "<br>");
document.write("Suma de los números: " + sumaNumeros + "<br>");


//EJERCICIO 4
let numero = Number(prompt("Ingrese un número para la tabla de multiplicar:"));
let k = 1;
document.write("<br>" + "EJERCICIO 4" + "<br>")
while (k <= 30) {
    document.write("<br>" + numero + " x " + k + " = " + (numero * k)+ "<br>");
    k++;
}
document.write("<br>");

//EJERCICIO 5
let numeroDescendente = Number(prompt("Ingrese un número para la tabla de multiplicar descendente:"));
let l = 10;
document.write("<br>" + "EJERCICIO 5" + "<br>")
while (l >= 1) {
    document.write("<br>" + numeroDescendente + " x " + l + " = " + (numeroDescendente * l)+ "<br>");
    l--;
}
document.write("<br>");

//punto 12 
let filas = Number(prompt("Digite filas de la tabla"))
let columnas = Number(prompt("Digite columnas de las tablas"))
let numeros = 1;
document.write("<table border='1'>");
for ( let x = 1; x <= filas; x++){
    document.write("<tr>");
    for(let y = 1; y <= columnas; y++){
        document.write("<td>");
        document.write(numeros++);
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

