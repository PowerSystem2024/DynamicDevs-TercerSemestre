from psycopg2 import pool
from logger_base import log
import sys

class Conexion:
    _DATABASE = 'test_bd'
    _USERNAME = 'postgres'
    _PASSWORD = '2122'
    _DB_PORT = '5432'
    _HOST = '127.0.0.1'
    _MIN_CON = 1
    _MAX_CON = 5
    _pool = None

    @classmethod
    def obtenerConexión(cls):
        conexion = cls.obtenerPool().getconn()
        log.debug(f"Conexion obtenida del pool: {conexion}")
        return conexion

    @classmethod
    def obtenerCursor(cls):
      pass

    @classmethod
    def obtenerPool(cls):
        if cls._pool is None:
            try:
                cls._pool = pool.SimpleConnectionPool(cls._MIN_CON,
                                                      cls._MAX_CON,
                                                      host=cls._HOST,
                                                      user=cls._USERNAME,
                                                      password=cls._PASSWORD,
                                                      port=cls._DB_PORT,
                                                      database=cls._DATABASE)
                log.debug(f"creacion del pool exitosa: {cls._pool}")
                return cls._pool
            except Exception as e:
                log.error(f"Ocurrio un error al obtener el pool: {e}")
                sys.exit()
        else:
            return cls._pool

    @classmethod
    def liberarConexión(cls, conexión):
        cls.obtenerPool().putconn(conexión)
        log.debug(f'Regresamos la conexión del pool: {conexión}')

    @classmethod
    def cerrarConexiones(cls):
        cls.obtenerPool().closeall()



#  Esto debe ir fuera de la clase
if __name__ == '__main__':
    conexión1 = Conexion.obtenerConexión()
    Conexion.liberarConexión(conexión1)
    conexion2 = Conexion.obtenerConexión()
    Conexion.liberarConexión(conexion2)
    conexion3 = Conexion.obtenerConexión()
    Conexion.liberarConexión(conexion3)
    conexión4 = Conexion.obtenerConexión()
    conexión5 = Conexion.obtenerConexión()
    conexion6 = Conexion.obtenerConexión()


