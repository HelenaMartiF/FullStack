/**
Crear la siguiente figura:
    *    4 1
   **    3 2
  ***    2 3
 ****    1 4
*****    5 0  
 ****    4 1
  ***    3 2
   **    2 3
    *    1 4
*/

let asterisk = '*';

for(let i = 1; i <= 5; i++){
    console.log(asterisk.repeat(i));   
}

for(let i = 4; i >=1; i--){
    console.log(asterisk.repeat(i));
}

