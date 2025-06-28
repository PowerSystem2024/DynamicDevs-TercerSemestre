// Vamos a crear una clase de excepciones personalizada
// Con esto trabajamos con nuestras propias excepciones

package excepciones;

public class OperacionExcepcion extends RuntimeException {
    // Constructor que recibe un mensaje de error
    public OperacionExcepcion(String mensaje) {
        super(mensaje);
    }

}
