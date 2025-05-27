# Nos conectamos a la base de datos
# Importamos la librería psycopg2
import psycopg2

conexion = psycopg2.connect(user= "postgres", password= "admin", host= "localhost", port = "5432", database= "test_bd")

# print(conexion) # Imprimimos la conexión a la base de datos

# Creamos un cursor para ejecutar comandos SQL
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = "UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s"
            valores = ('Juan Carlos','Roldan','rcarlos@mail.com', 1)# Es una tupla
            cursor.execute(sentencia, valores) # Ejecutamos la sentencia SQL
            registros_actualizados = cursor.rowcount #
            print(f'Los registros actualizados son: {registros_actualizados}')

except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close() # Cerramos la conexión a la base de datos