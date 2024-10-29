//Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Abel Cabeza", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];


for(let i in alumns){                               //Damos paso al barrendero (i) dentro de la Plaza Mayor (alumns)
    let approved = 0;                               //Le pedimos que mire las basuras de la plaza y cuente cuantas hay de llenas

    if(alumns[i].T1 === true){                      //Le especificamos donde está la primera basura
        approved++;
    }
    if(alumns[i].T2 === true){                      //Le especificamos donde está la segunda basura
        approved++;
    }
    if(alumns[i].T3 === true){                      //Le especificamos donde está la tercera basura
        approved++
    }
                     

    if(approved >= 2){                              //Si ha contado dos basuras o más llenas
        alumns[i].isApproved = true;                //Le pedimos que lo añada en un cartel en la Plaza Mayor
        console.log(`¡FELICIDADES! ${alumns[i].name} tiene ${approved} trimestres aprobados. Pasa de curso.`); //Y que escriba = GRACIAS POR TIRAR LA CACA A LA BASURA
    }
    else{
        alumns[i].isApproved = false;               //Si ha contado menos de dos basuras llenas le pedimos que rectifique el cartel y escriba:
        console.log(`¡HASTA EL AÑO QUE VIENE! ${alumns[i].name} tiene ${approved} trimestres aprobados. Repite curso.`); // SOIS UNOS PORCOS POR NO RECOGER LA CACA
    }    
}

