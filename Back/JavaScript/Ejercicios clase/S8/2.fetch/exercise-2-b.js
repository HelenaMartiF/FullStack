/* En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.

EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.
 */


const baseUrl = 'https://api.nationalize.io?name=';
const boton = document.querySelector("button");
const input = document.querySelector("input");
let propiedadesFiltradas = [];

boton.addEventListener("click", () => {
    const name = input.value.trim().toLowerCase();
    const url = baseUrl + name;
    if (!name) {
        console.log ('Por favor, introduce un nombre.');
        return;
    }

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const {country} = data;
            console.log({country});

            for(let basurero in country) {
                //console.log("country", country); // muestra country completo que es un array con 5 objetos uno por cada país
                //console.log("basurero en country", country[basurero]); // recorre el array country y te saca uno por uno los objetos del array

                const filtroPropiedades = {
                    nombre: name,
                    ciudad: country[basurero].country_id,
                    probabilidad: country[basurero].probability * 100,
                };
                propiedadesFiltradas.push(filtroPropiedades);
                
            }
            // console.log("propiedades filtradas", propiedadesFiltradas) // muestra en consola el nombre, ciudad y porcentaje 
        drawAnswers(propiedadesFiltradas);
        })
        .catch((error) => {
            console.log("Ha ocurrido un error:", error); 
        });
});

const div = document.createElement("div");
document.body.append(div);

function drawAnswers(queQueremosMostrar) {
    for (let basureroValores of queQueremosMostrar){
        const p = document.createElement("p");
        p.textContent = `El nombre ${capitalizeFirstLetter(basureroValores.nombre)} tiene un ${basureroValores.probabilidad}% de vivir en ${basureroValores.ciudad}.`
        div.appendChild(p);
    }
};

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
};


// ---------------------- API BANNED ME SO WE'LL NEED TO WAIT TILL TOMORROW TO FIND OUT IF CAPITALIZEFIRSTLETTER WORKS ---------



















/* const baseUrl = 'https://api.nationalize.io?name=';
let mappedArray = [];

const whatToSearch = () => {   
    const button$$ = document.querySelector("button"); 
    const input$$ = document.querySelector("input"); 

    button$$.addEventListener("click", () => { 
        getFromApi(input$$.value); 
    });
};

const getFromApi = async (name) => {  

    const apiPetiton = await fetch (`${baseUrl}${name}`); 
    const jsonApi = await apiPetiton.json(); 
    console.log(jsonApi)

    for( let i = 1; i <= jsonApi.length; i++){
    
    const mappedJson = {
        id: jsonApi.id,
        name: jsonApi.name,
        countryName: jsonApi.country.country_id,
        probability: jsonApi.country.probability,
    } 
    mappedArray.push(mappedJson);

    
}};
console.log(mappedArray);

whatToSearch();  */