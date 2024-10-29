/* Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <div></div>
   <div></div>
</body>
</html>``` */


//Segundo div versión 1

const p = document.createElement ('p');
p.textContent = 'Voy en medio!';

const divs = document.querySelectorAll('div');
const div = divs[1];

div.insertBefore(p, div);

//Segundo div versión 2

/* const p = document.createElement ('p');
p.textContent = 'Voy en medio!';

const divs = document.querySelectorAll('div:nth-child(2)');


div.insertBefore(p, div); */