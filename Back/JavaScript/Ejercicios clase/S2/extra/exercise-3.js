/* Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a
favorito. Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para
comprender que hay muchas formas de hacer las cosas en javascript. */


const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
/************************************************ SOLO COMO RECORDATORIO --> este fue el ejercicio en el que dijiste que tenía un punto extra (guiño, guiño) *************************************** */



/* -------------------------------------------------------- SOLVED IN CLASS ------------------------------------------------------ */
// ----------------------------------------LONG WAY TO DO IT SO WE CAN UNDERSTAND (literaly) ------------------------------------ //

let timesWaves = 0;
let timesWind = 0;
let timesRain = 0;
let timesFirecamp = 0;
let timesShower = 0;
let timesTrain = 0;

for (let user of users) {                         // hacemos un forof para iterar dentro de los valores de los usuarios,
    const userFavSounds = user.favoriteSounds;    // le declaramos una variable que itere dentro de user.favoriteSounds. 

    for (let key in userFavSounds) {             // ponemos un bucle forin dentro de user.favoriteSouds para que itere dentro de cada clave 
        if (key === 'waves') {                   // le ponemos un contador que sume uno a la variable de timesWaves cada vez que Waves sea selecionado como favorito 
            timesWaves++;                        // le sumamos uno a timesWaves cada vez que encuentre uno
        }else if (key === 'wind') {
            timesWind++;
        }else if (key === 'rain'){
            timesRain++;
        }else if (key === 'firecamp'){
            timesFirecamp++;
        }else if(key === 'shower'){
            timesShower++;
        }else if(key === 'train'){
            timesTrain++;
        }
    }
    console.log(`El sonido Waves se repite ${timesWaves} veces.`);
    console.log(`El sonido Wind se repite ${timesWind} veces.`);
    console.log(`El sonido Rain se repite ${timesRain} veces.`);
    console.log(`El sonido Firecamp se repite ${timesFirecamp} veces.`);
    console.log(`El sonido Shower se repite ${timesShower} veces.`);
    console.log(`El sonido Train se repite ${timesTrain} veces.`);

}

// ------------------------------------------------------- ALES' WAY ----------------------------------------- ¡¡¡¡¡¡¡ PENDING TO SEARCH FOR A WAY TO UNDERSTAND THIS !!!!!!!!!!!!!

function countFavoriteSounds(){                                                // Let's stick to Ivans' way 'cause I don't understand a damn think about this code.
    let soundCounts = {};                                                       

    for (let user of users) {
        for (let sound in users.favoritesSounds) {
            let soundName = sound;

            soundCounts[soundName] = (soundCounts[soundName] || 0) +1;
        }
    }
    return soundCounts;
}

let soundsCounted = countFavoriteSounds();

console.group("¿Cuantas veces se repite cada sonido?");
for (let sound in soundsCounted) {
    console.log(`El sonido ${sound} se repite ${soundsCounted[sound]} veces.`)
}
console.groupEnd();