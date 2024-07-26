let carros = [
    {nome: 'uno', ano: 2024},
    {nome: 'gol', ano: 2000},
    {nome: 'siena', ano: 2016},
    {nome: 'golf', ano: 2020},
    {nome: 'up', ano: 2010}
]

let carrosMaisNovos = carros.filter((carro) => {
    return carro.ano > 2010
})
console.log(carrosMaisNovos)