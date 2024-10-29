/* Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada 
`removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) 
llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de 
javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente. */

// ALRIGHT.
// So we need to create a second function, that takes the result of findArrayIndex and removes that value of the array with .split()
// Then we need to print the array without that value, so we need to keep that array in a new constant? Does .split() already return an array??

// 1. create the new function removeItem
// It has to iterate with the result of the first function which is saved in search constant?? Do we need to use that constant? 
// 2. Tell the new function to remove the value located in the index kept in search. .split()
// 3. Show the modified array in console


let textWhereWeSearch = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

let findIt = 'Piña' 

function findArrayIndex(textWhereWeSearch, findIt) {        // We create a function and tell her where to iterate
    for (let i = 0; i<textWhereWeSearch.length; i++){       // We create a loop and tell him to get inside textWhereWeSearch and search in     ******* BE CAREFULL OF YOUR USUAL TYPO WITH LENGTH!!!!!!!! ****
        if(textWhereWeSearch[i] === findIt){                // We create a conditional that tells JV that if the value in findIt is found inside i (the lenght of textWhereWeSearch)
            return i;                                       // return i, so return the position of that value
        }                                                   // if not found                                       
    }
    return -1;                                              // return -1 
}

// Using the function findArrayIndex, create a new function called removeItem that receives the return of findArrayIndex
// Takes that return and uses it to remove the word located.

// ***************************** I DON'T UNDERSTAND WHY DO WE NEED TO PUT THE SAME PARAMETERS IN THE SECOND FUNCTION WHAT ALL IT NEEDS IS THE RESULT OF THE FIRST ONE *************************************
// FIRST FUNCTION IS ONLY BEEN CREATED! IT HAS NOT BEEN ACTIVATED!!! so we can't ask the second function to work with a result that does not exist due to not beeing called yet.
// as long as the first function hasn't been activated, the second one needs to know which with parameters needs to work, so this is why we need to give it the same parameters than the first one. 


function removeItem(textWhereWeSearch, findIt) {            // We create the new function telling it where to take the information from 'cause findArrayIndex hasn't been activated yet so 
    let remove = findArrayIndex(textWhereWeSearch, findIt); // We invoque the first function so it can give the value of the word in findIt for removeItem to iterate with it

    if (remove !== -1){                                    // If the result of findArrayIndex is NOT -1 (so it exists) 
        textWhereWeSearch.splice(remove, 1);               // Take the array textWhereWeSearch, delete, the number remove provides and print it 
        console.log(`${findIt} ha sido borrada del array.`);
        console.log(textWhereWeSearch);
    }else{                                                  
        console.log(`${findIt} no se encuentra en el array, por no tanto no ha sido eliminada`); // If not, notify the word wasn't found.
    }
}

let arrayModified = removeItem(textWhereWeSearch, findIt);  // We need to invoque the second function so it can give us the result we ask for.

// ************************************** WE CAN'T PLACE THE CONSOLE.LOG OUTSIDE THE FUNCTION THIS THIME, because the function does not return any data nor result so we can't sort nor create a loop
// to filter the results outside the function. *******************************************************************************************************************************************************


/* console.log(`${findIt} ha sido borrada del array.`);
console.log(textWhereWeSearch); */