let N = 8;
let soluciones = [];
let actual = 0;

function esSeguro(fila, col, tablero) {
  for (let i = 0; i < fila; i++) {
    if (tablero[i] === col || 
        tablero[i] - i === col - fila || 
        tablero[i] + i === col + fila) {
      return false;
    }
  }
  return true;
}

function resolverFila(fila = 0, tablero = []) {
  if (fila === N) {
    soluciones.push([...tablero]);
    return;
  }

  for (let col = 0; col < N; col++) {
    if (esSeguro(fila, col, tablero)) {
      tablero.push(col);
      resolverFila(fila + 1, tablero);
      tablero.pop();
    }
  }
}

function resolver() {
  const input = document.getElementById("nInput");
  N = parseInt(input.value);
  if (N < 4 || N > 9) {
    alert("Por favor ingrese un número entre 4 y 9");
    return;
  }
  soluciones = [];
  actual = 0;
  resolverFila();
  mostrar(soluciones[actual]);
}

function mostrar(tablero) {
  const contenedor = document.getElementById("tablero");
  contenedor.innerHTML = "";
  const tabla = document.createElement("table");

  for (let fila = 0; fila < N; fila++) {
    const tr = document.createElement("tr");
    for (let col = 0; col < N; col++) {
      const td = document.createElement("td");
      td.className = ((fila + col) % 2 === 0) ? "white" : "black";
      if (tablero[fila] === col) {
        td.textContent = "♛";
        td.classList.add("queen");
      }
      tr.appendChild(td);
    }
    tabla.appendChild(tr);
  }

  contenedor.appendChild(tabla);
  document.getElementById("indices").innerText = `Índices de columnas: [${tablero.join(", ")}]`;
  document.getElementById("contador").innerText = `Solución ${actual + 1} de ${soluciones.length}`;
}

function siguiente() {
  if (soluciones.length === 0) return;
  actual = (actual + 1) % soluciones.length;
  mostrar(soluciones[actual]);
}

function anterior() {
  if (soluciones.length === 0) return;
  actual = (actual - 1 + soluciones.length) % soluciones.length;
  mostrar(soluciones[actual]);
}
