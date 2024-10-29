/* 
Usa el siguiente código como base y crea 3 funciones llamadas father, sum, subtract. La función sum sumara dos parametros a y b y los retornará. La función substract hará lo mismo pero restando y la función father recibirá como parámetros a, b y una función callback (sum o substract).

La función father deberá ejecutar la función que reciba como callback y añadir el numero que retorne la función al array numersList.

Ejecuta varias veces la función father y haz finalmente un console.log de numbersList
 */


const numbersList = [];

function sum(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function father(a, b, callback){       // le especificamos en los parámetros que es una funcion de callback
    const result = callback(a, b);     // almacenamos el return de la funcion que es llamada a través del callback en una variable
    numbersList.push(result);          // empujamos esos datos dentro del array principal
}

father(10, 3, sum);

father(15, 5, substract);

father(20, 5, sum);

console.log (numbersList);





