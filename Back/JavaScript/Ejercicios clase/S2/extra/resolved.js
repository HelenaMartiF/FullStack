/PARTE 1 (MEDIA GLOBAL)

let totalVolume = 0;
let numberOfSounds = 0;


for (let user of users){      //recorremos el array y sacamos los nombres (name) . LO HACEMOS CON OF ES ITERAR CON CADA UNO DE LOS VALORES DEL ARRAY
    const userFavoritesSounds = user.favoritesSounds;  // creamos una constante y le decimos que es igual a user.favoritesSounds. CON FOR IN LO QUE COGEMOS ES CADA UNA DE LAS CLAVES DE ESTE OBJETO

    for(let key in userFavoritesSounds){ //for in - sirve para recorrer calves (waves, shower, train, firecamp)
    const favouriteSound =  userFavoritesSounds[key]; // con esto tenemos format, volume

    totalVolume += favouriteSound.volume; // aqui hemos calculado el total del volumen / es lo mismo - totalVolume = totalVolume + favouriteSound.volume
        numberOfSounds++; // vamos a calcular el numero de sonidos - cada vez que sumemos un sonido al volumen total sumamos 1 sonido al numero de sonidos , asi contamos el numero de sonidos que tenemos

      console.log(key, userFavoritesSounds[key]); / //para acceder con variables hay que poner los []

    }

}

console.log('La media de volumen es: ', totalVolume / numberOfSounds); // con esto sacamos la media de los sonidos
/ 
console.log(favouriteSound.volume);   */  // (ESTO ES RECORRER ARRAY Y ACCEDER A UN ELEMENTO)
/**/


//PARTE 2 (MEDIAS PARCIALES)

let totalMeans = 0;

for (let user of users){
    const userFavoritesSounds = user.favoritesSounds; 
    let userTotalVolume = 0;
    let userSoundsCount= 0;

    for(let key in userFavoritesSounds){  // aqui sumamos los numeros de cada usuario de forma individual
    const favouriteSound =  userFavoritesSounds[key]; 

        userTotalVolume += favouriteSound.volume;
        userSoundsCount++     // es el conteo que tiene cada uno de los usuarios
    }
    const userMean = (userTotalVolume, userFavoritesSounds.length) // userFavoritesSounds  son los totales de elementos que divide el total de la suma de sonidos por usuario

    console.log(la media del usuario ${user.name} es ${userMan});

    totalMeans += userMean;
}

console.log(La media es ${totalmeans / users.length}); // con esto sacamos la media total en conjunto