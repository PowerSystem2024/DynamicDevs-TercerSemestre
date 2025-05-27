# Nos conectamos a la base de datos
# Importamos la librería psycopg2
import psycopg2

conexion = psycopg2.connect(user= "postgres", password= "admin", host= "localhost", port = "5432", database= "test_bd")

# print(conexion) # Imprimimos la conexión a la base de datos

# Creamos un cursor para ejecutar comandos SQL
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia ='DELETE FROM persona WHERE id_persona IN %s'
            entrada = input('Digite los números de registro a eliminar (separados por coma): ')
            valores = (tuple(entrada.split(',')),) #Es una tupla de tuplas de valores
            cursor.execute(sentencia, valores) # Ejecutamos la sentencia SQL
            registros_eliminador = cursor.rowcount #
            print(f'Los registros eliminador son: {registros_eliminador}')

except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close() # Cerramos la conexión a la base de datos