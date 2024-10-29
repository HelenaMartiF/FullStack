
// Vale, teniendo en cuenta la frustración acumulada, el café que llevo, la hora que és y toda la pesca, ya de entrada te digo que esto no va a terminar siendo lo que queríamos que fuera de un buen principio. Llevo literalmente 5 horas sentada delante de la pantalla y esto está siendo duro Iván, mas duro que un Sábado de promesas, bucles y basureros. Así que salga lo que salga, aquí tienes la crónica. (La empiezo tarde, pero mas vale tarde que nunca).

// Se que tarde o temprano vas a mirar el código porque no puedes no hacerlo, tu tikismikosis permanente y la curiosidad te pican ¿verdad?. Son las 23:13 del Viernes 16/02, llevaba 2 horas peleando con el código porque no me reproducía el audio de soy un programador cuando el evento occurría. Sabes que era lo que pasaba? Pues que lo había cortado mal amigui, que tenía 10 segundos de silencio dentro del mismo audio por eso sonaba con delay. Si, wonderfull life, crisis existencial nº 531 superada por el momento. Así que, no juzgues mi chapuza con el html porque chico, ¿conoces la desesperación? Yo la he mirado a los ojos hace poco, y no tiene una mirada tierna, así que por favor, un poco de compasión.

// Esto es bastante frustrante, porque? Osea porque? Yo entiendo que los ordenadores no piensan y tal pero ostras tio, jolin. 23:57, he conseguido meter el video, pero no la imagen, osea, suena el vídeo de fondo cuando le toca pero no se ve el video. Ahora que? Chati ya no tiene mas ideas, a quien le pregunto ahora Ivan? 00:10 sigue sin verse el video. 

// Oye mira que si lo quieres evaluar y así me explicas el tema del video pues estará guai también. Y otra pregunta, como sería la manera correcta de terminar con los condicionales? Osea, el último no puede ser un else porque el primer condicional tiene como condicion que numberMouseover sea igual a 5, si le pongo un else detecta que a la primera vuelta numberMouseover es igual a 0 entonces no cumple ninguna condicion y entra en else. Sin embargo si le damos la condicion de menos a 5 al primer if se activa con la primera pasada. Así que, respuestas por favor, se agradece.

// 00:54. Estoy por volver a mirar las clases de css. Esto no es normal, osea duro. Sigue sin aparecer el vídeo y esto ya parece un díario de un náufrago perdido y desolado ante muchas letras sin sentido y de colorines. Desisto, renuncio. Muy tryhard todo. 1:23 es bona hora per anar a dormir.

// 13:15 del día siguiente. Podría estar muchas mas horas con esto pero sabes que pasa? Que mañana tenemos que entregar S8 y estoy bloqueada en extras ej3 así que no voy a saturar mas mi cabeza con esto porque sino no iremos a ningún lado y sabemos que el 10 no va a salir gratis. Espero que al menos esto te distraiga un poco de este silencio tan rotundo que hay en clase. Gracias por tu paciencia Iván! 

// FDO: {laFilaDeAtras} 



let yesBtn$$ = document.querySelector("#yesBtn");
let noBtn$$ = document.querySelector("#noBtn");
let initiateBtn$$ = document.querySelector(".initiate");
let contenedor$$ = document.querySelector(".contenedor");
let initiationCntnr$$ = document.querySelector(".initiation");
let final$$ = document.querySelector(".final");


let soyProgramador = new Audio();
soyProgramador.src = "Others/SoyUnProgramador2.mp4"

let numberOfMouseover = 0;
let numberOfClicksY = 0;


initiateBtn$$.addEventListener("click", function() {
    initiationCntnr$$.style.display = "none";
    contenedor$$.style.display = "block";
})

yesBtn$$.addEventListener("click", function () {

    if(numberOfClicksY === 0){
        alert("Iván, la gracia está en que le des click al otro botón crack.")
        numberOfClicksY++;
    }else{
        // FOTO ALUMNOS CON IVÁN
        // Y ALGO MAS
    }
});

let compraHuevos$$ = document.getElementById("compraHuevosID");
let meHasMuteado$$ = document.getElementById("meHasMuteadoID");
let queFrancesaEres$$ = document.getElementById("queFrancesaEresID");
let unaPromesa$$ = document.getElementById("unaPromesaID");

let compraHuevosVideo$$ = document.querySelector(".compraHuevos");
let meHasMuteadoVideo$$ = document.querySelector(".meHasMuteado");
let queFrancesaEresVideo$$ = document.querySelector(".queFrancesaEres");
let unaPromesaVideo$$ = document.querySelector(".unaPromesa");


//Chati no nos ha ayudado, PROMETEMOS QUE NO.

document.addEventListener("keydown", function(event) {
    
    if (event.keyCode === 123) {
        
        alert("Really?");
       
    }
});
document.addEventListener("contextmenu", function(event) {
    
    alert("No seas tramposo anda. ¬¬' ");
    for(let basurero = 0; basurero < 9999; basurero++){ //Siempre con cariño
    alert("Empieza el caos, por cotilla.");
    
}});

//Chati no nos ha ayudado, PROMETEMOS QUE NO.

noBtn$$.addEventListener("mouseover", function () {

    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);

    noBtn$$.style.setProperty("top", randomY + '%');
    noBtn$$.style.setProperty("left", randomX + '%');
    noBtn$$.style.setProperty("transform", `translate(-${randomX}%, -${randomY}%)`);

        
    numberOfMouseover++;
    if(numberOfMouseover === 7){

        alert("Tip: Sube la sensibilidad al ratón, la gracia es que consigas clickear el botón."); //21''
        compraHuevos$$.style.display = "block";
        compraHuevosVideo$$.play();
        numberOfMouseover++;
        setTimeout(() => {
            compraHuevos$$.style.display = "none";
            alert("Keep going...")
        }, 21000); 

    }else if(numberOfMouseover === 15){ 

        alert("Espero que al menos ya le hayas dado un click.");
        queFrancesaEres$$.style.display = "block";
        queFrancesaEresVideo$$.play();
        numberOfMouseover++;
        setTimeout(() => {
            queFrancesaEres$$.style.display = "none";
            alert("No, esto no es todo.")
        }, 5000);

    }else if(numberOfMouseover === 22){ 

        alert("Cosas del directo.");
        meHasMuteado$$.style.display = "block";
        meHasMuteadoVideo$$.play();
        numberOfMouseover++;
        setTimeout(() => {
            meHasMuteado$$.style.display = "none";
            alert("¿Habrá algo mas?")
        }, 28000);

    }else if(numberOfMouseover === 27){ 

        alert("Te prometo que es el último.");
        unaPromesa$$.style.display = "block";
        unaPromesaVideo$$.play();
        numberOfMouseover++;
        setTimeout(() => {
            unaPromesa$$.style.display = "none";
            alert("Y al final, el sabado tampoco entendimos NADA.")
            alert("Llegados a este punto y viendo que nos quedan menos de 6 horas de sueño, te agradecemos este insufrible sufrimiento tan sufrido con JS.")
            alert("PD: como ves, mis promesas SÍ son sólidas.")
            
        }, 26000);
        
        
    }   
        // si, se que no se puede terminar con un else if, pero es lo que hay.
    
});
    

// BOTÓN NO -------------------- (el único que ha colaborado amablemente a que esto salga adelante)

let numberOfClicks = 0;

const eresUnMakina = () => {
    alert("¿Pero que haces con tu vida? Con ese aim deberías estar en G2 por lo menos.");
    alert("No, no termina aquí fiera, sigue dándole al botón, makinote.");
}

const eresUnaBestia = () => {
    alert("Esto tiltea mas que el LoL, ¿verdad?");
    alert("¡Venga, que ya casi lo tienes, bestia parda!");
}

const eresUnMastodonte = () => {
    alert("¿En serio crack?");
    alert("Yo me planteaba en serio el cambio de carrera, mastodonte. Keep going.");
}

const oseaYa = () => {
    alert("Vale, ya.");
    alert("Tenía fe en ti, pero debo reconocer que no tanta. Has llegado lejos, pequeño saltamontes.");
    contenedor$$.style.display="none";
    final$$.style.display="block";
}

noBtn$$.addEventListener("click", function() {

    if(numberOfClicks === 0){
        eresUnMakina();
        numberOfClicks++;
    }else if(numberOfClicks === 1){
        eresUnaBestia();
        numberOfClicks++;
    }else if(numberOfClicks === 2){
        eresUnMastodonte();
        numberOfClicks++;
    }else{
        oseaYa();
    }
});
 


// {laFilaDeAtras} quiere ser tus stalkers favoritos:
// @backrowstudio 
