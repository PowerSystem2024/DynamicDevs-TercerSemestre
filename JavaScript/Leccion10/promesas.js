let miPromesa = new Promise((resolver, rechazar) => {  
    let expresion = true; // Cambia a false y simula un error
    if (expresion) {
        resolver('La promesa se resolvio correctamente');
    } else {
        rechazar('Se produjo un error');
    }   
}); 


//miPromesa.then(
//    valor => console.log(valor),
//    error => console.log(error)
//);

//miPromesa 
//  .then(valor => console.log(valor))
//    .catch(error => console.log(error));

let promesa = new Promise( (resolver) => {
    setTimeout(() => resolver('saludos desde la promesa, callback, funcion flecha y setTimeout'), 3000);
});

//El llamado a la promesa utilizando setTimeout
//promesa.then(valor => console.log(valor));

//Async indica que una funcion regresa una promesa
async function miFuncionConPromesas() {
    return 'Saludos con promesas y asinc';
}

//miFuncionConPromesas().then(valor => console.log(valor));

// Async/Await
async function funcioConPromesasYAwait() {
    let miPromesa = new Promise((resolver) => {
        resolver('Promesa con await');
    });
    console.log(await miPromesa);
}
//funcioConPromesasYAwait();

//Promesas, async, await y setTimeout
async function funcionConPromesaAwaitTimeout() {
    let miPromesa = new Promise((resolver) => {
        console.log('Inicio funcion')
        setTimeout(() => resolver('Promesa con await y Timeout'), 3000);
        console.log('Fin funcion');
    });
    console.log(await miPromesa);
}

funcionConPromesaAwaitTimeout();