// Clase Monitor
public class Monitor {
    private static int contadorMonitores = 0;
    private int idMonitor;
    private String marca;
    private double tamanio;

    public Monitor(String marca, double tamanio) {
        this.idMonitor = ++contadorMonitores;
        this.marca = marca;
        this.tamanio = tamanio;
    }

    public int getIdMonitor() {
        return idMonitor;
    }

    @Override
    public String toString() {
        return "Monitor: [id: " + idMonitor + ", marca: " + marca + ", tamaño: " + tamanio + "]";
    }
}