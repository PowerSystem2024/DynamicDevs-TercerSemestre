package test;

import enumeraciones.Continentes;
import enumeraciones.Dias;

public class TestEnumeraciones {
    public static void main(String[] args) {
        System.out.println("Dia 1: " + Dias.LUNES); // Se puede acceder a los valores del enum
        indicarDiaSemana(Dias.LUNES); // Se puede pasar un valor del enum como argumento

        // Hacemos pruebas con la clase Continentes
        System.out.println("Continente 1: " + Continentes.AFRICA);
        System.out.println("Paises en el continente: " + Continentes.AFRICA.getPaises());
        System.out.println("Habitantes en el continente: " + Continentes.AFRICA.getHabitantes());
    }

    private static void indicarDiaSemana(Dias dias) {
        switch (dias) {
            case LUNES:
                System.out.println("Primer dia de la semana");
                break;
            case MARTES:
                System.out.println("Segundo dia de la semana");
                break;
            case MIERCOLES:
                System.out.println("Tercer dia de la semana");
                break;
            case JUEVES:
                System.out.println("Cuarto dia de la semana");
                break;
            case VIERNES:
                System.out.println("Quinto dia de la semana");
                break;
            case SABADO:
                System.out.println("Sexto dia de la semana");
                break;
            case DOMINGO:
                System.out.println("Septimo dia de la semana");
                break;
            default:
                System.out.println("No es un dia de la semana");
                break;
        }
    }
}

