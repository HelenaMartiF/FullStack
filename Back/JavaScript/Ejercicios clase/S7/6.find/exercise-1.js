// Dado el siguiente array, usa .find() para econtrar el número 100.


const numbers = [32, 21, 63, 95, 100, 67, 43];


// This way is okay but there is no interaction with the user, in case we wanted to search a different number using this code qe would need to get into the function and modify it.
// Assigning a new constant to the number we are looking for let us change that number as many times as wished without modifying the function itself. 

const letFindTheNumber = numbers.find((value) => value === 100);

console.log(letFindTheNumber);

// --------------- IVAN SOLUTION -------------

const sercehedNumber = 100;
console.log(numbers.find((number) => number === sercehedNumber));