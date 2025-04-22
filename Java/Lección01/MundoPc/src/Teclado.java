// Clase Teclado
public class Teclado extends DispositivoEntrada {
    private static int contadorTeclados = 0;
    private int idTeclado;

    public Teclado(String tipoEntrada, String marca) {
        super(tipoEntrada, marca);
        this.idTeclado = ++contadorTeclados;
    }

    @Override
    public String toString() {
        return "Teclado: [id: " + idTeclado + ", " + super.toString() + "]";
    }
}