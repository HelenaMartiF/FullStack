/* Dado el siguiente array de objetos. Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen.  */

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
    
    
        
    









// Container padre for each element
// Inside container padre = h4 for title and img for image