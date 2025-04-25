from pelicula import Pelicula

class CatalogoPeliculas:
    ruta_archivo = 'peliculas.txt'

    @staticmethod
    def agregar_pelicula(pelicula):
        with open(CatalogoPeliculas.ruta_archivo, 'a', encoding='utf-8') as archivo:
            archivo.write(str(pelicula) + '\n')

    @staticmethod
    def listar_peliculas():
        try:
            with open(CatalogoPeliculas.ruta_archivo, 'r', encoding='utf-8') as archivo:
                print('Películas en el catálogo:')
                print(archivo.read())
        except FileNotFoundError:
            print('No hay películas guardadas aún.')

    @staticmethod
    def eliminar():
        import os
        if os.path.exists(CatalogoPeliculas.ruta_archivo):
            os.remove(CatalogoPeliculas.ruta_archivo)
            print('Archivo eliminado.')
        else:
            print('No existe el archivo.')

