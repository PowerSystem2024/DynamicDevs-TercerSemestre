archivo = open('prueba.txt', 'r', encoding='utf8') # las letras son:'w' write,'r' read,'a' append,'x' crea un archivo.
# print(archivo.read())
# print(archivo.read(15))
# print(archivo.read(10)) # Continúa desde la línea anterior.
# print(archivo.readline())
# print(archivo.readline())

# vamos a iterar el archivo, cada una de las líneas.
# for linea in archivo:
   # print(linea): iteramos todos los elementos del archivo.
   # print(archivo.readlines()): accedemos al archivo como si fuera una lista.

# Anexamos información, copiamos a otro
archivo2 = open('copia.txt', 'w', encoding='utf8')
archivo2.write(archivo.read())
archivo.close() # cerramos el primer archivo.
archivo2.close() # cerramos el segundo archivo.

print('Se ha terminado el proceso de leer y copiar archivos.')