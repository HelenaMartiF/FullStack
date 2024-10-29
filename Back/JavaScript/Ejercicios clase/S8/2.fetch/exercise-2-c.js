/* En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado y que si el usuario hace click en este botón eliminemos el parrafo asociado. */

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
                
            };
            // console.log("propiedades filtradas", propiedadesFiltradas) // muestra en consola el nombre, ciudad y porcentaje 
        drawAnswers(propiedadesFiltradas);
        })
        .catch((error) => {
            console.log("Ha ocurrido un error:", error); 
        });
});

const maindiv = document.createElement("div");
document.body.append(maindiv);

function drawAnswers(queQueremosMostrar) {
    for (let basureroValores of queQueremosMostrar){

        const pDiv = document.createElement("div");
        maindiv.appendChild(pDiv);

        const p = document.createElement("p");
        p.textContent = `El nombre ${capitalizeFirstLetter(basureroValores.nombre)} tiene un ${basureroValores.probabilidad}% de vivir en ${basureroValores.ciudad}.`
        pDiv.appendChild(p);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete"
        pDiv.appendChild(deleteButton);

        deleteButton.addEventListener("click", () => {
        pDiv.remove();
        })
    }
};


function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
};