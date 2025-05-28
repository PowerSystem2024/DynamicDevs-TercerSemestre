import psycopg2 as bd # Esto es para poder conectarnos a PostreSQL

conexion = bd.connect(

    user = 'postgres',
    password = 'admin',
    host = '127.0.0.1',
    port = '5432',
    database = 'test_BD'
)

print(conexion)

try:
    # conexion.autocommit = False # No es buena practica que se ejecute este código, debe estar en falso o no estar.
    cursor = conexion.cursor()
    sentencia = 'insert into persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    valores = ('Maria', 'Esparza', 'esparzam@gmail.com')
    cursor.execute(sentencia, valores)
    conexion.commit() # Agregamos el commit manualmente
    print('Termina la transacción')

except Exception as e:
    conexion.rollback()
    print(f'Ocurrió un error, se hizo un rollback: {e}')
finally:
    conexion.close()