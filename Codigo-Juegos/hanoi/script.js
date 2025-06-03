document.addEventListener('DOMContentLoaded', () => {
    const torresContainer = document.getElementById('torres');
    const pasosContainer = document.getElementById('pasos');
    const discosInput = document.getElementById('discos');
    const iniciarBtn = document.getElementById('iniciar');
    const resolverBtn = document.getElementById('resolver');

    let discos = [];
    let torres = [[], [], []];
    let discoSeleccionado = null;
    let torreOrigen = null;
    let isAutoSolving = false;
    let solutionSteps = [];

    // Colores para los discos
    const colores = [
        '#FF5733', '#33FF57', '#3357FF', '#F3FF33',
        '#FF33F3', '#33FFF3', '#FF8C33', '#8C33FF'
    ];

    function iniciarJuego() {
        const numDiscos = parseInt(discosInput.value);
        if (numDiscos < 1 || numDiscos > 8) {
            alert("El número de discos debe estar entre 1 y 8.");
            return;
        }

        // Reiniciar juego
        torres = [[], [], []];
        discos = [];
        discoSeleccionado = null;
        torreOrigen = null;
        isAutoSolving = false;
        torresContainer.innerHTML = '';
        pasosContainer.innerHTML = '';

        // Crear discos (más grande al más pequeño)
        for (let i = numDiscos; i >= 1; i--) {
            discos.push(i);
            torres[0].push(i);
        }

        // Generar solución
        solutionSteps = resolverHanoi(numDiscos, 0, 2, 1);

        // Dibujar torres y discos
        for (let i = 0; i < 3; i++) {
            const torre = document.createElement('div');
            torre.className = 'torre';
            torre.id = `torre-${i}`;
            torre.addEventListener('click', () => manejarClicTorre(i));
            torresContainer.appendChild(torre);

            // Dibujar discos en la primera torre
            if (i === 0) {
                torres[0].forEach((disco, index) => {
                    const elementoDisco = document.createElement('div');
                    elementoDisco.className = 'disco';
                    elementoDisco.style.width = `${disco * 30}px`;
                    elementoDisco.style.backgroundColor = colores[disco - 1];
                    elementoDisco.dataset.valor = disco;
                    elementoDisco.style.order = index;
                    torre.appendChild(elementoDisco);
                });
            }
        }
    }

    function manejarClicTorre(torreIndex) {
        if (isAutoSolving) return;

        if (discoSeleccionado === null) {
            // Seleccionar disco de la torre
            if (torres[torreIndex].length > 0) {
                discoSeleccionado = torres[torreIndex][torres[torreIndex].length - 1];
                torreOrigen = torreIndex;
                resaltarDiscoSeleccionado();
            }
        } else {
            // Mover disco a la torre destino
            const torreDestino = torres[torreIndex];
            const discoActual = torres[torreOrigen][torres[torreOrigen].length - 1];

            if (torreIndex === torreOrigen) {
                // Click en la misma torre: deseleccionar
                deseleccionarDisco();
            } else if (torreDestino.length === 0 || torreDestino[torreDestino.length - 1] > discoActual) {
                // Mover disco
                const discoMovido = torres[torreOrigen].pop();
                torres[torreIndex].push(discoMovido);
                actualizarTorres();
                pasosContainer.innerHTML += `<p>Mover disco ${discoMovido} de ${String.fromCharCode(65 + torreOrigen)} a ${String.fromCharCode(65 + torreIndex)}</p>`;
                verificarGanador();
            } else {
                alert("¡No puedes colocar un disco más grande sobre uno más pequeño!");
            }
            deseleccionarDisco();
        }
    }

    function resaltarDiscoSeleccionado() {
        document.querySelectorAll('.disco').forEach(disco => {
            disco.style.boxShadow = '0 0 10px 2px rgba(255, 255, 255, 0.8)';
        });
    }

    function deseleccionarDisco() {
        document.querySelectorAll('.disco').forEach(disco => {
            disco.style.boxShadow = 'none';
        });
        discoSeleccionado = null;
        torreOrigen = null;
    }

    function actualizarTorres() {
        document.querySelectorAll('.torre').forEach((torre, index) => {
            torre.innerHTML = '';
            torres[index].forEach((disco, i) => {
                const elementoDisco = document.createElement('div');
                elementoDisco.className = 'disco';
                elementoDisco.style.width = `${disco * 30}px`;
                elementoDisco.style.backgroundColor = colores[disco - 1];
                elementoDisco.dataset.valor = disco;
                elementoDisco.style.order = i;
                torre.appendChild(elementoDisco);
            });
        });
    }

    function verificarGanador() {
        if (torres[2].length === discos.length) {
            setTimeout(() => alert("¡Ganaste! 🎉"), 100);
        }
    }

    async function resolverJuego() {
        if (isAutoSolving) {
            isAutoSolving = false;
            resolverBtn.textContent = 'Resolver Automático';
            deseleccionarDisco();
            return;
        }

        isAutoSolving = true;
        resolverBtn.textContent = 'Detener';
        pasosContainer.innerHTML = '<h3>Resolviendo...</h3>';

        for (let i = 0; i < solutionSteps.length; i++) {
            if (!isAutoSolving) break;

            const paso = solutionSteps[i];
            await moverDiscoAnimado(paso.disco, paso.desde, paso.hasta);

            // Actualizar estado de las torres
            const disco = torres[paso.desde].pop();
            torres[paso.hasta].push(disco);
            actualizarTorres();

            // Mostrar paso
            pasosContainer.innerHTML += `<p>${i + 1}. Mover disco ${disco} de ${String.fromCharCode(65 + paso.desde)} a ${String.fromCharCode(65 + paso.hasta)}</p>`;

            // Pequeña pausa entre movimientos
            await new Promise(resolve => setTimeout(resolve, 800));
        }

        isAutoSolving = false;
        resolverBtn.textContent = 'Resolver Automático';
        verificarGanador();
    }

    function moverDiscoAnimado(disco, desde, hasta) {
        return new Promise((resolve) => {
            const torreDesde = document.getElementById(`torre-${desde}`);
            const torreHasta = document.getElementById(`torre-${hasta}`);
            const elementoDisco = torreDesde.querySelector(`.disco[data-valor="${disco}"]`);

            if (!elementoDisco) {
                resolve();
                return;
            }

            // Clonar el disco para animación
            const discoAnimado = elementoDisco.cloneNode(true);
            discoAnimado.style.position = 'absolute';
            discoAnimado.style.left = `${torreDesde.offsetLeft + torreDesde.offsetWidth / 2 - disco * 15}px`;
            discoAnimado.style.top = `${torreDesde.offsetTop}px`;
            document.body.appendChild(discoAnimado);

            // Ocultar disco original temporalmente
            elementoDisco.style.visibility = 'hidden';

            // Animación
            const animationDuration = 800;
            const frames = 20;
            const frameTime = animationDuration / frames;

            // 1. Subir
            let currentFrame = 0;
            const subir = setInterval(() => {
                currentFrame++;
                const progress = currentFrame / frames;
                const newTop = torreDesde.offsetTop - 100 * progress;
                discoAnimado.style.top = `${newTop}px`;

                if (currentFrame >= frames) {
                    clearInterval(subir);

                    // 2. Mover horizontalmente
                    currentFrame = 0;
                    const startLeft = torreDesde.offsetLeft + torreDesde.offsetWidth / 2 - disco * 15;
                    const endLeft = torreHasta.offsetLeft + torreHasta.offsetWidth / 2 - disco * 15;
                    const mover = setInterval(() => {
                        currentFrame++;
                        const progress = currentFrame / frames;
                        const newLeft = startLeft + (endLeft - startLeft) * progress;
                        discoAnimado.style.left = `${newLeft}px`;

                        if (currentFrame >= frames) {
                            clearInterval(mover);

                            // 3. Bajar
                            currentFrame = 0;
                            const bajar = setInterval(() => {
                                currentFrame++;
                                const progress = currentFrame / frames;
                                const newTop = (torreDesde.offsetTop - 100) + (100 + 25 * torres[hasta].length) * progress;
                                discoAnimado.style.top = `${newTop}px`;

                                if (currentFrame >= frames) {
                                    clearInterval(bajar);
                                    document.body.removeChild(discoAnimado);
                                    elementoDisco.style.visibility = 'visible';
                                    resolve();
                                }
                            }, frameTime);
                        }
                    }, frameTime);
                }
            }, frameTime);
        });
    }

    function resolverHanoi(n, origen, destino, auxiliar, movimientos = []) {
        if (n === 1) {
            movimientos.push({ disco: 1, desde: origen, hasta: destino });
            return movimientos;
        }
        resolverHanoi(n - 1, origen, auxiliar, destino, movimientos);
        movimientos.push({ disco: n, desde: origen, hasta: destino });
        resolverHanoi(n - 1, auxiliar, destino, origen, movimientos);
        return movimientos;
    }

    iniciarBtn.addEventListener('click', iniciarJuego);
    resolverBtn.addEventListener('click', resolverJuego);
});