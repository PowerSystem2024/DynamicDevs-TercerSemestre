// Clase private
// Private solo se puede usar en atributos, constructores y metodos dentro de la misma clase
package paquete2;

public class Clase4 {
    // Atributos de la clase. Solo accesibles dentro de la misma clase con getter y setter
    private String atributoPrivate = "Valor Atributo Private";

    // Constructor Privado
    private Clase4() {
        System.out.println("Constructor Privado");
    }

    // Constructor Publico
    public Clase4(String argumento) {
        // Llamada al constructor privado
        this();
        System.out.println("Constructor Publico");
    }
    
    // Metodo Private
    private void metodoPrivate() {
        System.out.println("Metodo Private");
    }
    
    // Getter y Setter para el atributo private
    public String getAtributoPrivate() {
        return atributoPrivate;
    }

    public void setAtributoPrivate(String atributoPrivate) {
        this.atributoPrivate = atributoPrivate;
    }

}
