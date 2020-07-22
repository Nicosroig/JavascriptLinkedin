"use strict"

//********************************
//*** Plantillas y literales


var lenguaje = 'JavaScript';

var lenguaje2 = 'HTML';

var mensaje = `Me gusta ${lenguaje} y su integración con ${lenguaje2}`;
/*Se usan comillas especiales, ` que permiten armar plantillas*/


//console.log(mensaje);


//---- Mensaje multilinea
var mensajeMultilinea = `
    Hola mundo,
	estoy aprendiendo
	${lenguaje} y me gusta
	como se integra con HTML y CSS`;
//Respeta la multilinea


console.log(mensajeMultilinea);