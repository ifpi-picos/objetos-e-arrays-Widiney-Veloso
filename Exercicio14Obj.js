const prompt = require('prompt-sync')(); //extensão para o prompt funcionar

let filmes = [];

filmes.push(prompt("Digite o nome do filme 1:"));
filmes.push(prompt("Digite o nome do filme 2:"));
filmes.push(prompt("Digite o nome do filme 3:"));
filmes.push(prompt("Digite o nome do filme 4:"));
filmes.push(prompt("Digite o nome do filme 5:"));

let filmesescolhidos = filmes.join(", ");

for (let i = 0; i < 5; i++){
    console.log(`O nome do filmes é: `  + filmes[i]);
}
