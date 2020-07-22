"use strict"

//********************************
//*** Métodos de generación, reemplazo y separación

var mensaje = "      Estoy aprendiendo JavaScript        ";

var resultado;

// repeat
// resultado = mensaje.repeat(200);

// replace
//resultado = mensaje.replace("JavaScript", "a programar");
//devuelve el resultado modificado pero no afecta el valor orgininal


// slice
// resultado = mensaje.slice(6);
// resultado = mensaje.slice(6, 11)


// split
// resultado = mensaje.split(" ");
/*transforma la cadena de texto en un array
dividido por el caracter que le enviemos*/

// trim
resultado = mensaje.trim();
//elimina los espacios en blanco que estan antes o despues de la cadena

console.log(resultado);
