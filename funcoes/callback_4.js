const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

const getNome = item => item.nome
const qtdeMaiorQueZero = item => item.qtde > 0
const foraDeEstoque = item => item.qtde === 0

// const nomesItensValidos = carrinho
//     .filter(qtdeMaiorQueZero)
//     .map(getNome)

// const itensSemEstoque = carrinho
//     .filter(foraDeEstoque)
//     .map(getNome) + ' Está sem estoque!'

// console.log(nomesItensValidos)
// console.log(itensSemEstoque)

// Implementando o método filter
Array.prototype.meuFilter = function (fn) {
    const newArray = []

    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            newArray.push(this[i])
        }
    }

    return newArray
}

const nomesItensValidos2 = carrinho
    .meuFilter(qtdeMaiorQueZero)
    .map(getNome)

const itensSemEstoque2 = carrinho
    .meuFilter(foraDeEstoque)
    .map(getNome) + ' Está sem estoque!'

console.log(nomesItensValidos2)
console.log(itensSemEstoque2)