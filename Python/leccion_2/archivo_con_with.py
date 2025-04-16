from ManejoArchivos import ManejoArchivos

# Manejo de contexto con With - with automaticamente abre y cierra los archivos
# en el contexto de with se ejectua de manera automativa diversos recursos: 
# __enter__ para abrir; __exit__ para cerrar los archivos
# with open('prueba.txt', 'r', encoding= 'utf8') as archivo:
    #print(archivo.read())

# No se necesita el try ni el except, ni el finally

with ManejoArchivos('prueba.txt') as archivo:
    print(archivo.read())