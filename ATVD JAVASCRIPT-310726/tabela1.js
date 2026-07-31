// Cartão de Visita Digital

let nome = prompt("Digite seu nome completo:");
let cargo = prompt("Digite seu cargo ou função:");
let empresa = prompt("Digite o nome da empresa ou escola:");
let email = prompt("Digite seu e-mail:");

nome = nome.toUpperCase();

console.log("===== CARTÃO DE VISITA =====");
console.log("Nome: " + nome);
console.log("Cargo/Função: " + cargo);
console.log("Empresa/Escola: " + empresa);
console.log("E-mail: " + email);

alert("Cartão de visita gerado com sucesso!");