/* Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.
 */

const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const botonFuera = document.querySelector("button");
botonFuera.remove();


for (let value of countries) {
  let container = document.createElement("div");
  document.body.append(container);

  let h4 = document.createElement("h4");
  h4.innerHTML = value.title;
  container.appendChild(h4);

  const img = document.createElement("img");
  img.src = value.imgUrl;
  container.appendChild(img);

  let button = document.createElement("button");
  container.appendChild(button);
  button.innerHTML = "Chancletazo";

  button.addEventListener("click", () =>{
    /* button.parentNode.remove(); */         // Selecciona al padre del botón (container) y lo borra
    container.remove()
  })
}

// SELECCIONAR EL PADRE DEL BOTÓN



