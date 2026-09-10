console.log("Olá, Luiz! Seja bem-vindo!");
console.log("Olá, Gustavo! Seja bem-vindo!");
console.log("Olá. Cecilia! Seja bem-vinda!");

function darBoasVindas(nome) {
    console.log(`Olá, ${nome}! Seja bem-vindo!`);
}

darBoasVindas("Luiz");
darBoasVindas("Gustavo");
darBoasVindas("Cecilia");



function apresentar(nome, idade) {
    console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
}

apresentar("Gaby",24)

function estaEstudando(nome) {
    console.log(`${nome} está estudando.`);
}

estaEstudando("Isadora");






function somar(a, b) {
    return a + b;
}

somar(5, 3)

let resultado = somar(5, 3);


console.log(resultado);


function verificarMedia(valor1, valor2) {
    let media = (valor1 + valor2) / 2;

    if (media > 6) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

verificarMedia(8, 7);



