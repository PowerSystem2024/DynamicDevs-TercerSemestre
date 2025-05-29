// Acceso a atributos protegidos y públicos desde una clase hija en otro paquete
package paquete2;

import paquete1.Clase1;

public class Clase3 extends Clase1 {
    // Constructor
    public Clase3() {
        // Llamada al constructor de la superclase (clase padre)
        super("Valor Atributo Protegido");
        this.atributoProtegido = "Accedemos desde la clase hija";
        System.out.println("Atributo Protegido: " + this.atributoProtegido);
        this.atributoPublico = "Es totalmente publico";
    }

}
