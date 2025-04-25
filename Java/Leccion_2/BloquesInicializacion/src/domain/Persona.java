// Bloques de inicializacion estaticos y no estaticos. Se ejecutan antes del constructor
package domain;

public class Persona {
    // Atributos de la clase Persona
    private final int idPersona;
    private static int contadorPersonas; // Atributo estatico

    // Bloque de inicializacion estatico. Aqui no usamos this porque no existe el objeto
    static {
        System.out.println("Bloque de inicializacion estatico");
        ++Persona.contadorPersonas;
    }

    // Bloque de inicializacion no estatico o contexto dinamico
    {
        // Se ejecuta cada vez que se crea un objeto de la clase Persona
        System.out.println("Bloque de inicializacion no estatico");
        this.idPersona = Persona.contadorPersonas++;
    }
    
    // Constructor de la clase Persona
      public Persona() {
          System.out.println("Ejecucion del constructor");
      }

    // Metodo para obtener el id de la persona
    public int getIdPersona() {
        return this.idPersona;
    }
    
    // Agregamos el toString para imprimir el idPersona
    @Override
    public String toString() {
        return "Persona [idPersona=" + idPersona + "]";
    }
}
