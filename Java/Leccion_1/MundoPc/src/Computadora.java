// Clase Computadora
public class Computadora {
    private static int contadorComputadoras = 0;
    private int idComputadora;
    private String nombre;
    private Monitor monitor;
    private Teclado teclado;
    private Raton raton;

    public Computadora(String nombre, Monitor monitor, Teclado teclado, Raton raton) {
        this.idComputadora = ++contadorComputadoras;
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton;
    }

    @Override
    public String toString() {
        return "Computadora " + idComputadora + ": " + nombre + "\n" +
                monitor.toString() + "\n" +
                teclado.toString() + "\n" +
                raton.toString();
    }
}

