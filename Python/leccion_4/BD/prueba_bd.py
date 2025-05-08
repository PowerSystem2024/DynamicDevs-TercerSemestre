# Nos conectamos a la base de datos
# Importamos la librería psycopg2
import psycopg2 

conexion = psycopg2.connect(
    user= "postgres",
    password= "admin",
    host= "localhost",
    port = "5432",
    database= "test_bd"
)

# print(conexion) # Imprimimos la conexión a la base de datos

# Creamos un cursor para ejecutar comandos SQL
cursor = conexion.cursor()
sentencia = "SELECT * FROM persona" # Creamos una sentencia SQL
cursor.execute(sentencia) # Ejecutamos la sentencia SQL
registros = cursor.fetchall() # Recuperamos todos los registros de la consulta
print(registros) # Imprimimos los registros recuperados

# Cerramos el cursor y la conexión a la base de datos
cursor.close() # Cerramos el cursor
conexion.close() # Cerramos la conexión a la base de datos