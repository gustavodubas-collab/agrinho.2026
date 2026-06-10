// Controle do tamanho da fonte

let tamanhoFonte = 16;

document.getElementById("aumentarFonte")
.addEventListener("click", function () {

    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
});

document.getElementById("diminuirFonte")
.addEventListener("click", function () {

    tamanhoFonte -= 2;

    if (tamanhoFonte >= 10) {
        document.body.style.fontSize = tamanhoFonte + "px";
    }
});

// Alto contraste

document.getElementById("contraste")
.addEventListener("click", function () {

    document.body.classList.toggle("alto-contraste");
});

// Gerador de dicas

const dicas = [

    "Evite queimadas e denuncie ações ilegais.",

    "Plante árvores sempre que possível.",

    "Preserve as áreas de vegetação nativa.",

    "Economize recursos naturais.",

    "Proteja os rios e nascentes."
];

document.getElementById("botaoDica")
.addEventListener("click", function () {

    let numeroAleatorio =
        Math.floor(Math.random() * dicas.length);

    document.getElementById("resultadoDica")
    .textContent = dicas[numeroAleatorio];
});

// Quiz

function responderQuiz(respostaCorreta) {

    const resultado =
        document.getElementById("resultadoQuiz");

    if (respostaCorreta) {

        resultado.textContent =
            "Parabéns! Você acertou.";

    } else {

        resultado.textContent =
            "Resposta incorreta. Tente novamente.";
    }
}

// Botão do vídeo

document.getElementById("abrirVideo")
.addEventListener("click", function () {

    window.open(
        "https://www.youtube.com/watch?v=IpVjJ3f8f6Q",
        "_blank"
    );
});
