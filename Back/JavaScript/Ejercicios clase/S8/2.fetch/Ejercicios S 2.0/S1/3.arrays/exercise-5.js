/* Elimina el último elemento del array y muestra el primero y el último por consola. */

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.pop(-1);

console.log(rickAndMortyCharacters[0], rickAndMortyCharacters.at(-1));