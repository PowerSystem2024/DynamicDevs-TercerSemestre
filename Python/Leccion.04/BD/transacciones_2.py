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
    conexion.autocommit = False # INICIA LA TRANSACCIÓN.
    cursor = conexion.cursor()
    sentencia = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    valores = ('Mariana', 'Gutierrez', 'gutierrezmm@gmail.com')
    cursor.execute(sentencia, valores)

    sentencia = 'UPDATE persona SET nombre = %s, apellido = %s, email = %s WHERE id_persona = %s'
    valores = ('Juan', 'Perez', 'perezj@gmail.com', 1) # El número 1 es el ID persona.
    cursor.execute(sentencia, valores)

    conexion.commit()  # Agregamos el commit manualmente. ACÁ SE CIERRA LA TRANSACCIÓN.
    print('Termina la transacción')

except Exception as e:
    conexion.rollback()
    print(f'Ocurrió un error, se hizo un rollback: {e}')
finally:
    conexion.close()