from NumerosIgualesException import NumerosIgualesException

resultado = None
# a = 10
# b = 0
try:
    a = int(input("Introduce el primer numero: "))
    b = int(input("Introduce el segundo numero: "))
    if a == b:
        raise NumerosIgualesException('Son números iguales')
    resultado = a / b
except TypeError as e:
    print(f'TypeError - Ocurrio un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrio un error: {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrio un error: {type(e)}')
else:
    print('No se ha lanzado ninguna excepcion')
finally:
    print('El bloque finally se ejecuta siempre')

print(f'El resultado es: {resultado}')
print('seguimos...')
