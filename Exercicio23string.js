const prompt = require('prompt-sync')();

function imprimirNome (nomeCompletoDoUsuario) {
    let nome = nomeCompletoDoUsuario.trim().split(' ')

    let primeiroNome = nome[0]

    console.log(`o primeiro nome é ${primeiroNome}.`)
}

let nomeCompleto = prompt("digite seu nome completo: ")
imprimirNome(nomeCompleto)