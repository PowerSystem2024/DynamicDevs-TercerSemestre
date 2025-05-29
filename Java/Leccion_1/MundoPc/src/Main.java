public class Main {
    public static void main(String[] args) {

        // Creación de dispositivos
        Teclado teclado1 = new Teclado("Teclado Mecánico", "Logitech");
        Teclado teclado2 = new Teclado("Teclado Mecánico", "Redragon");
        Teclado teclado3 = new Teclado("Teclado Mecánico", "Royal Kludge");

        Raton raton1 = new Raton("Mouse Gamer", "Redragon");
        Raton raton2 = new Raton("Mouse", "Logitech");
        Raton raton3 = new Raton("Mouse Gamer Competitivo", "Attack Shark");

        Monitor monitor1 = new Monitor("Samsung", 24);
        Monitor monitor2 = new Monitor("MSI", 24);
        Monitor monitor3 = new Monitor("ASUS", 24);

        // Creación de computadoras
        Computadora computadora1 = new Computadora("PC Oficina", monitor1, teclado1, raton1);
        Computadora computadora2 = new Computadora("PC Gamer", monitor2, teclado2, raton2);
        Computadora computadora3 = new Computadora("PC Gamer", monitor3, teclado3, raton3);

        // Crear orden y agregar computadoras
        Orden orden = new Orden();
        orden.agregarComputadora(computadora1);
        orden.agregarComputadora(computadora2);
        orden.agregarComputadora(computadora3);

        // Mostrar orden
        orden.mostrarOrden();
    }
}