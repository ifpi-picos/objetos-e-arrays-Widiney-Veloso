let pessoas = [
{nome: 'Ana', idade: 17},
{nome: 'Bruno', idade: 10},
{nome: 'Carlos', idade: 15},
{nome: 'Diana', idade: 22},
{nome: 'Eduardo', idade: 16}
];

let primeiraPessoaMaiorDeIdade = pessoas.find((pessoa) => {
    return pessoa.idade > 18;
})

console.log(primeiraPessoaMaiorDeIdade)