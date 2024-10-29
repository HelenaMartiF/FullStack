// Usa un forin para imprimir por consola los datos del alienigena.

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
};

/* console.groupCollapsed('for-in'); */

console.log("Datos del alienigena:")
for (let datos in alien){
    console.log(alien[datos]);
}
    
