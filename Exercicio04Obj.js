const produtoEmEstoque = {
    nome: 'Notebook',
    preço: 3000,
    quantidade: 7
}

let valorDoProduto = produtoEmEstoque.preço * produtoEmEstoque.quantidade

console.log(`O valor total de estoque do é: R$ ${valorDoProduto.toFixed(2)}` ) 