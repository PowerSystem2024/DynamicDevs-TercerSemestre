// For Each
package test;

import domain.Persona;

public class TestForEach {
    public static void main(String[] args) {
        int edades[] = { 5, 6, 7, 8, 9 };
        for (int edad : edades) { // sintaxis for each
            System.out.println("Edad: " + edad);
        }
        // Definimos un arreglo de tipo persona
        Persona personas[] = { new Persona("Juan"), new Persona("Pedro"), new Persona("Maria") };
        for (Persona persona : personas) { // sintaxis for each
            System.out.println("Nombre: " + persona);
        }
    }
}
