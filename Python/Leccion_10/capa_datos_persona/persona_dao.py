# Vamos a crear la Clase PersonaDao que se encargue de las operaciones CRUD de la clase Persona
# Dao significa Data Access Object
# CRUD significa Create, Read, Update, Delete
from Persona import Persona
from conexion import Conexion
from logger_base import log

class PersonaDao:
    _SELECCIONAR = "SELECT * FROM persona ORDER BY id_persona"
    _INSERTAR = "INSERT INTO persona(nombre, apellido, email) VALUES(%s, %s, %s)"
    _ACTUALIZAR = "UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s"
    _ELIMINAR = "DELETE FROM persona WHERE id_persona=%s"

    # Definimos los metodos de la clase PersonaDao
    @classmethod
    def seleccionar(cls):
        with Conexion.obtener_conexion():
            with Conexion.obtener_cursor() as cursor:
                cursor.execute(cls._SELECCIONAR)
                registros = cursor.fetchall()
                personas = []
                for registro in registros:
                    persona = Persona(registro[0], registro[1], registro[2], registro[3])
                    personas.append(persona)
                return personas

    # Definimos los metodos de insercion, actualizacion y eliminacion
    @classmethod
    def insertar(cls, persona):
        with Conexion.obtener_conexion():
            with Conexion.obtener_cursor() as cursor:
                cursor.execute(cls._INSERTAR, (persona.nombre, persona.apellido, persona.email))
                log.debug(f'Persona insertada: {persona}')
                return cursor.rowcount

    @classmethod
    def actualizar(cls, persona):
        with Conexion.obtener_conexion():
            with Conexion.obtener_cursor() as cursor:
                valores = (persona.nombre, persona.apellido, persona.email, persona.id_persona)
                cursor.execute(cls._ACTUALIZAR, valores)
                log.debug(f'Persona actualizada: {persona}')
                return cursor.rowcount

    @classmethod
    def eliminar(cls, persona):
        with Conexion.obtener_conexion():
            with Conexion.obtener_cursor() as cursor:
                valores = (persona.id_persona,)
                cursor.execute(cls._ELIMINAR, valores)
                log.debug(f'Objeto eliminado: {persona}')
                return cursor.rowcount

if __name__ == "__main__":
    # Eliminar un registro de prueba
    # persona1 = Persona(id_persona=12)
    # personas_eliminadas = PersonaDao.eliminar(persona1)
    # log.debug(f'Personas eliminadas: {personas_eliminadas}')

    #Actualizar un registro de prueba
    # persona1 = Persona(1, 'Juan Jose', 'Pena', 'jjpena@example.com')
    # personas_actualizadas = PersonaDao.actualizar(persona1)
    # log.debug(f'Personas actualizadas: {personas_actualizadas}')

    # Insertar un registro de prueba
    # persona1 = Persona(nombre='Alfredo', apellido='Torres', email='alfredo.torres@example.com')
    # personas_insertadas = PersonaDao.insertar(persona1)
    # log.debug(f'Personas insertadas: {personas_insertadas}')

    # Probamos el metodo seleccionar de la clase PersonaDao
    personas = PersonaDao.seleccionar()
    for persona in personas:
        log.debug(persona)

    