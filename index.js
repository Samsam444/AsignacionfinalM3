function jugarAhorcado(jugador) {
    const palabrasAhorcado = ["luna", "lampara", "miel", "computadora", "numero", "bicicleta", "internet", "termometro"];
    const palabraCompu = palabrasAhorcado[Math.floor(Math.random() * palabrasAhorcado.length)];
    let encontrarLetra = "_".repeat(palabraCompu.length).split("");
    let intentos = 5;
    let intentosFallidos = 0;
    let LetrasUsadas = [];

    while (intentosFallidos < intentos && encontrarLetra.includes("_")) {
        let estadoJuego = encontrarLetra.join(" ");
        let titulo = prompt(`Intenta adivinar la palabra: ${estadoJuego}\nTienes ${intentos - intentosFallidos} intentos\nLetras ya elegidas: ${LetrasUsadas.join(", ")}\nElige una letra:`);

        if (titulo === null){
            break;
        }
        let letra = titulo.toLowerCase();

        if (letra.length !== 1 || !/[a-z]/.test(letra)) {
            alert("Por favor, coloque una sola letra.");
            continue;
        }
        if (LetrasUsadas.includes(letra)) {
            alert("Ya has elegido esa letra. Intenta con otra.");
            continue;
        }
        LetrasUsadas.push(letra);

        let letraEncontrada = false;
        for (let i = 0; i < palabraCompu.length; i++) {
            if(palabraCompu[i] === letra){
                encontrarLetra[i] = letra;
                letraEncontrada = true;
            }
        }
        if (!letraEncontrada) {
            intentosFallidos++;
            alert(`La letra ${letra} no está en la palabra. Te quedan ${intentos - intentosFallidos} intentos.`);
        } else {
            alert (`La letra ${letra} está en la palabra.`);
        }
        if (!encontrarLetra.includes("_")) {
            alert(`¡Felicidades! Adivinaste la palabra: ${palabraCompu}`);
        }else if (intentosFallidos === intentos) {
            alert(`Te quedaste sin intentos. La palabra era: ${palabraCompu} ¡Perdiste!`);
        }
    }
    return `Has terminado el juego.`;}

    console.log(jugarAhorcado("Jugador"));