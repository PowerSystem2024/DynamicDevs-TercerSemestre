// Para testear la Clase Default, se puede crear una clase TestDefault en el mismo paquete (paquete1) y crear una instancia de Clase2 para acceder a sus atributos y métodos.
package paquete1;

import paquete2.Clase4;

public class TestDefault {
    public static void main(String[] args) {
        // Crear una instancia de Clase2
        ClaseHija2 claseHija2 = new ClaseHija2();
        claseHija2.atributoDefault = "Modificado desde TestDefault";
        System.out.println("claseHija2 atributo default: " + claseHija2.atributoDefault);

        Clase4 clase4 = new Clase4("Argumento Constructor Publico");
        System.out.println(clase4.getAtributoPrivate());
        clase4.setAtributoPrivate("Cambio");
        System.out.println("clase4: " + clase4.getAtributoPrivate());

        
    }

}
