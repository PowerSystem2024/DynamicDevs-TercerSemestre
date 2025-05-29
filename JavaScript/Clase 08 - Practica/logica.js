document.addEventListener("DOMContentLoaded", () => {
  const N = 8;
  const movimientosCaballo = [
    [2, 1], [1, 2], [-1, 2], [-2, 1],
    [-2, -1], [-1, -2], [1, -2], [2, -1]
  ];

  const tableroHTML = document.getElementById('tablero');
  const botonResolver = document.getElementById('resolver');

  function crearTableroVisual() {
    tableroHTML.innerHTML = '';
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const casilla = document.createElement('div');
        casilla.classList.add('casilla');
        (i + j) % 2 === 0 ? casilla.classList.add('blanca') : casilla.classList.add('negra');
        casilla.id = `casilla-${i}-${j}`;
        tableroHTML.appendChild(casilla);
      }
    }
  }

  function crearTableroLogico() {
    return Array.from({ length: N }, () => Array(N).fill(-1));
  }

  function esMovimientoValido(x, y, tablero) {
    return (x >= 0 && x < N && y >= 0 && y < N && tablero[x][y] === -1);
  }

  function resolverSaltoCaballo(x, y, movimientoNum, tablero, recorrido) {
    tablero[x][y] = movimientoNum;
    recorrido.push([x, y]);

    if (movimientoNum === N * N - 1) return true;

    for (let i = 0; i < movimientosCaballo.length; i++) {
      const [dx, dy] = movimientosCaballo[i];
      const nuevoX = x + dx;
      const nuevoY = y + dy;

      if (esMovimientoValido(nuevoX, nuevoY, tablero)) {
        if (resolverSaltoCaballo(nuevoX, nuevoY, movimientoNum + 1, tablero, recorrido)) {
          return true;
        }
      }
    }

    tablero[x][y] = -1;
    recorrido.pop();
    return false;
  }

  function animarRecorrido(recorrido) {
    let paso = 0;

    function mover() {
      if (paso > 0) {
        const [prevX, prevY] = recorrido[paso - 1];
        const prevCasilla = document.getElementById(`casilla-${prevX}-${prevY}`);
        prevCasilla.textContent = paso - 1; 
      }

      if (paso < recorrido.length) {
        const [x, y] = recorrido[paso];
        const casilla = document.getElementById(`casilla-${x}-${y}`);
        casilla.textContent = '♞';
        paso++;
        setTimeout(mover, 400); // Este seria el tiempo entre cada paso de la animación
      }
    }

    mover();
  }

  function ejecutarAlgoritmo() {
    const tablero = crearTableroLogico();
    const recorrido = [];

    if (resolverSaltoCaballo(0, 0, 0, tablero, recorrido)) {
      animarRecorrido(recorrido);
    } else {
      alert("No se encontró una solución.");
    }
  }

  botonResolver.addEventListener('click', () => {
    crearTableroVisual();
    ejecutarAlgoritmo();
  });

  crearTableroVisual();
});
