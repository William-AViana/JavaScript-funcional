const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

// Gerar array somente com os nomes
const getNomes = item => item.nome
const somenteNomes = carrinho.map(getNomes)
console.log(somenteNomes)
// Gerar array com os valores dos produtos vezes a quantidade
const getTotal = item => item.qtde * item.preco
const totais = carrinho.map(getTotal)
console.log(totais)

// Implementando o map
Array.prototype.meuMap = function (fn) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        novoArray.push(fn(this[i], i, this))
    }
    return novoArray
}

const getNomes2 = item => item.nome
const somenteNomes2 = carrinho.meuMap(getNomes2)
console.log(somenteNomes2)

const getTotal2 = item => item.qtde * item.preco
const totais2 = carrinho.meuMap(getTotal2)
console.log(totais2)