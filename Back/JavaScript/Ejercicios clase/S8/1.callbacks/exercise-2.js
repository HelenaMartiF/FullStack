/* 
Usa el siguiente código como base y crea 3 funciones llamadas father, confirmExample, promptExample. 

La función confirmExample recibirá una variable de tipo string (description) que mostrará como titulo de la ventana y retornará el valor del confirm. 

La función promptExample hará lo mismo pero con un prompt. 

La función father recibirá como parámetros description, con el valor del titulo de las ventanas y una función callback (confirmExample o promptExample).

La función father deberá ejecutar la función que reciba como callback y añadir el valor resultado que retorne la función al array userAnwsers.

Ejecuta varias veces la función father y haz finalmente un console.log de userAnwsers */

// As usual I don't understand what this expects me to do, so... chatgpt

//


const userAnwsers = [];

function confirmExample(description){
    return confirm(description);    
}

function promptExample(description){
    return prompt(description);
}

function father(description, callback){
    let respuestas = callback(description);
    userAnwsers.push(respuestas);

}

// guia de confirm y prompt
// const confirmValue = confirm('Soy un texto');
// const propmt = prompt('Soy un texto');

father("¿Has llorado hoy?", confirmExample);
father("¿Cuantos paquetes de kleenex tienes almacenados?", promptExample);
father("¿Crees que son suficientes para lo que queda de bootcamp?", confirmExample);
father("¿Cuantas veces has cambiado la piel de la nariz en este último mes?", promptExample);
father("¿Te has estado aplicando cremita en la nariz pelada?", confirmExample);

console.log("Estas han sido tus respuestas", userAnwsers);