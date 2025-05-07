// Clase Publica    
package paquete1;

public class Clase1 {
    // Atributos de la clase
    public String atributoPublico = "Valor Atributo Publico";
    protected String atributoProtegido = "Valor Atributo Protegido";

    // Constructor Publico
    public Clase1() {
        System.out.println("Constructor Publico");
    }
    // Constructor Protegido
    protected Clase1(String atributoProtegido) {
        System.out.println("Constructor Protegido");
    }

    // Metodo Publico
    public void metodoPublico() {
        System.out.println("Metodo Publico");
    }
    // Metodo Protegido
    protected void metodoProtegido() {
        System.out.println("Metodo Protegido");
    }
}
