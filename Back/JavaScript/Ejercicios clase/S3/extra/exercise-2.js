/* Basandote en el html siguiente, elimina el elemento que tenga la clase .fn-remove-me.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <p class="fn-remove-me">Bye bye</p>
</body>

</html>
``` */


let whereRemove = document.body;                               // Le indicamos de donde queremos eliminar el elemento
let toRemove = document.querySelectorAll('.fn-remove-me');     // Selecionamos los elementos que queremos eliminar
whereRemove.remove(toRemove);                                  // Eliminamos

