 
function mostrarCidade() {

    let cidade = document.getElementById("cidade").value;

    document.getElementById("mensagem").textContent =
        "Eu quero conhecer " + cidade + "!";

}

function destacarMensagem() {

    let mensagem = document.getElementById("mensagem");

    mensagem.style.color = "blue";
    mensagem.style.fontSize = "25px";

}

let numero = 10;

function aumentar() {

    numero = numero + 1;

    document.getElementById("contador").textContent = numero;

}

function diminuir() {

    numero = numero - 1;

    document.getElementById("contador").textContent = numero;

}