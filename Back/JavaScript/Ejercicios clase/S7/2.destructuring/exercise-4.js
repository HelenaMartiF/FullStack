// En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.



const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const {name, itv} = car;

const [dosQuince, dosOnce, dosDos] = car.itv;



console.log(`Estimados, \n
hemos recivido su reclamación referente al vehículo ${name}.\nLe confirmamos que efectivamente usted pasó la ITV en los años ${dosQuince}, ${dosOnce}, ${dosDos}, sin embargo no dentro del plazo permitido por el estado. \n
Así que, a pagar. \n
Atentamente, 
Gobierno de España.\n`)


