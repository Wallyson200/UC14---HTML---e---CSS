
const formulario = document.getElementById("formNotas");
const resultado = document.getElementById("resultado");
const nome = document.getElementById("nome");
const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");
const limpar = document.getElementById("limpar");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const estudante = nome.value.trim();
    const valores = [nota1.value, nota2.value, nota3.value];

    if (estudante === "") {
        mostrarErro("Digite o nome do estudante.");
        return;
    }

    if (valores.some(valor => valor.trim() === "")) {
        mostrarErro("Preencha as três notas.");
        return;
    }

    const notas = valores.map(Number);

    if (notas.some(nota => !Number.isFinite(nota) || nota < 0 || nota > 10)) {
        mostrarErro("As notas devem estar entre 0 e 10.");
        return;
    }

    const media = (notas[0] + notas[1] + notas[2]) / 3;

    let situacao;

    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    resultado.innerHTML = `
        <h3>Resultado do estudante</h3>
        <p>Nome: ${escaparTexto(estudante)}</p>
        <p class="media">Média: ${media.toFixed(2).replace(".", ",")}</p>
        <p class="situacao">Situação: ${situacao}</p>
    `;

    if (media >= 7) {
        resultado.style.borderLeftColor = "green";
    } else if (media >= 5) {
        resultado.style.borderLeftColor = "orange";
    } else {
        resultado.style.borderLeftColor = "red";
    }
});

function mostrarErro(mensagem) {
    resultado.innerHTML = `<p class="erro">${mensagem}</p>`;
    resultado.style.borderLeftColor = "red";
}

function escaparTexto(texto) {
    const elemento = document.createElement("span");
    elemento.textContent = texto;
    return elemento.innerHTML;
}

limpar.addEventListener("click", function() {
    formulario.reset();
    resultado.innerHTML = "<p>O resultado aparecerá aqui.</p>";
    resultado.style.borderLeftColor = "#285a9f";
});

