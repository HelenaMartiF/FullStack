
/* Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, igual o mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola. */



const movies = [
    {name: "Your Name", durationInMinutes: 130},
    {name: "Pesadilla antes de navidad", durationInMinutes: 225}, 
    {name: "Origen", durationInMinutes: 165}, 
    {name: "El señor de los anillos", durationInMinutes: 967}, 
    {name: "Solo en casa", durationInMinutes: 214}, 
    {name: "El jardin de las palabras", durationInMinutes: 40}];

let shortFilm = [];
let mediumFilm = [];
let longFilm = [];

for( i = 0; i<movies.length; i++){

    if (movies[i].durationInMinutes <= 99){
        shortFilm.push(movies[i].name);
    }else if (movies[i].durationInMinutes >= 200){
        longFilm.push(movies[i].name); 
    }else{
        mediumFilm.push(movies[i].name);
    }
}

console.log("Short films: " + shortFilm.join(", "));
console.log("Medium films: " + mediumFilm.join(", "));
console.log("Long films: " + longFilm.join(", "));
