mifuncion1()
mifuncion2()

function mifuncion1(){
    console.log('Función 1');
}

function mifuncion2(){
    console.log('Función 2');
}

//Funcion de tipo callback
function imprimir( mensaje ){
    console.log( mensaje);
}

function sumar( op1,op2, functionCallback ){
    let res = op1 + op2;
    functionCallback(`Resultado: ${res}`);
}

sumar(5,3,imprimir);

//Llamadas asincronicas con uso setTimeout

function miFuncionCallback(){
    console.log('Saludo asincronico después de 3 segundos');
}

setTimeout(miFuncionCallback, 5000);
setTimeout( function() {console.log('Saludo asincrono 2')}, 3000);
setTimeout( () => console.log('Saludo asincrono 2'), 4000);

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj,1000); //Cada 1 segunda se ejecuta 



