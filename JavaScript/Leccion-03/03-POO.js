class Empleado {
    constructor(nombre, sueldo) {
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles() {
        return `Empleado: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    // Agregamos la sobreescritura
    obtenerDetalles() {
        return `Gerente: ${super.obtenerDetalles}, depto: ${this.departamento}`;
    }
}

function imprimir(tipo) { // POLIMORFISMO
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente) {
        console.log("Es un objeto de tipo Gerente.");
        console.log(tipo._departamento); // No existe en la clase padre

    } else if(tipo instanceof Empleado) {
        console.log("Es un tipo de tipo Empleado.");
    } else if(tipo instanceof Object) { // El orden siempre es jerárquico.
        console.log("Es de tipo Object"); // Clase padre de todas las clases.
    }
}

let gerente1 = new Gerente("Carlos", 5000, "Sistemas");
console.log(gerente1); // Objeto de la clase hija.

let empleado1 = new Empleado("Juan", 3000);
console.log(empleado1); // Objeto de la clase padre.

imprimir(gerente1); // En el polimorfismo esta llamando al método de la clase padre.
imprimir(empleado1); // Esta llamando al método de la clase hija.

// Son las múltiples formas en tiempo de ejecución del polimorfismo.