"use strict"

//********************************
//*** Métodos búsqueda | Parte 1

var mensaje = "Estoy aprendiendo JavaScript y estoy aprendiendo mucho";

var resultado;

// indexOf
// resultado = mensaje.indexOf("aprendiendo");
//busca la posicion de la primer ocurrencia de lo que estamos buscando


// lastIndexOf
//resultado = mensaje.lastIndexOf("aprendiendo");
//busca la posicion de la ultima ocurrencia de la palabra buscada


// search:
//resultado = mensaje.search("aprendiendo");
//similar a indexOf, busca la primera ocurrencia


// search | Expresión regular
resultado = mensaje.search(/ja/i);
//busca la expresion. la i es in case sensitive para mayusculas y minusculas


//Cualquiera de estas expresiones si dan -1 es porque no encontraron nada


console.log(resultado);