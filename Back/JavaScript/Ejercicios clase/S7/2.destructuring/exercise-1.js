//En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring e imprimelas por consola. Cuidado, no hace falta hacer destructuring del array, solo del objeto.


const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const {title, gender, year} = game;

console.log(`Este és el título: ${title}`);
console.log(`Podemos referenciarlo a tres géneros diferentes: ${gender}`);
console.log(`Salió el año: ${year}`);