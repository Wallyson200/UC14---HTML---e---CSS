// Verificador de Força de Senha

let senha = prompt("Digite uma senha:");

let tamanho = senha.length;
let temMaiuscula = /[A-Z]/.test(senha);
let temMinuscula = /[a-z]/.test(senha);

let classificacao;

if (tamanho >= 8 && temMaiuscula && temMinuscula) {
    classificacao = "Forte";
} else {
    classificacao = "Fraca";
}

console.log("===== VERIFICADOR DE SENHA =====");
console.log("Quantidade de caracteres: " + tamanho);
console.log("Classificação: " + classificacao);

alert(
"Tamanho da senha: " + tamanho +
"\nClassificação: " + classificacao
);