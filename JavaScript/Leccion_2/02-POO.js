class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado - nombre: ${this._nombre}
        Sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);   // llamamos al constructor de la clase padre
        this._departamento = departamento;  // inicializamos propiedad específica de Gerente
    }

    // Sobreescribimos el método obtenerDetalles de la clase padre
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}
        Departamento: ${this._departamento}`;
    }
}
// Creamos un objeto de la clase Gerente
let gerente1 = new Gerente('Carlos', 8000, 'Sistemas');
console.log(gerente1); // objeto de la clase hija

let empleado1 = new Empleado('Juan', 5000); // objeto de la clase padre
console.log(empleado1); // objeto de la clase padre