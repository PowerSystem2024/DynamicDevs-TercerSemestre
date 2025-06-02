function seleccionarPersonajeJugador() {
    let mensaje = "No seleccionaste ningún personaje";
    let personajeJugador = "";

    if (document.getElementById("Zuko").checked) {
        personajeJugador = "Zuko 🔥";
    } else if (document.getElementById("Katara").checked) {
        personajeJugador = "Katara 💧";
    } else if (document.getElementById("Aang").checked) {
        personajeJugador = "Aang 💨";
    } else if (document.getElementById("Toph").checked) {
        personajeJugador = "Toph 🌱";
    }

    if (personajeJugador !== "") {
        alert("Seleccionaste a " + personajeJugador);

        // Mostrar personaje del jugador en el HTML
        const contenedorJugador = document.getElementById("personaje-jugador");
        contenedorJugador.innerText = personajeJugador;

        aleatoria(personajeJugador); // PASAMOS el personaje del jugador
    } else {
        alert(mensaje);
    }
}

function aleatoria(personajeJugador) {
    const personajesPC = ["Zuko 🔥", "Katara 💧", "Aang 💨", "Toph 🌱"];

    // Filtramos el personaje del jugador
    const opcionesPC = personajesPC.filter(p => p !== personajeJugador);

    // Elegimos al azar uno diferente
    const indice = Math.floor(Math.random() * opcionesPC.length);
    const personajePC = opcionesPC[indice];

    alert("El personaje de la PC es: " + personajePC);

    // Mostrar personaje de la PC en el HTML
    const contenedorPC = document.getElementById("personaje-pc");
    contenedorPC.innerText = personajePC;
}

// Event listener para botón de selección de personaje
let botonPersonajeJugador = document.getElementById("boton-personaje");
botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);
