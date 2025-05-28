# Declaramos una variable
try:
    archivo = open('prueba.txt', 'w', encoding='utf8') # open sirve para crear un archivo y la letra 'w' funciona para escribir dentro del txt, significa write.
    archivo.write('Programamos con diferentes tipos de archivos, ahora en txt.\n')
    archivo.write('Los acentos son importantes para las palabras.\n')
    archivo.write('Como por ejemplo: acción, ejecución y producción.\n')
    archivo.write('las letras son:\n w - write,\n r - read,\n a - append,\n x - crea un archivo \n')
    archivo.write('\nt - esta es para texto o text. \nb - archivos binarios. \nw+  lee y escribe son iguales r+\n')
    archivo.write('Saludos a todos los alumnos de la tecnicatura.\n')
    archivo.write('Con esto terminamos.\n')
except Exception as e:
    print(e)
finally: # Siempre se ejecuta finally
    archivo.close() # Con esto se debe cerrar el archivo.
#    archivo.write('Todo quedó perfecto'): Luego del finally no se puede agregar nada más.