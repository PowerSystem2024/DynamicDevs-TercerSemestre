# Nos conectamos a la base de datos
# Importamos la librería psycopg2
import psycopg2 

conexion = psycopg2.connect(user= "postgres", password= "admin", host= "localhost", port = "5432", database= "test_bd")

# print(conexion) # Imprimimos la conexión a la base de datos

# Creamos un cursor para ejecutar comandos SQL
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = "SELECT * FROM persona WHERE id_persona = %s" # Creamos una sentencia SQL / Placeholder
            id_persona = input('Digite un número para el id_persona: ')
            cursor.execute(sentencia, (id_persona,)) # Ejecutamos la sentencia SQL
            registros = cursor.fetchone() # Recuperamos todos los registros de la consulta
            print(registros) # Imprimimos los registros recuperados
except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close() # Cerramos la conexión a la base de datos

#usamos la pagina psycopg.org/docs/usage.html