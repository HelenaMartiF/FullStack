/**
Crear la siguiente figura:
    **             2
   ****            4
  ******           6
 ********          8
**********         10
 ********          8
  ******           6
   ****            4
    **             2
*/

let numRows = 5;

// Mitad superior de la figura //
for(let i = 1; i <= numRows; i++); {
    let row = '';
    for(let j = 1; j <= numRows - i; j++){
        row += ' ';
    }
    for (let k = 1; k <= 2 * i; k++) {
        row += '*';
    }
    console.log(row);
}

// Mitad inferior de la figura //
for(let i = numRows - 1; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= numRows - i; j++){
        row += ' ';
    }
    for (let k=1; k <= 2 * i; k++) {
        row += '*';
    }
    console.log(row);
}