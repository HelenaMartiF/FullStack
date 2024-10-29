
const pokedexList$$ = document.querySelector("#pokedex");
let mappedArray = [];

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
            
const dataFromApi = async () => {
    try {               //Necesitamos sacar los 150 primeros pokemons del api
        
        for(let basurero = 1; basurero <= 150; basurero++){ //hacemos un bucle para que los recorra
            const pokemonOneByOne = await fetch (`https://pokeapi.co/api/v2/pokemon/${basurero}`); // haga la petición de cada uno
            const importedJson = await pokemonOneByOne.json(); // lo transforme en json
            console.log(importedJson) // y lo muestre por consola

            const pokemonMapped = {    // cremamos una constante para que almacene lo que queremos
                id: importedJson.id,
                nombre: importedJson.name,  // le indicamos lo que nos interesa 
                tipo: importedJson.types.map((type) => capitalizeFirstLetter(type.type.name)).join(', '),
                imagen: importedJson.sprites.other["official-artwork"].front_shiny,
                habilidades1: capitalizeFirstLetter(importedJson.abilities[0].ability.name),  
                stat_HP: capitalizeFirstLetter(importedJson.stats[0].stat.name),
                stat_Valor_HP: importedJson.stats[0].base_stat,
                stat_Attack: capitalizeFirstLetter(importedJson.stats[1].stat.name),
                stat_Valor_Attack: importedJson.stats[1].base_stat,
                stat_Defense: capitalizeFirstLetter(importedJson.stats[2].stat.name),
                stat_Valor_Defense: importedJson.stats[2].base_stat,
                stat_SpAttack: capitalizeFirstLetter(importedJson.stats[3].stat.name),
                stat_Valor_SpAttack: importedJson.stats[3].base_stat,
                stat_SpDefense: capitalizeFirstLetter(importedJson.stats[4].stat.name),
                stat_Valor_SpDefense: importedJson.stats[4].base_stat,
                stat_Speed: capitalizeFirstLetter(importedJson.stats[5].stat.name),
                stat_Valor_Speed: importedJson.stats[5].base_stat,
            }
            
            mappedArray.push(pokemonMapped); // pusheamos lo que queremos dentro del array vacío
            /* console.log("Mapped array", mappedArray); */  //este console log nos muestra el proceso de como va metiendo cada objeto dentro del array así que es caótico, es mejor hacerlo al final
            
        }
        
    } catch (error){
        console.log(error)
    }
    
};

const DrawPokemon = (pokemonData) => {
    pokedexList$$.innerHTML = "";
    for (let basureroPintor of pokemonData) {
        let createDiv$$ = document.createElement("div");
        createDiv$$.className = "pokemonCardContainer";
        createDiv$$.innerHTML = `
        <p class="id">${basureroPintor.id}</p>
        <h2 class="nombre">${basureroPintor.nombre}</h2>
        <h4 class ="tipo">${basureroPintor.tipo}</h4>
        <p class= "habilidades">${basureroPintor.habilidades1}</p>
        <img class= "imagen" src="${basureroPintor.imagen}" alt="${basureroPintor.nombre}">
        <p class= "statsName"> ${basureroPintor.stat_HP}: ${basureroPintor.stat_Valor_HP}</p>
        <p class= "statsName"> ${basureroPintor.stat_Attack}: ${basureroPintor.stat_Valor_Attack}</p>
        <p class= "statsName"> ${basureroPintor.stat_Defense}: ${basureroPintor.stat_Valor_Defense}</p>
        <p class= "statsName"> ${basureroPintor.stat_SpAttack}: ${basureroPintor.stat_Valor_SpAttack}</p>
        <p class= "statsName"> ${basureroPintor.stat_SpDefense}: ${basureroPintor.stat_Valor_SpDefense}</p>
        <p class= "statsName"> ${basureroPintor.stat_Speed}: ${basureroPintor.stat_Valor_Speed}</p>
       
        `
        pokedexList$$.appendChild(createDiv$$);
    }
};

const reciveDeInput = (basureroDePokemon) => {
    const input$$ = document.querySelector(".inputName");
    // console.log(input$$)-- contiene el elemento correcto
    input$$.addEventListener("input", () => {
        // console.log(input$$.value) -- cada vez que escribes te imprime lo que hay en input
        filtroBuscadorNombre(input$$.value, basureroDePokemon) //necesita el parámetro que recive el valor del input y el valor que va a filtrar
        // console.log("hola"); -- esto funciona bien, imprime un hola por cada input 
        
    });
};

const filtroBuscadorNombre = (filtro, pokemonsSinFiltrar) => { //recive un filtro y un array sin filtar. Aquí creamos la función asignando al primer parámetro que es el filtro, luego invocamos está funcion dandole el valor del imput como filtro, así es como ella sabe por lo que tiene que filtrar. 
    // console.log(filtro, pokemonsSinFiltrar) -- nos aparece lo que introducimos en el imput y el array sin filtrar entero
    let pokemonsFiltered = pokemonsSinFiltrar.filter((pokemon) => pokemon.nombre.toLowerCase().includes(filtro.toLowerCase())); //le generamos una nueva variable para que guarde lo que filtra, le decimos donde tiene que filtrar y que va a filtrar. 
    DrawPokemon(pokemonsFiltered);
};

const reciveDeSelect = (basureroDeTipos) => { // filtro tipos
    const select$$ = document.querySelector(".seleccionar");
    select$$.addEventListener("change", () => {
        filtroBuscadorTipo(select$$.value, basureroDeTipos);
    })

};

const filtroBuscadorTipo = (filtro, tiposSinFiltrar) => { // tipos
    if( filtro === "none") {
        DrawPokemon(mappedArray);
    }else{
    let tiposFiltrados = tiposSinFiltrar.filter((tipos) => tipos.tipo.toLowerCase().includes(filtro.toLowerCase()));
    DrawPokemon(tiposFiltrados);
    };
};
let inputValue; // hay que declarar la variable fuera del ambito para que se pueda usar en filtroBuscador

/* const reciveIDInput = (userID) => {
    const idInput$$ = document.querySelector(".idInput");
    idInput$$.addEventListener("input", () => {
        inputValue = parseInt(idInput$$.value);
        if (userID === "none"){
            DrawPokemon(mappedArray);
        }if (isNaN(inputValue)) {
            alert("Introduce un número entero porfis :)");
        }else{
            filtroBuscadorId(userID, inputValue);
}})
}

 const filtroBuscadorId = (idSinFiltrar) => {
    const idInput$$ = document.querySelector(".idInput");
    let idFiltrada = idSinFiltrar.filter((id) => id.id === inputValue);
    DrawPokemon(idFiltrada);
 } */
 

/* const MaxMinValueOfStats = (valorStats, fieldName) => {
    let basureroMaxValue = 0;
    let basureroMinValue = Infinity;
    for (let i of valorStats){
         if(i[fieldName] > basureroMaxValue){
            basureroMaxValue = i[fieldName];
         }if(i[fieldName] < basureroMinValue){
            basureroMinValue = i[fieldName];
         }
    }
    /* console.log(basureroMaxValue);
    console.log(basureroMinValue); */
   /*  return(basureroMaxValue, basureroMinValue);
};
 */ 





const firstToExecute = async () => {
    const pokemonData = await dataFromApi();
    //console.log("Final array", mappedArray);
    DrawPokemon(mappedArray);
    reciveDeInput(mappedArray);
    reciveDeSelect(mappedArray);
    /* reciveIDInput(mappedArray);*/
}; 

firstToExecute();



/*
EXPLICACIÓN PARA CUANDO PURI SE FRUSTRE Y LE DE UNA CRISIS EXISTENCIAL


Cuando queremos crear un filtro, primero añadimos el elemento al html, por ejemplo el input de texto, donde el usuario escribe lo que quiere buscar. 
A partir de aquí tenemos que crear una función que se relacione directamente con ese imput y que reciva su valor. 
En este caso la función es reciveDeImput. Le ponemos un parámetro random, que sea descriptivo de lo que va a hacer, en este caso como no podía ser menos es un basureroDePokemon, porque buscará el pokemon por su nombre. 
Luego tenemos que vincular esta función con el elemento de HTML que recive la interacción con el usuario, vamos a guardarlo en la variable input$$. 
Una vez tenemos esto hay que decirle a JS que escuche si hay algún movimiento, básicamente que sea como nuestro anacleto agente secreto. Lo hacemos con el addEventListener y en este caso le damos el evento de "input" ya que el movimiento al que queremos que reaccione es la introducción de texto. 
Le metemos una función recursiva: () => { códgio }, esta función es como un condicional pero en función, es decir, si escucha el evento que le dictamos ejecuta el código de dentro, y si no escucha nada pues se lo pasa por el forro.
Dentro de la función recursiva viene lo bueno. Aquí es donde se empieza a liar la troca. 
Necesitamos ya crear la siguiente función, que va a ser la que filtra las opciones para devolver el resultado trabajando mano a mano con reciveDeImput.
Vamos a llamar a esta función filtroBuscadorNombre y le vamos a dar dos parámetros, el primero va a ser filtro que será lo que quieres filtrar y la segunda va a ser un nombre random. No te estreses que luego todo se conecta. 
Continuamos creando una constante en este caso pokemonsFiltered que va a guardar el resultado del filtro que aplicamos.
El filtro se aplica a pokemonSinFiltrar que en el futuro será la información que va a recorrer el basurero para encontrar lo que le pides.  
pokemonsSinFiltrar.filter((pokemon) => pokemon.nombre.toLowerCase().includes(filtro.toLowerCase()));
aquí le estamos diciendo que filtre dentro de pokemonSinFiltrar.
Luego metemos un basurero nuevo en este caso pokemon para que se meta en nombre y busque lo que le hemos puesto en el parámetro de filtro. 
toLoweCase es para que no le pille una crisis existencial como las que nos pillan a nosotras si le pones una mayúscula.
Includes es para que busque dentro de ese array la palabra que incluya lo que tiene el filtro, por eso se lo recordamos entre parentesis despues del includes.
.includes(filtro.toLowerCase()); recordamos también decirle que no llore si encuentra una mayúscula.
Finalmente, para que la pagina se vaya moviendo a medida que buscamos el pokemon desdeado le metemos la función DrawPokemon que es la que dibuja y desdibuja los pokemons en pantalla.

*/


