// Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.



const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

const sinAmarillo = [...colors];

sinAmarillo.splice(2, 1); // ES INCORRECTO PORQUE MODIFICA EL ARRAY ORIGINAL

sinAmarillo = [...colors.slice(0, 2), ...colors.slice(3)]; // MI NO ENTENDER -- INVESTIGATE LATER PORQUE LA NEURONA YA NO PROCESA

console.log(sinAmarillo);
console.log(colors);