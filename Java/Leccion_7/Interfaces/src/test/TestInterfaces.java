
package test;

import accesodatos.*;


public class TestInterfaces {
    public static void main(String[] args){
        IAccesoDatos datos = new ImplementacionMySql();
        //datos.listar();
        
        //impirmir(datos);
        
        datos = (IAccesoDatos) new ImplementacionOracle();
        //datos.listar();
        imprimir(datos);
    }
   

    private static void imprimir(IAccesoDatos datos) {
        datos.listar();
    }
    
}
