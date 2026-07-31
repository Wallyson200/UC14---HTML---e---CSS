// Calculadora de Desconto

let produto = prompt("Digite o nome do produto:");
let precoOriginal = Number(prompt("Digite o preço original do produto:"));
let percentualDesconto = Number(prompt("Digite o percentual de desconto:"));

let valorDesconto = precoOriginal * percentualDesconto / 100;
let precoFinal = precoOriginal - valorDesconto;

console.log("===== CALCULADORA DE DESCONTO =====");
console.log("Produto: " + produto);
console.log("Preço original: R$ " + precoOriginal.toFixed(2));
console.log("Desconto: " + percentualDesconto + "%");
console.log("Valor do desconto: R$ " + valorDesconto.toFixed(2));
console.log("Preço final: R$ " + precoFinal.toFixed(2));

alert(
"Produto: " + produto +
"\nPreço original: R$ " + precoOriginal.toFixed(2) +
"\nDesconto: " + percentualDesconto + "%" +
"\nValor do desconto: R$ " + valorDesconto.toFixed(2) +
"\nPreço final: R$ " + precoFinal.toFixed(2)
);