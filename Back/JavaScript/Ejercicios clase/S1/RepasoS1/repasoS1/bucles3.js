/**
Crear la siguiente figura:
*********** 11
 *********   9
  *******    7                                                                6 niveles
   *****     5                                                                espacios 0 1 2 3 4 5             espacio = nivel + 1 
    ***      3                                                                asterisk 11 9 7 5 3 1
     *       1
*/



// SOLUCION DEL PROFE

for(let i = 1; i <= 2 * filas - 1; i++) {
  let espacios = ' '.repeat(Math.abs(filas - i));
  let asteriscos = '*'.repeat(filas - Math.abs(filas - i));
  console.log(espacios + asteriscos);
}

 
