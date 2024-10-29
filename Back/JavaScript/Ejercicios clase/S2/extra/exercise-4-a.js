/* Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

As long as I am not capable of unserstanding what this asks me to do, I asked ChatGPT to kindly explain to me what does the exercise expect from me. So she said:
1. Define a function that accepts both parameters: array(of texts) and text(to find? what?)
2. Use a loop to iterate over the array. 
3. In each iteration, we need to compare the current element of the array with the text (conditional??)
4. If no match is found, return -1 to indicate that the value was not found

So for this above, I understand that what we need to do is ask JV to compare and tell us the index POSITION of the text we ask him to find inside the array text.
So, we can assign 'Caracol' to text and JV is gonna tell us 'Caracol' is in position 0 inside the array text. Why are the words so similar?

Let's do something. ArrayText is gonna be --------- textWhereWeSearch
Text is gonna be ----------------- findIt

                            
Haz varios ejemplos y compruebalos.

Sugerencia de función: */


let textWhereWeSearch = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

let findIt = 'Caracol';

function findArrayIndex(textWhereWeSearch, findIt) {        // We create a function and tell her where to iterate
    for (let i = 0; i<textWhereWeSearch.length; i++){       // We create a loop and tell him to get inside textWhereWeSearch and search in     ******* BE CAREFULL OF YOUR USUAL TYPO WITH LENGTH!!!!!!!! ****
        if(textWhereWeSearch[i] === findIt){                // We create a conditional that tells JV that if the value in findIt is found inside i (the lenght of textWhereWeSearch)
            return i;                                       // return i, so return the position of that value
        }                                                   // if not found                                       
    }
    return -1;                                              // return -1 
}

let search = findArrayIndex(textWhereWeSearch, findIt);     // We create the variable TO CALL and ACTIVATE the function and keep its result! 
                                                            // If we don't call the function it won't be executed!!!!!!!! Therefore we won't have any result! 
if (search !==-1) {
    console.log(`La posición de ${findIt} en el array es ${search}`);
}else{
    console.log(`${findIt} no se encontró en el array.`)
}



