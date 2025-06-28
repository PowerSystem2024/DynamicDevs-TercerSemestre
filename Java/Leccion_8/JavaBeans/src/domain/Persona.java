// Vamos a crear un JavaBean llamado Persona que implementa Serializable.
// Con serializable podemos guardar el estado del objeto en un archivo o enviarlo a traves de la red.

package domain;

import java.io.Serializable;

public class Persona implements Serializable {
    // Esta clase tendra dos atributos: nombre y apellido
    private String nombre;
    private String apellido;

    // Constructor vacio
    public Persona() {
    }

    // Constructor (este no es requerido pero es util)
    public Persona(String nombre, String apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    // Getters y Setters (en este caso es requerido que esten encapsulados)
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    // toString (este no es requerido pero es util)
    @Override
    public String toString() {
        return "Persona{" +
                "nombre= " + nombre +
                ", apellido= " + apellido +
                "}";
    }
}
