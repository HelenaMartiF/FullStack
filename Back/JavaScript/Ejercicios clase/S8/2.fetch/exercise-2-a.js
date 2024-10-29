//Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.

const baseUrl = 'https://api.nationalize.io?name=';


const whatToSearch = () => {    // we create a function that vinculates html elements with js
    const button$$ = document.querySelector("button"); // we vinculate the button
    const input$$ = document.querySelector("input"); // so we do with input

    button$$.addEventListener("click", () => { // we then set an eventlistener to button that responses to the click event
        getFromApi(input$$.value); // and what we want to get from the click event is the activation of the other function and what we want that funcion to have as parameters is the value introduced in input. !! IMPORTANT THE .VALUE GIRL !!
    });
};

const getFromApi = async (name) => {  // We do need to set the function with the fetch action starting by creating an async function cause it needs time to process 
    const apiPetiton = await fetch (`${baseUrl}${name}`); // we then create a variable that keeps the answer from the api petition BUT we also add here the parameter of the function, as we do need to search INSIDE the api what introduced in the input was. 
    const jsonApi = await apiPetiton.json(); // we then need to transform the api result to json
    console.log(jsonApi); // we do want the json data to appear on console
};

whatToSearch(); // we need to invoke the function 

// ------------------------------------- IVANS' SOLUTION --------------------------------
// --------------------- RETURNS TYPEERROR: Cannot read properties of null addEventListener -


/* const baseUrl = 'https://api.nationalize.io?name=';
const boton = document.querySelector("button");
const input = document.querySelector("input");

boton.addEventListener("click", () => {
    const name = input.value.trim();
    const url = baseUrl + name;
    if (!name) {
        console.log ('Por favor, introduce un nombre.');
        return;
    }

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log("Ha ocurrido un error:", error); 
        });
});

 */
