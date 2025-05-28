from dominio.Pelicula import Pelicula
from servicio.catalogo_peliculas import CatalogoPeliculas as cp # renombramos CatalogoPeliculas con el as y después el nombre que queramos poner, ej "cp".

opcion = None
while opcion != 4:
    try:
        print('Opciones: ')
        print('1. Agregar Película')
        print('2. Listar las películas')
        print('3. Eliminar catálogo de películas')
        print('4. Salir')
        opcion = int(input('Digite una opción de menú (1-4): '))

        if opcion == 1:
            nombre_pelicula = input('Ingrese el nombre de la película:"')
            pelicula = Pelicula(nombre_pelicula)
            cp.agregarPeliculas(pelicula)
        elif opcion == 2:
            cp.listar_peliculas()
        elif opcion == 3:
            cp.eliminar_peliculas()

    except Exception as e:
        print(f'Ocurrió un error de tipo {e}')
        opcion = None
    else:
        print('Salimos del programa...')