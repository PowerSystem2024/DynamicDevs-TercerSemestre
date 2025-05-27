# Nos conectamos a la base de datos
# Importamos la librería psycopg2
import psycopg2

conexion = psycopg2.connect(user= "postgres", password= "admin", host= "localhost", port = "5432", database= "test_bd")

# print(conexion) # Imprimimos la conexión a la base de datos

# Creamos un cursor para ejecutar comandos SQL
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = "INSERT INTO persona (nombre, apellido, email)VALUES (%s, %s, %s)"
            valores = (
                ('Carlos', 'Lara', 'clara@mail.com'),
                ('Marcos', 'Canto', 'mcanto@mail.com'),
                ('Marcelo', 'Cuenca', 'mcuenca@mail.com')
            )# Es una tupla de tuplas
            cursor.executemany(sentencia, valores) # Ejecutamos la sentencia SQL
            # conexion.commit() esto se utiliza para guardar los cambios en la BD, pero con el comando with no es necesario
            registros_insertados = cursor.rowcount #
            print(f'Los registros insertados son: {registros_insertados}')

except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close() # Cerramos la conexión a la base de datos