/* Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
resultante.

Sugerencia de array: */



// 1. Create a function called swap
// 2. swap must receive an array and 2 parameters both beeing indices of the array.
// 3. The function must swap the position of the indices values we provided with parameter.
// 4. Return the final array

let players = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];
let swap1 = [0];
let swap2 = [2];

function swap(players, swap1, swap2){
    if (swap1 >= 0 && swap1 < players.length && swap2 >= 0 && swap2 < players.length) {
        let temporal = players[swap1];               // We keep the value of swap1 inside the temporal varialbe
        players[swap1] = players[swap2];             // We then force the swap1 to get the indice of swap2
        players[swap2] = temporal;                   // Then, we force swap2 to become swap1 as it's the value kept inside temporal variable if this makes any sense.

        // Short story long, we temporaly place the value in the index of swap1 inside the variable temporal, we then force swap1 to become swap2, as we delated swap1 for swap2 we do have an undefined value 
        // as swap2, this is why we then force swap2 to become the value of termporal which is swap1.
        // Yep, totaly makes sense now.  

        console.log(`La nueva posición del array es: ${players}`)
    }else{
        
        console.log(`El indice introducido no pertenece al array.`)
    }
}

swap(players, swap1, swap2);

