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
            sentencia = 'SELECT * FROM persona WHERE id_persona IN %s' # Placeholder1
            entrada = input('Digite el ID persona, separados por comas: ')
            llaves_primarias = (tuple(entrada.split(',')),)
            cursor.execute(sentencia, llaves_primarias) #(id_persona,)) # De esta manera ejecutamos la sentencia de persona.
            registros = cursor.fetchall() # Recupera todos los registros que serán una lista.
            for registro in registros:
                print(registro)

except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()