# Nos conectamos a la base de datos
# Importamos la librería psycopg2
import psycopg2

conexion = psycopg2.connect(user= "postgres", password= "admin", host= "localhost", port = "5432", database= "test_bd")

# print(conexion) # Imprimimos la conexión a la base de datos

# Creamos un cursor para ejecutar comandos SQL
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = "SELECT * FROM persona WHERE id_persona IN %s" # Creamos una sentencia SQL / Placeholder
            entrada = input('Digite los id_persona a buscar (separados por coma): ')
            llaves_primarias = (tuple(entrada.split(', ')),)
            cursor.execute(sentencia, llaves_primarias) # Ejecutamos la sentencia SQL
            registros = cursor.fetchall() # Recuperamos todos los registros de la consulta
            for registro in registros:
                print(registro) # Imprimimos los registros recuperados
except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close() # Cerramos la conexión a la base de datos