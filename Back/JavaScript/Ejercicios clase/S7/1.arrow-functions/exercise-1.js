/* Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre por consola la suma de los dos parametros. 

- Ejecuta esta función sin pasar ningún parametro
- Ejecuta esta función pasando un solo parametro
- Ejecuta esta función pasando dos parametros
 */

let a = 10;
let b = 5;

const arrowFunction = (a = 10, b = 5) => {
    console.log(a + b);
}

//Ejecuta esta función sin pasar ningún parametro

arrowFunction();

//Ejecuta esta función pasando un solo parametro

arrowFunction(15);

//Ejecuta esta función pasando dos parametros

arrowFunction(15, 20);

