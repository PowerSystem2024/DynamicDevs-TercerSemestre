# Creamos un archivo
# Declaramos una variable
try:
    archivo = open('prueba.txt', 'w', encoding= 'utf8')   # write - utf8, caracteres que soporta las tildes.
    archivo.write(
        'Programamos con diferentes tipos de archivos, ahora en txt.\n'
        'Los acentos son importantes para las palabras,\n'
        'como por ejemplo: acción, ejecución, producción.\n'
        'Las letras son:\n'
        'r: read, a: append, w: write, x: crea un archivo, b: archivos binarios, \n' \
        'w+: lee y escribe, r+: escribe y lee.\n'
        'Saludos a todos los alumnos de la tecnicatura.\n'
        'Con esto terminamos.\n'
    )
except Exception as e:
    print(e)
finally:    # finally siempre se ejecuta
    archivo.close()   # para cerrar el archivo

# archivo.write('Todo esta perfecto') -> esto es un error


