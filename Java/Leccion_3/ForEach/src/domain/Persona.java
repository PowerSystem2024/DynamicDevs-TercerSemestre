package domain;

public class Persona {
    private String nombre;

    // Constructor por defecto
    public Persona(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    // Método toString para mostrar el nombre de la persona
    @Override
    public String toString() {
        return "Persona [nombre=" + nombre + "]";
    }
}
