// Clase Raton
public class Raton extends DispositivoEntrada {
    private static int contadorRatones = 0;
    private int idRaton;

    public Raton(String tipoEntrada, String marca) {
        super(tipoEntrada, marca);
        this.idRaton = ++contadorRatones;
    }

    public int getIdRaton() {
        return idRaton;
    }

    @Override
    public String toString() {
        return "Ratón: [id: " + idRaton + ", " + super.toString() + "]";
    }
}