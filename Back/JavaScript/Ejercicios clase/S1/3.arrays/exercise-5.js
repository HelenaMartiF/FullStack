
/* Elimina el último elemento del array y muestra el primero y el último por consola. */

const RickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", 
"Lapiz Lopez"];

RickAndMortyCharacters.splice(5, 1);

console.log(RickAndMortyCharacters.pop())
console.log(RickAndMortyCharacters.shift())

// He intentado concatenar las dos (no se como se llaman, básicamente el .pop y el .shift) dentro del mismo console.log pero no lo he conseguido. xd