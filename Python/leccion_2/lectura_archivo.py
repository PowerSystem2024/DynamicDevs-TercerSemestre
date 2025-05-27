# Leemos un archivo. 
try: 
    archivo= open('prueba.txt', 'r', encoding= 'utf8')   # read
    # print(archivo.read())
    # print(archivo.read(15))
    # print(archivo.read(10))
    # print(archivo.readline())
except Exception as e:
    print(e)
finally:    # finally siempre se ejecuta
    archivo.close()   # para cerrar el archivo

'''# Anexamos informacion a un archivo.
archivo= open('prueba.txt', 'a', encoding= 'utf8')   # append informacion

# Para crear un archivo a un archivo. En caso que no existe no envia una excepcion
archivo= open('prueba.txt', 'x', encoding= 'utf8')   # anexar informacion'''

# Otra forma de leer los archivos
# Vamos a iterar el archivo por cada una de las lineas
# for linea in archivo:
#    print(linea)

# Otro metodo para leer archivos. Esto regresa una lista
# print(archivo.readlines())

# Para acceder por lineas
# print(archivo.readlines()[2])  # me lee la linea 3 - esto porque readline me muestra como lista

# Anexamos informacion, copiamos a otro archivo
try:
    archivo2= open('copia.txt', 'a', encoding= 'utf8')
    archivo2.write(archivo.read())
except Exception as e:
    print(e)
finally:
    archivo.close()
    archivo2.close()

print('Se ha terminado el proceso de leer y copiar archivos.')