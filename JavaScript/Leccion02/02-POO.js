// Programación Orientada a Objetos

class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles() {
        return `Empleado: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this.departamento = departamento;
    }

    // Agregamos la sobreescritura
    obtenerDetalles() {
        return `Gerente: ${super.obtenerDetalles}, depto: ${this.departamento}`;
    }
}

let gerente1 = new Gerente("Carlos", 5000, "Sistemas");
console.log(gerente1); // Objeto de la clase hija

let empleado1 = new Empleado("Juan", 3000);
console.log(empleado1); // Objeto de la clase padre

