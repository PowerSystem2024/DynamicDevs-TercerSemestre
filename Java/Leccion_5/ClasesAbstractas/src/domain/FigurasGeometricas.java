
package domain;


public abstract class FigurasGeometricas {
    protected String tipoFigura;
    
    protected FigurasGeometricas(String tipoFigura){
        this.tipoFigura = tipoFigura;
    }
    
    //Metodo abstracto
    public abstract void dibujar();
    
    //Agregamos el get y set
    public String getTipoFigura(){
        return tipoFigura;
    }
    
    public void setTipoFigura(String tipoFigura){
        this.tipoFigura = tipoFigura;
    }
    
    @Override
    public String toString(){
        return "FiguraGeometrica{ "+"tipoFigura= "+ tipoFigura +"}";
    }
}
