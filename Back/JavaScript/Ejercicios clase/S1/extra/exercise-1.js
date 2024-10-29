
/* Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuario menor de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuario mayor de edad:". */

const users = [
    {name: "Abel", years: 43}, 
    {name: "Maria", years: 18}, 
    {name: "Pedro", years: 14}, 
    {name: "Samantha", years: 32}, 
    {name: "Raquel", years: 16}];

for( i = 0; i<users.length; i++){
    let users2 = users[i];                                   // users esta todo
    let users3 = users2.years;                               // users2 tenemos copia de users
    if(users3 >= 18){                                        // users3 le metemos lo que nos interesa de users2 en este caso .years
        console.log("Usuario mayor de edad:" + users2.name);
    }
    else{
        console.log("Usuario menor de edad:" + users2.name);
    }
}