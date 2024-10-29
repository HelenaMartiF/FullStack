
/* Usa un bucle para recorrer el array de peliculas (`movies`) y añade al array `goodProducts` los que tengan más de 20 ventas (`sellCount`) y al array `badProducts` los que tengan menos.
 */


const goodProducts = [];
const badProducts = [];
const movies = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}];

for (i = 0; i < movies.length; i++){

    if(movies[i].sellCount <= 19){
        badProducts.push(movies[i].name);
    }else{
        goodProducts.push(movies[i].name)

    }
}
console.log("Good products: " + goodProducts.join(", "));
console.log("Bad products: " + badProducts.join(", "));
