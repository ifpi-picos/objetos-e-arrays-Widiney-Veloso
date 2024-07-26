const prompt = require('prompt-sync')();

function imprimirNome (nomeCompletoDoUsuario) {
    let nome = nomeCompletoDoUsuario.trim().split(' ')

    let primeiroNome = nome[0]
    let ultimoNome = nome[nome.length - 1]

    console.log(`o primeiro nome é ${primeiroNome} e o último nome é ${ultimoNome}`)
}

let nomeCompleto = prompt("digite seu nome completo: ")
imprimirNome(nomeCompleto)


