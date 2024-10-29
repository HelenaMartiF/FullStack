/* Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'. */

const parrafo = document.createElement('p');
document.body.append(parrafo);

parrafo.textContent = 'Soy dinámico';

console.log(parrafo)