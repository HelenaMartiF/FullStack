/* Crea una función llamada ``rollDice()`` que reciba como parametro el numero de caras que queramos que tenga el dado 
que deberá silumar el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular 
una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca 
información sobre la función de javascript ``Math.random()`` */

// SO, we need to simulate a dice. 
// Create a function that receives as parameter the NUMBER OF SIDES we want the dice to have.
// The function needs to return a random face of the dice. It's like a virtual dice and we play we it. 

// 1. Create an array with the numbers of faces we want the dice to have
// 2. Create a constant with the numbers of the dice  --------------------------------- WE DO NOT NEED THIS GIVEN THAT WE HAVE TO TELL MATH.CEIL(MATH.RANDOM()) A MAXIMUM NUMBER
// 3. Create a function that iterates with both arrays
// 4. Use the math.random() to make the numbers random. 

let numberOfFaces = 6;
/* let numberOfNumbers = [1, 2, 3, 4, 5, 6]; */  //--------------------------------- WE DO NOT NEED THIS GIVEN THAT WE HAVE TO TELL MATH.CEIL(MATH.RANDOM()) A MAXIMUM NUMBER

function randomDice(numberOfFaces){              // We create a function with only one parameter as we only need the numberOfFaces (not sure why)
    let dice = Math.ceil(Math.random()*numberOfFaces) // We create a variable called dice which give us a random number. .ceil rounds up that number to the nearest whole number which is 1.
    return dice;                             // We set a return here so we can take this result and iterate with it inside the console.log outside the function. 
                              
}

console.log(`El número ganador es : ` + randomDice(numberOfFaces));                       // We need to invoque the function if we pretend it to work girl. DON'T FORGET THIS STEP ANYMORE PLEEEEASE. 

// ********************************** Don't ask why but something stings here, I don't like this code. But so far so good, if it works we are not touching it. *************************************



// -------------------------------------------------- FUN FACT ABOUT MATH. --------------------------------------------------

// Math.random gives a decimal random number between 0 and 1. ALWAYS DECIMAN
// If we want a higher number than 1 we need to multiplicate Math.random for the MAXIMUM number we want to have, because we are multiplying it by 1. 
// If we don't want a decimal number we then need to add Math.ceil || Math.floor
// Math.ceil ALWAYS rounds up that number to the NEAREST WHOLE NUMBER so the minimum number for .ceil is gonna be 1.
// Math.floor does the same but it rounds down that number to the NEAREST HUNDRED so the minimum number for .floor is gonna be 0.

