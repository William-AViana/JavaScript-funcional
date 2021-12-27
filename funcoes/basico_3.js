// arrow function
const felizNatal = () => console.log('Feliz Natal')
// executando com console.log() retorna undefined
felizNatal()

const saudacao = nome => `Fala ${nome}, blz?!?`
console.log(saudacao('william'))

const somar = (...numeros) => {
    // o operador rest "..." adiciona todos os valores dentro de um array
    // se executar typeof returna um objeto (array é um objeto em JS)
    // console.log(Array.isArray(numeros))
    let total = 0
    for (let n of numeros) {
        total += n
    }
    return total
}

console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5, 6))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

const subtrair = (a, b) => a - b
console.log(subtrair(4, 1))

const potencia = base => exp => Math.pow(base, exp)
console.log(potencia(2)(8))


// this e como ele é utilizado
Array.prototype.ultimo = function () {
    console.log(this[this.length - 1]) // this está se referenciando aos valores do array
}

Array.prototype.primeiro = () => {
    console.log(this[0])
    // this funciona diferente com arrow function retorna undefined
}

const numeros = [1, 2, 3, 54321]
numeros.ultimo()
numeros.primeiro()