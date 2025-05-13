
mifunction();

function mifunction() {
    console.log("Saludos desde la función");
}

let myFuncion = function() {
    console.log("Saludos desde la función anonima");
}
//Ahora vamos a crear una función flecha
let myFuncionFlecha = () => {
    console.log("Saludos desde la función flecha");
}
//Hay mas variantes para funcions flecha
myFuncionFlecha();

//Lo hacemos en una sola línea
const saludar = () => console.log("Saludos desde la función flecha en una sola línea");
saludar();

//Otro ejemplo
const saludoar2 = () => {
    return "Saludos dese la funcion flecha 2";
}
console.log(saludoar2());

//Simplificamos la funcion anterior
const saludoar3 = () => "Saludos dese la funcion flecha 3";
console.log(saludoar3());
//continuamos con el siguiente ejemplo
const regresaObjeto = () => ({ nombre: "Juan", apellido: "Perez" });
console.log(regresaObjeto());

//Funciones flecha con parametros
const funcionParametros = ( mensaje ) => console.log(mensaje);
funcionParametros("Saludos desde la función flecha con parámetros");
//una funcion clasica
const funcionParametrosClasica = function(mensaje) {
    console.log(mensaje);
}
funcionParametrosClasica("Saludos desde la función clasica con parámetros");

//Se pueden omitir los parentesis si solo hay un parametro
const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros("Otra forma de trabajar con funciones flecha");

//Ahora vemos funciones flecha con varios parametros
const funcionConParametros2 = (op1, op2) => op1 + op2;
console.log(funcionConParametros2(10, 20));
//Podemos abrir la funcion y tener mas cosas dentro de ella
const funcionConParametros1 = (op1, op2) => {
    let resultado = op1 + op2;
    return resultado;
}
console.log(funcionConParametros1(5, 20));

