// Autoboxing and Unboxing 
// Autoboxing: El autoboxing ocurre cuando Java convierte automáticamente un primitivo en su objeto equivalente.
// Unboxing: El unboxing ocurre cuando Java convierte automáticamente un objeto en su primitivo equivalente.
package test;

public class AutoboxingUnboxing {
    public static void main(String[] args) {
        // Clases envolventes (wrapper classes)
        /*
         * Clases envolventes de tipos primitivos:
         * int= la clase envolvente es Integer
         * double= la clase envolvente es Double
         * char= la clase envolvente es Character
         * boolean= la clase envolvente es Boolean
         * long= la clase envolvente es Long
         * float= la clase envolvente es Float
         * byte= la clase envolvente es Byte
         * short= la clase envolvente es Short
         */
        
         // Tipo primitivo
        int enteroPrimitivo = 10; // Tipo primitivo int
        System.out.println("enteroPrimitivo: " + enteroPrimitivo); // Imprime el valor del entero primitivo

         // Autoboxing: Convertir un tipo primitivo a su objeto envolvente
        Integer enteroObjeto = enteroPrimitivo;   // entero de tipo Object
        System.out.println("enteroObjeto: " + enteroObjeto); // Imprime el valor del objeto envolvente
        
        // Unboxing: Convertir un objeto Integer a un tipo primitivo int
        int enteroPrimitivo2 = enteroObjeto;
        System.out.println("enteroPrimitivo2: " + enteroPrimitivo2); // Imprime el valor del entero primitivo
    }

}
