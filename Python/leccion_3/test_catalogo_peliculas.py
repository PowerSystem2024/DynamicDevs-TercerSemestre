from pelicula import Pelicula
from catalogo_pelicula import CatalogoPeliculas

opcion = None
while opcion != '4':
    print('\nOpciones:')
    print('1) Agregar película')
    print('2) Listar películas')
    print('3) Eliminar archivo de películas')
    print('4) Salir')
    opcion = input('Elige una opción (1-4): ')

    if opcion == '1':
        nombre_pelicula = input('Nombre de la película: ')
        pelicula = Pelicula(nombre_pelicula)
        CatalogoPeliculas.agregar_pelicula(pelicula)
    elif opcion == '2':
        CatalogoPeliculas.listar_peliculas()
    elif opcion == '3':
        CatalogoPeliculas.eliminar()
    elif opcion == '4':
        print('Saliendo del programa...')
    else:
        print('Opción no válida.')

