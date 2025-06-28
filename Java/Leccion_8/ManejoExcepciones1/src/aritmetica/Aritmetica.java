// Aqui vamos a crear un metodo publico de tipo static para que no necesitemos instanciar la clase

package aritmetica;

import excepciones.OperacionExcepcion;

public class Aritmetica {
    // Vamos a crear un metodo
    public static int dividir(int numerador, int divisor) {
        // Si el divisor es cero, lanzamos una excepcion personalizada
        if (divisor == 0) {
            throw new OperacionExcepcion("No se puede dividir por cero");
        }
        // Si no, devolvemos la division
        return numerador / divisor;
    }

}
