/* Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <div class="fn-insert-here"></div>
   <div></div>
   <div class="fn-insert-here"></div>
   <div>Aqui no va un p</div>
</body>
</html>``` */



let contenedor = document.querySelectorAll('.fn-insert-here'); // Invocamos a los padres

console.log(contenedor); // We check if the parents are invoqued correctly

for (let i of contenedor){  // We create a loop so it can iterate and do what it needs to do as many times as required
    let nuevoParrafo = document.createElement('p'); // We create the new element
    nuevoParrafo.textContent = "Voy dentro!";   // We add the text inside the new element
    i.appendChild(nuevoParrafo);   // We tell him to add the new element inside I of Contenedor which contains the parents
}

// WE DO NEED TO CREATE THE NEW ELEMENTS INSIDE THE LOOP BECAUSE IF WE DO IT OUTSIDE ONLY ONE ELEMENT EXISTS, AS THIS IS A LOOP WE NEED TO ITERATE IT (IN THIS CASE) TWO TIMES, SO THERE NEED TO BE TWO NEW ELEMENTS.



