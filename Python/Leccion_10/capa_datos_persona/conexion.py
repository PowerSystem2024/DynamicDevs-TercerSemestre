# Vamos a crear una clase que se encargue de la conexión a la base de datos

from psycopg2 import pool
from logger_base import log
import sys

# Vamos a crear una clase que se encargue de la conexión a la base de datos
class Conexion:
    # Atributos de clase para la conexión a la base de datos
    _DATABASE = "test_bd"
    _USERNAME = "postgres"
    _PASSWORD = "admin"
    _DB_PORT = "5432"
    _HOST = "127.0.0.1"
    _MIN_CON = 1
    _MAX_CON = 5
    _pool = None

    # Método para obtener la conexión a la base de datos
    @classmethod
    def obtener_conexion(cls):
        conexion = cls.obtener_pool().getconn()
        log.debug(f"Conexión obtenida: {conexion}")
        return conexion

     # Método para obtener el cursor de la conexión   
    @classmethod
    def obtener_cursor(cls):
        pass  

    # Método para el pool de conexiones
    @classmethod
    def obtener_pool(cls):
        if cls._pool is None:
            try:
                cls._pool = pool.SimpleConnectionPool(
                    cls._MIN_CON,
                    cls._MAX_CON,
                    host=cls._HOST,
                    user=cls._USERNAME,
                    password=cls._PASSWORD,
                    database=cls._DATABASE,
                    port=cls._DB_PORT
                )
                log.debug(f"Creación del pool de conexiones exitosa: {cls._pool}")
                return cls._pool
            except Exception as e:
                log.error(f"Error al crear el pool de conexiones: {e}")
                sys.exit()
        else:
            return cls._pool

# Vamos a probar la clase Conexion
if __name__ == "__main__":
    conexion1 = Conexion.obtener_conexion()
    conexion2 = Conexion.obtener_conexion()
    conexion3 = Conexion.obtener_conexion()
    conexion4 = Conexion.obtener_conexion()
    conexion5 = Conexion.obtener_conexion()
