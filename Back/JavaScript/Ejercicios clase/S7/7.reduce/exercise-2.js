/* Dado el siguiente array, haz una suma de todos las notas de los examenes de los alumnos que esten aprobados usando la función .reduce().

El resultado sería 42.
 */

const exams = [
    {name: 'Abel Cabeza Román', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

let sumaNotasAprobados = exams.reduce((acumulador, alumno) => {
    // Verificar si la nota del alumno es mayor o igual a 5
    if(alumno.score >= 5) {
        // sumar la nota del alumno al basurero
        return acumulador + alumno.score; 
    }else {
        // No hacer nada si el alumno no está aprobado, simplemente devolver el acumulador
        return acumulador;
    }
}, 0); // el cero final es el valor incial del acumulador, en este caso se establece en cero porque partimos de ahí. 

console.log(sumaNotasAprobados)

// ------------- CHAT GPT EXPLAINS -------------
/* 
1. Inicialización:
    isApproved: se inicializa como 0 que es el valor inicial del acumulador.
2. Iteración sobre el array 'exams':
    La función reduce itera sobre cada elemento del array exams. 
    Alumno representa cada elemento del array en cada iteración.
3. Verificación de aprobación:
    Se verifica si la nota del alumno (alumno.score) es mayor o igual a 5
4. Actualización del acumulador:
    Si el alumno está aprobado, se suma su nota (alumno.score) al acumulador.
    Si el alumno no está aprobado,. no se modifica el acumulador y se devuelve el valor actual del acumulador.
5. Fin de la iteración:
    La función reduce continúa iterando sobre todos los elementos del array, actualizando el acumulador según sea necesario.
6. Resultado fihnal:
    Al final de la iteración, sumaNotasAprobados contiene la suma de las notas de todos los alumnos aprobados. 





*/