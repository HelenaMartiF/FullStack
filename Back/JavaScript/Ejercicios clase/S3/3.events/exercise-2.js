/* Basandote en el siguiente html, añade un evento 'focus' que ejecute un console.log con el valor del input.

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

function focusEvent (focus){   // We create a function with the event we want to be executed
    console.log(focus);       // Reaction we want it to have
}

document.querySelector('[type="text"]').addEventListener('focus', focusEvent);

// We need to call the element at the same place we add the eventlistener. 


