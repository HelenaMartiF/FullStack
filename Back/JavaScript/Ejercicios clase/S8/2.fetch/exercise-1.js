/* Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un console.log(). Para ello, es necesario que crees un .html y un .js. */

const startFetch = async () => {
    const apiPetition = await fetch(`https://api.agify.io?name=michael`);
    const petitionDone = await apiPetition.json();
    console.log("Datos de Michael", petitionDone);
}

startFetch();