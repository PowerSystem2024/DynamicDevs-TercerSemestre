'use strict';
// Veremos como evitar este error
try{
     x = 10;
    //miFuncion();
    throw 'Mi error'; // Maneja tipo string
} catch(error){ //Catchamos el error
    console.log(typeof(error));
}
finally{
    console.log('Termina la revision de errores')
}
//La ejecucion ahora continua...
console.log('Continuamos...') // Esto no se llega a ver porque esta bloqueado.

let resultado = 5;

try{
    // y = 5;
    if(isNan(resultado)) throw'No es un numero';
    else if( resultado === '') throw'Es una cadena vacia';
    else if( resultado >= 0) throw'Es un valor positivo'
    else if( resultado <= 0) throw'Es un valor negativo'
}
catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.menssage);
}
finally{
    console.log('Termina la revision de errores 2')
}