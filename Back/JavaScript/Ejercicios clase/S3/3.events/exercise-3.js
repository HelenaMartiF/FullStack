/* Basandote en el siguiente html, añade un evento 'input' que ejecute un console.log con el valor del input.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  <input type="text"/>
</body>
</html>
``` */

function inputFunction (input){
    console.log(input);
}

document.querySelector('[type="text"]').addEventListener('input', inputFunction);

// oooh, this was tricky! As it is an input event and input is a KEYBORD event, if you don't type any letter or number inside the input shows NOTHING!