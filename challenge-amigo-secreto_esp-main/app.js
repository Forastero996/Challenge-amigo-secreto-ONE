// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let sorteados = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
    }
    input.value = '';
}

function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = '';
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos dos amigos para realizar el sorteo.");
        return;
    }

    sorteados = [];
    const resultados = [];
    const copiasAmigos = [...amigos];

    // Se sortea aleatoriamente y se asegura que nadie se sortee a sí mismo.
    for (let i = 0; i < amigos.length; i++) {
        let amigo = copiasAmigos.splice(Math.floor(Math.random() * copiasAmigos.length), 1)[0];

        // Evitar que el amigo se sortee a sí mismo
        while (amigo === amigos[i]) {
            copiasAmigos.push(amigo); // Devolver al array para volver a intentar el sorteo
            amigo = copiasAmigos.splice(Math.floor(Math.random() * copiasAmigos.length), 1)[0];
        }

        sorteados.push({ amigo: amigos[i], amigoSecreto: amigo });
    }

    mostrarResultado();
}

function mostrarResultado() {
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = ''; // Limpiar resultados previos

    sorteados.forEach((sorteo) => {
        const li = document.createElement("li");
        li.textContent = `${sorteo.amigo} -> ${sorteo.amigoSecreto}`;
        resultadoElement.appendChild(li);
    });
}

function resetearSorteo() {
    amigos = [];
    sorteados = [];
    actualizarLista();
    document.getElementById("resultado").innerHTML = ''; // Limpiar resultados
}
