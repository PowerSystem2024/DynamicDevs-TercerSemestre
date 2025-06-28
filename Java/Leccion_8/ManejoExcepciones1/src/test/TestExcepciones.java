// Vamos a ver el manejo de errores en Java

package test;

import static aritmetica.Aritmetica.dividir; // Importamos el metodo dividir de la clase Aritmetica

import javax.management.openmbean.OpenDataException;

import excepciones.OperacionExcepcion;

public class TestExcepciones {
    public static void main(String[] args) {
        // Crearmos diversas variables
        int resultado = 0;
        try {
            // Intentamos dividir por cero
            resultado = dividir(10, 0); // Aqui no es necesario instanciar la clase Aritmetica
        } catch (OperacionExcepcion e) {
            // Capturamos la excepción y mostramos un mensaje
            System.out.println("Ocurrió un error de tipo OperacionExcepcion: ");
            System.out.println(e.getMessage());
        } catch (Exception e) {
            // Capturamos la excepción y mostramos un mensaje
            System.out.println("Se ha producido un error: ");
            e.printStackTrace(System.out);
            System.out.println(e.getMessage());
        } finally {
            // Este bloque se ejecuta siempre, independientemente de si se ha producido una excepción o no
            System.out.println("Se ha ejecutado el bloque finally");
        }
        // Vamos a ver que el programa sigue funcionando
        System.out.println("El resultado es: " + resultado);
    }
}
