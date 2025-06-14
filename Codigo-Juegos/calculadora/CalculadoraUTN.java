import java.sql.SQLOutput;
import java.util.Scanner;
public class CalculadoraUTN {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        while (true){


            System.out.println("******** Aplicacion Calculadora ********");
            mostrarMenu();


            try {
                var operacion = Integer.parseInt(entrada.nextLine());
                if (operacion >= 1 && operacion <= 4) {
                    ejecutarOperacion(operacion, entrada);

                } //Fin del if
                else if (operacion == 5) {
                    System.out.println("Hasta pronto...");
                    break; //Rompe ciclo y sale
                } else {
                    System.out.println("Opcion erronea: " + operacion);
                }
                //Imprimiomos un salto de linea antes de repetir el menu
                System.out.println();
            } catch (Exception e){ //Fin del try comienzo del try
                System.out.println("Ocurrio un error: "+e.getMessage());
                System.out.println();
            }
        } //Fin while
    } //Fin main

    private static void mostrarMenu(){
        //Mostramomos el menu
        System.out.println("""
                    1. Suma
                    2. Resta
                    3. Multiplicacion
                    4. Division
                    5. Salir
                    """);
        System.out.println("Operacion a realizar? ");
    }

    private static void ejecutarOperacion(int operacion, Scanner entrada){
        System.out.print("Digite el valor para el operando1: ");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.print("Digite el valor para el operando2: ");
        var operando2 = Double.parseDouble(entrada.nextLine());

        double resultado;
        switch (operacion) {
            case 1 -> {
                resultado = operando1 + operando2;
                System.out.println("Resultado de la suma: " + resultado);
            }
            case 2 -> {
                resultado = operando1 - operando2;
                System.out.println("Resultado de la resta: " + resultado);
            }
            case 3 -> {
                resultado = operando1 * operando2;
                System.out.println("Resultado de la division: " + resultado);
            }
            case 4 -> {
                resultado = operando1 / operando2;
                System.out.println("Resultado de la multiplicacion: " + resultado);
            }
            default -> System.out.println("Opcion erronea" + operacion);
        } //Fin switch
    }//Fin metodo ejecutar Operacion
} //Fin clase

