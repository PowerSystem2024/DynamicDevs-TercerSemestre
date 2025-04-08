class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }
}

// Clase Raton que hereda de DispositivoEntrada
class Raton extends DispositivoEntrada {
    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton() {
        return this._idRaton;
    }

    toString() {
        return `Ratón: [id: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

// Clase Teclado que hereda de DispositivoEntrada
class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    toString() {
        return `Teclado: [id: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

class Monitor {
    static contadorMonitores = 0;

    constructor(marca, tamanio) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;
    }

    getIdMonitor() {
        return this._idMonitor;
    }

    toString() {
        return `Monitor: [id: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamanio}]`;
    }
}

class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    toString() {
        return `Computadora ${this._idComputadora}: ${this._nombre}\n${this._monitor.toString()}\n${this._teclado.toString()}\n${this._raton.toString()}`;
    }
}

class Orden {
    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }
 
    mostrarOrden() {
        let ordenInfo = `Orden: ${this._idOrden}\n`;
        for (let computadora of this._computadoras) {
            ordenInfo += `${computadora.toString()}\n\n`;
        }
        return ordenInfo;
    }
}

// Creacion de dispositivos
const teclado1 = new Teclado('Teclado Mecanico', 'Logitech');
const teclado2 = new Teclado('Teclado Mecanico', 'Redragon');
const teclado3 = new Teclado('Teclado Mecanico', 'Royal Kludge');

const raton1 = new Raton('Mouse Gamer', 'Redragon');
const raton2 = new Raton('Mouse', 'Logitech');
const raton3 = new Raton('Mouse Gamer Competitivo', 'Attack Shark');

const monitor1 = new Monitor('Samsung', '24 pulgadas');
const monitor2 = new Monitor('MSI', '24 pulgadas');
const monitor3 = new Monitor('ASUS', '24 pulgadas');

// Creacion de computadoras
const computadora1 = new Computadora('PC Oficina', monitor1, teclado1, raton1);
const computadora2 = new Computadora('PC Gamer', monitor2, teclado2, raton2);
const computadora3 = new Computadora('PC Gamer', monitor3, teclado3, raton3);

// Crear orden y agregar computadoras
const orden = new Orden();
orden.agregarComputadora(computadora1);
orden.agregarComputadora(computadora2);
orden.agregarComputadora(computadora3);

// Mostrar orden
console.log(orden.mostrarOrden());