//Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click.



function buttonClick(click){  // we create a function for the event
    console.log(click);    // and we tell the function what we want when the event occures
}

document.getElementById("btnToClick").addEventListener("click", buttonClick); 
// We then invoque the element that has the event and we add a listener that checks if the event happens, first parameter is the event it needs to check for and the secondone what needs to be executed if the event is listened. 

// AAAAAAAAAAAAAAAAAAAAAAAAAAAATENTIONE! BE CAREFULL WITH HTML COOOODE HELENA. 
// IF needed, take a look at HTML classes again girl. 