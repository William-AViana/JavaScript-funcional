// classe construtora
class Produto {

    constructor(nome, preco, desc = 0.5) {
        this.nome = nome
        this.preco = preco
        this.desc = desc
    }
    // Chamar uma função
    // precoFinal() {
    //     return this.preco * (1 - this.desc)
    // }

    // Get chamar como um atributo "p1.nome"
    get nome() {
        return `Nome do produto: ${this._nome}`
    }
    // Alterar atributos com set "p1.nome = 'novoNome'"
    set nome(novoNome) {
        // a variável "_nome" foi criada aqui
        this._nome = novoNome.toUpperCase()
    }

    get precoFinal() {
        return this.preco * (1 - this.desc).toFixed(2)
    }

    set preco(novoPreco) {
        if (novoPreco >= 0) {
            this._preco = novoPreco
        }
    }

    get preco() {
        return this._preco
    }
    // funções dentro de uma classe é chamada de método
}

const p1 = new Produto('Caneta', 10)
console.log(p1.nome) // era um atributo agora passou a ser um método get / set
const p2 = new Produto('Geladeira', 10000, 0.8)
p2.preco = -2000
console.log(p2.preco)

// console.log(`Produto: ${p1.nome} valor com desconto R$ ${p1.precoFinal().toFixed(2)}`)
console.log(`Produto: ${p1.nome} valor com desconto R$ ${p1.precoFinal.toFixed(2)}`)
// console.log(`Produto: ${p2.nome} valor com desconto R$ ${p2.precoFinal().toFixed(2)}`)
console.log(`Produto: ${p2.nome} valor com desconto R$ ${p2.precoFinal.toFixed(2)}`)
// acessando como se fosse um atributo
console.log(p2.precoFinal)
console.log(p1)
console.log(typeof Produto)