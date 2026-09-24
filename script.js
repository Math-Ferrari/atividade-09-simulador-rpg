function atacar() {
    document.getElementById("historia").innerText =
        "Você decidiu atacar o monstro. Depois de uma batalha difícil, você conseguiu vencer!";

    document.getElementById("opcoes").innerHTML =
        '<button onclick="reiniciar()">Jogar novamente</button>';
}

function fugir() {
    document.getElementById("historia").innerText =
        "Você decidiu fugir. Depois de correr pela floresta, encontrou um caminho seguro para casa.";

    document.getElementById("opcoes").innerHTML =
        '<button onclick="reiniciar()">Jogar novamente</button>';
}

function reiniciar() {
    location.reload();
}