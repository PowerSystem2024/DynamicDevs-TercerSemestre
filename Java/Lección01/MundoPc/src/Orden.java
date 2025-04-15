// Clase Orden
import java.util.ArrayList;

public class Orden {
    private static int contadorOrdenes = 0;
    private int idOrden;
    private ArrayList<Computadora> computadoras;

    public Orden() {
        this.idOrden = ++contadorOrdenes;
        this.computadoras = new ArrayList<>();
    }

    public void agregarComputadora(Computadora computadora) {
        computadoras.add(computadora);
    }

    public void mostrarOrden() {
        System.out.println("Orden: " + idOrden);
        for (Computadora computadora : computadoras) {
            System.out.println(computadora.toString());
            System.out.println();
        }
    }
}
