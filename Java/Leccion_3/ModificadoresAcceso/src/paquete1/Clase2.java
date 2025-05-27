// Clase Default
// No se especifica el modificador de acceso, por lo que es default (package-private)
// al estar en el mismo paquete que la clase Clase1, puede acceder a sus atributos y metodos
// Aqui no se pueden hacer pruebas de acceso a los atributos y metodos desde otro paquete
package paquete1;

class Clase2 {
    // Atributos de la clase
    String atributoDefault = "Valor Atributo Default";
    
    // Constructor Default
    // Clase2() {
    //     System.out.println("Constructor Default");
    // }

    // Constructor 2
    public Clase2() {
        super();
        this.atributoDefault = "Modificado del atributo Default";
        System.out.println("atributoDefault: " + this.atributoDefault);
        this.metodoDefault();
    }

    // Metodo Default
    void metodoDefault() {
        System.out.println("Metodo Default");
    }

}
