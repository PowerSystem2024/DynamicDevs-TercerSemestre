// Aqui haremos las prueas de JavaBeans
// Las tecnologias mas avanzadas que usaran nuestra clase no pasaran argumentos. Esto con JavaBeans por eso 
// necesitamos un constructor vacio.

package test;

import domain.Persona;

public class TestJavaBeans {
    public static void main(String[] args) {

        Persona persona = new Persona();

        // Para asignar valores a los atributos de la clase Persona, usamos los setters.
        persona.setNombre("Juan");
        persona.setApellido("Perez");
        System.out.println("persona = " + persona);

        System.out.println("Persona nombre: " + persona.getNombre());
        System.out.println("Persona apellido: " + persona.getApellido());

    }
}
