'use strict';
// Veamos como evitar este error:

try {
    let x = 10;
    myFunction();
}

catch (error){ // Catchamos el error
    console.log(error);
}

finally {
    console.log('Termina la revisión de errores');
    
}

// La ejecución continúa..
console.log('Continuamos..'); // Esto no se logra ejecutar ya que está bloqueado.
