
/* Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript. */

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

for(let i in products){                                     // Metemos un detective a mirar los productos de nuestra tienda
    if(products[i].includes("Camiseta")){                   // Le pedimos que busque los productos que sean camisetas
        console.log(products[i]);                           // Y que nos las traiga a la tienda para mostrarlas
    }
}

