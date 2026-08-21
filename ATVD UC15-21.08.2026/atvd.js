let temperatura = Number(prompt("Digite a temperatura:"));

let mensagem;

if (temperatura < 15) {
    mensagem = "Está frio!";
} else if (temperatura <= 25) {
    mensagem = "O clima está agradável!";
} else if (temperatura > 35) {
    mensagem = "Está muito quente!";
} else {
    mensagem = "Está quente!";
}

document.getElementById("temperatura").textContent =
    "Temperatura informada: " + temperatura + "°C";

document.getElementById("mensagem").textContent = mensagem;

console.log("Temperatura:", temperatura);
console.log("Classificação:", mensagem);