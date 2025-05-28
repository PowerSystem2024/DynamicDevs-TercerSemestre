import psycopg2 # Esto es para poder conectarnos a PostreSQL

conexion = psycopg2.connect(

    user = 'postgres',
    password = 'admin',
    host = '127.0.0.1',
    port = '5432',
    database = 'test_BD'
)

print(conexion)

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)' # Lo pasamos como parámetro con "%s"
            valores = ('Carlos', 'Lara', 'clara@gmail.com') # Es una tupla
            cursor.execute(sentencia, valores) #(id_persona,)) # De esta manera ejecutamos la sentencia de persona.
            # conexion.commit() Se utiliza para guardar los cambios en la base de datos. NO LO USAMOS YA QUE LO HACE EL 2do WITH DEL BUCLE AUTOMÁTICAMENTE.
            registros_insertados = cursor.rowcount
            print(f'Los registros insertados son: {registros_insertados}')

except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()