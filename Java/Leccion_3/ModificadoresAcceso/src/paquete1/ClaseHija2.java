
package paquete1;

public class ClaseHija2 extends Clase2 {
    // Constructor
    public ClaseHija2() {
        // Llamada al constructor de la superclase (clase padre)
        super();
        this.atributoDefault = "Modificacion del atributo Default";
        System.out.println("atributoDefault: " + this.atributoDefault);
        this.metodoDefault();
    }

}
