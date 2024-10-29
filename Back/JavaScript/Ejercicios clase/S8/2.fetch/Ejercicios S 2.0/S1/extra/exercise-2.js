/* Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante. */

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [
    {name: "Salad", isVegan: true},
    {name: "Salmon", isVegan: false}, 
    {name: "Tofu", isVegan: true}, 
    {name: "Burger", isVegan: false}, 
    {name: "Rice", isVegan: true}, 
    {name: "Pasta", isVegan: true}
];

for(let i = 0; i < foodSchedule.length; i++){
    if(foodSchedule[i].isVegan === false){
        foodSchedule[i].name = fruits[Math.floor(Math.random() * fruits.length)]; // utiliza el índice obtenido para acceder a un elemento aleatorio del array fruits. Para acceder a un elemento espeífico en un array, se utiliza la notación de corchetes [] con el índice del elemento que se desea obtener, en este caso el índice queremos que sea random, por eso ponemos math.floor que redondea hacia abajo el número decimal obenido por math.random multiplicado por la longitud de fruits. 
        foodSchedule[i].isVegan = true;
    }
}

console.log(foodSchedule);

//--------------------------------------------------------------------------------------------------------------------------------

let contador = 0;                                                            //Solved in clas

for(let i =0; i < foodSchedule.length; i++){
    if(!foodSchedule[i].isVegan){
        foodSchedule[i].name = fruits[contador];
        contador++;
        foodSchedule[i].isVegan = true;
    }

}
