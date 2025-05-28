import os # importamos lo que es el sistema operativo.

class CatalogoPeliculas:

    ruta_archivo = 'peliculas.txt'

    @classmethod
    def agregarPeliculas(cls, peliculas): # cls es contexto de clase
        with open(cls.ruta_archivo, 'a', encoding='utf8') as archivo:
            archivo.write(f'{peliculas.nombre}\n')

    @classmethod
    def listar_peliculas(cls):
        with open(cls.ruta_archivo, 'r', encoding='utf8') as archivo:
            print(f'Catálogo de películas'.center(50,'-'))
            print(archivo.read())

    @classmethod
    def eliminar_peliculas(cls):
        os.remove(cls.ruta_archivo)
        print(f'Archivo Eliminado: {cls.ruta_archivo}')
