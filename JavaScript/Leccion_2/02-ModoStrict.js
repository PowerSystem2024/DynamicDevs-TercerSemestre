// 'use strict'; // recomendado al inicio del archivo o función
// El modo estricto es una forma de activar un conjunto de restricciones en JavaScript.

let x = 10; // Esto lanzará un error porque "x" no está declarada
console.log(x); // No se ejecutará

function miFuncion() {
    // 'use strict'; // Activar el modo estricto dentro de la función. No siempre funciona bien.
    y = 20; // Esto puede lanzar un error porque "y" no está declarada
    console.log(y); // No se ejecutará
} 
miFuncion(); // Llamada a la función