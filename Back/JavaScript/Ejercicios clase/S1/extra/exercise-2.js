/* Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante. */


const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [
    {name: "Salad", isVegan: true},
    {name: "Salmon", isVegan: false}, //----------------
    {name: "Tofu", isVegan: true}, 
    {name: "Burger", isVegan: false}, //-----------------
    {name: "Rice", isVegan: true}, 
    {name: "Pasta", isVegan: true}];

    for(let i = 0; i < foodSchedule.length; i++){                             //My solution

        if (foodSchedule[i].isVegan != true){
            let random = Math.floor(Math.random()*fruits.length);
            foodSchedule[i].name = fruits[random];
            foodSchedule[i].isVegan = true;
        }

        console.log(foodSchedule[i])
    }


let contador = 0;                                                            //Solved in clas

for(let i =0; i < foodSchedule.length; i++){
    if(!foodSchedule[i].isVegan){
        foodSchedule[i].name = fruits[contador];
        contador++;
        foodSchedule[i].isVegan = true;
    }

}

console.log(foodSchedule);                                                   //Another way

for( let i in foodSchedule) {
    let food = foodSchedule[i];
    let foodVegan = food.isVegan;

    if(!foodVegan) {
        food.name = fruits.pop();
        food.isVegan = true;
    }
}

console.log(fruits);
console.log(foodSchedule);

    