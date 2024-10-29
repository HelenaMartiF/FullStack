/* Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista. */

const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  
  
for ( let value of countries){
      let container = document.createElement('div');
      document.body.append(container);
  
      let h4 = document.createElement('h4');
      h4.innerHTML = value.title;          
      container.appendChild(h4);
  
      const img = document.createElement('img');
      img.src = value.imgUrl;
      container.appendChild(img);
}

let removeButton = document.querySelector('button');

removeButton.addEventListener('click', () => {
    let allDiv = document.querySelectorAll('div');
    let lastDiv = allDiv[allDiv.length-1];                              ////////           LENGTH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! NOT LENGHT
    lastDiv.remove(); 
})


