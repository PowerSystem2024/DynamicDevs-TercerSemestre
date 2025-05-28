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
            sentencia = 'SELECT * FROM persona WHERE id_persona = %s' # Placeholder
            id_persona = input('Introduce el ID persona: ')
            cursor.execute(sentencia, (id_persona,)) # De esta manera ejecutamos la sentencia de persona.
            registros = cursor.fetchone() # Recupera todos los registros que serán una lista.
            print(registros)
except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()

# cursor.close() // El cierre de la conexión lo hace with, no hace falta usar el metodo close.

# https://www.psycopg.org/docs/usage.html

