from NumerosIgualesExceptions import NumerosIgualesException

resultado = None

try:
    a = int(input('Ingrese el primer número: '))
    b = int(input('Ingrese el segundo número: '))
    if a == b:
        raise NumerosIgualesException('Son números iguales') # raise se utiliza para lanzar una excepción
    resultado = a / b # Lo modifico
except TypeError as e:
    print(f'TypeError - Ocurrió un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrió un error: {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrió un error: {type(e)}')
else:
    print("No se arrojó ninguna excepción")
finally: # Siempre se va a ejecutar este código#
    print("Ejecución de este bloque finally")

print(f'El resultado es: {resultado}')
print('Seguimos...')

