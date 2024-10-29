// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.


const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const dadyList = document.createElement('ul');       // Creamos la lista padre

for (let elements of countries){
       
    const li = document.createElement('li');         // Creamos la lista hijo
    li.textContent = elements;                       // Asignamos los valores del array al hijo
    dadyList.appendChild(li);                        // VINCULAMOS LOS ELEMENTOS HIJOS A LA LISTA PADRE
    let body = document.body;                       // Localizamos donde queremos añadir los elementos
    body.appendChild(dadyList);                     // VINCULAMOS LA LISTA PADRE CON LOS HIJOS DONDE QUEREMOS EN DOCUMENT
}



