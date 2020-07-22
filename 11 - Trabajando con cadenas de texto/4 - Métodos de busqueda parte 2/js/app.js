"use strict"

//********************************
//*** Métodos búsqueda | Parte 2

var mensaje = "Estoy aprendiendo JavaScript y estoy Aprendiendo mucho";

var resultado;

// match:
// resultado = mensaje.match(/aprendiendo/gi);
//Encuentra la ocurrencia y la g permite encontrarlas todas. La i es case sensitive


// substr:
// resultado = mensaje.substr(6,11);
//retorna el pedazo de texto comprendido entre los caracteres señalados


// substring:
//resultado = mensaje.substring(6,17);
/*retorna el texto comprendido entre el primer caracter y
el segundo, teniendo en cuenta que el segundo comienza a contar
nuevamente desde el inicio de la cadena.*/


// charAt:
 resultado = mensaje.charAt(0);
 //devuelve el caracter seleccionado. Comienza a contar desde 0


console.log(resultado);