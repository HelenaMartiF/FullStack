//En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función e imprimiendolo por consola.


const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};


const {name, race} = animalFunction();
console.log(`¡Bienvenidos al Zoo de Manresa! El animal que teneis delante tiene un nombre tremendamente original, ¿quereis saberlo? Se llama: ${name}!! Lo mejorcito de todo biene ahora, no os voy a pedir que adivinéis que raza es porque es realmente complicado de saber, así que os lo voy a decir directamente. La raza de este animal és: ${race}! Unexpected ¿verdad?`);