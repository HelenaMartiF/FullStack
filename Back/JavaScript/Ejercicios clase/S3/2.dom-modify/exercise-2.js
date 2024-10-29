/* Inserta dinamicamente en un html un div que contenga una p con javascript. */

const div = document.createElement('div');
document.body.append(div);
const parrafo = document.createElement('p');
div.appendChild(parrafo);


console.log(div);