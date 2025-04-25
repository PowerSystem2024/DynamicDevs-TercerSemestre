package test;

public class TestArgumentosVariables {
    public static void main(String[] args) {
        // Vamos a llamar al método imprimirNumeros
        imprimirNumeros(3, 4, 5); // Se pueden pasar varios argumentos
        imprimirNumeros(1, 2); // Se pueden pasar varios argumentos
        variosArgumentos("Juan", "Perez", 7, 8, 9); // Se pueden pasar varios argumentos
    }

    // Método que recibe un número variable de argumentos
    private static void variosArgumentos(String nombre, String apellido, int ...numeros) { // Argumentos variables
        // Se puede recibir un número variable de argumentos, se convierte en un arreglo
        System.out.println("Nombre: " + nombre);
        System.out.println("Apellido: " + apellido);
        imprimirNumeros(numeros); // Llamamos al método imprimirNumeros
        }


    private static void imprimirNumeros(int... numeros) { // Argumentos variables
        // Se puede recibir un número variable de argumentos, se convierte en un arreglo
        for (int i = 0; i < numeros.length; i++) {
            System.out.println("Elementos: " + numeros[i]);
        }
    }
}
