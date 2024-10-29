/* Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.
*/

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement('ul');          // Creamos elemento padre

for ( let app of apps ){
    const li = document.createElement('li');      // Creamos elementos hijos
    li.textContent = app;                         // Asignamos el valor del array al elemento hijo
    ul.appendChild(li);                           // Vinculamos elementos hijo a elemento padre
    let dondeVa = document.body;                  // Localizamos donde queremos añadir el nodo
    dondeVa.appendChild(ul);                      // Vinculamos el nodo
}

console.log(ul)

