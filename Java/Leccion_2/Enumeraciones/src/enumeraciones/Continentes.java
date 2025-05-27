package enumeraciones;

public enum Continentes {
    AFRICA(53, "1.2 mil millones de habitantes"),
    AMERICA(34, "1.0 mil millones de habitantes"),
    ASIA(48, "4.5 mil millones de habitantes"),
    EUROPA(44, "748 millones de habitantes"),
    OCEANIA(14, "500 millones de habitantes"); // Se pueden agregar atributos a los enums

    private final int paises; // Atributo de la enumeracion
    private final String habitantes; // Atributo de la enumeracion

    Continentes(int paises, String habitantes) { // Constructor de la enumeracion
        this.paises = paises;
        this.habitantes = habitantes;
    }

    // Al ser encapsulados, tipo private, debemos crear los metodos get para acceder a ellos
    //Metodo para obtener el valor del atributo paises
    public int getPaises() {
        return this.paises;
    }
    
    //Metodo para obtener el valor del atributo habitantes
    public String getHabitantes() {
        return this.habitantes;
    }

}
