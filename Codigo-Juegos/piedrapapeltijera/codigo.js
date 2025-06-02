let victoriasJugador = 0;
let victoriasPc = 0;
let partidasJugadas = 0;
const maxPartidas = 3;

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function jugar() {
    if (partidasJugadas >= maxPartidas) {
        alert("Ya se jugaron 3 partidas. Presiona 'Reiniciar juego' para empezar de nuevo.");
        return;
    }

    let jugador = parseInt(prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera"));
    if (![1, 2, 3].includes(jugador)) {
        alert("Elección inválida. Intenta nuevamente.");
        return;
    }

    let pc = numeroAleatorio(1, 3);
    mostrarEleccion("Jugador", jugador);
    mostrarEleccion("Computadora", pc);

    let resultado = "";
    if (jugador === pc) {
        resultado = "Empate.";
    } else if (
        (jugador === 1 && pc === 3) ||
        (jugador === 2 && pc === 1) ||
        (jugador === 3 && pc === 2)
    ) {
        resultado = "Ganaste esta ronda.";
        victoriasJugador++;
    } else {
        resultado = "Perdiste esta ronda.";
        victoriasPc++;
    }

    partidasJugadas++;
    alert(resultado);
    actualizarTanteador();

    if (partidasJugadas === maxPartidas) {
        alert("Fin de las 3 partidas.\nResultado final:\nJugador: " + victoriasJugador + "\nComputadora: " + victoriasPc);
    }
}

function mostrarEleccion(quien, eleccion) {
    let texto = "";
    if (eleccion === 1) texto = "piedra";
    else if (eleccion === 2) texto = "papel";
    else if (eleccion === 3) texto = "tijera";
    alert(`${quien} eligió ${texto}`);
}

function actualizarTanteador() {
    document.getElementById("jugador").textContent = victoriasJugador;
    document.getElementById("pc").textContent = victoriasPc;
    document.getElementById("partidas").textContent = partidasJugadas;
}

function reiniciar() {
    victoriasJugador = 0;
    victoriasPc = 0;
    partidasJugadas = 0;
    actualizarTanteador();
    alert("Juego reiniciado. ¡A jugar!");
}