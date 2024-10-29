//Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función `.includes()`


const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
];




const categoriasUnicas = [];                           // creamos una lista para que el basurero apunte los tipos de latas que va a encontrar en la plaza

for (let i of movies) {                                // spawneamos al basurero (i) dentro de plaza mayor (movies)

  for (let j of i.categories) {                       // dentro de plaza mayor hay muchos tipos de basura así que le indicamos que queremos solo las latas (i.categories) y le damos una basura amarilla (j) 
                                                      // para que las recoja
    if (!categoriasUnicas.includes(j)) {              // si encuentra una lata DIFERENTE a las anteriores 
      categoriasUnicas.push(j);                       // le decimos que la apunte en la lista de latas (categoriasUnicas) para hacer un estudio de mercado
    }
  }
}

console.log(categoriasUnicas);                       // lista final de las latas que el basurero ha encontrado dentro de plaza mayor, si ha trabajado bien, no se repite ninguna marca.



