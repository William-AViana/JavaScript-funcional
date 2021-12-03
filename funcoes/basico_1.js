let a = 4
console.log(a)

// Function Declaration
function bomDia() {
    console.log('Bom dia!')
}
bomDia()

// Function expression (armazenar uma função dentro de uma variável)
const boaTarde = function () {
    console.log('Boa Tarde!')
}

let x = boaTarde() // undefined
console.log(x)

function somar(a, b = 0) {
    return a + b
}

let resultado = somar(3, 4)
console.log(resultado)

resultado = somar(3, 5, 5, 6, 7, 8, 9) // recebe somente os parametros que foram declarados
console.log(resultado)

resultado = somar(3) // o segundo elemento passa a ser undefined
console.log(resultado) // NaN se o valor de "b" não tiver um valor padrão