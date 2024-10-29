/* Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div data-function="printHere"></div>

</body>
</html>
``` */

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let daddyList = document.createElement ('ul');                                  // We create the daddy list

for(let elements of cars){ 
    let childList = document.createElement('li');                                 // We create the child list
    childList.textContent = elements;                                             // We assign the arrow values to each child
    daddyList.appendChild(childList);                                             // We push the child node to the daddy node
    let whereToGo = document.querySelector('[data-function ="printHere"]');       // We locate where we want it be pushed
    whereToGo.appendChild(daddyList);                                               // We push it

} 