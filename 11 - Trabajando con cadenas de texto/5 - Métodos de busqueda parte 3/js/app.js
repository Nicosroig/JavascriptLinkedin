"use strict"

//********************************
//*** Métodos búsqueda | Parte 3

var mensaje = "Estoy aprendiendo JavaScript";
var resultado;

// TODOS ESTOS METODOS SON CASE SENSITIVE //


// startsWith
// resultado = mensaje.startsWith("es");
//Refiere a si la cadena de texto comienza con...

// var textoEn =  mensaje.indexOf("JavaScript")
// resultado = mensaje.startsWith("Ja", textoEn);
//starwith comienza a buscar desde la posicion almacenada en textoEn


// endsWith
// resultado = mensaje.endsWith("JavaScript");
//Refiere a si la cadena de texto termina con...


// includes
resultado = mensaje.includes("Estoy", 6);
/*devuelve boolenao y se puede poner
a partir de que caracter comenzar la busqueda,
en este caso 6*/


console.log(resultado);