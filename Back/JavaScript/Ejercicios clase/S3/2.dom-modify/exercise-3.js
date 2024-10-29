/* Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript. */

const div = document.createElement('div');  // creamos el div


for (i = 0; i <= 5; i++){       // creamos un bucle que recorra hasta 5 contando el 0 como 1
    const parrafo = document.createElement('p');  //creamos la p para que cada vez que haga el ciclo cree una p y sume 1 a i hasta llegar a 5
    div.appendChild(parrafo);  // le decimos donde meter la p
}


console.log(div) //invocamos el div con las p dentro


