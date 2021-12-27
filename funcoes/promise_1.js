// Dado que vai ser resolvido no futuro
// console.log(typeof Promise) // Promise é uma função

function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(elemento) {
    return elemento[0]
}

const letraMinuscula = letra => letra.toLowerCase()

// Deve ser passado apenas um único valor
let p = new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
    // resolve(3)
})
// .then pode ser chamado quantas vezes for nescessário
p
    .then(primeiroElemento)
    //o próximo ".then" será o resultado do anterior
    .then(primeiraLetra)
    .then(letraMinuscula)
    // O ".then" sempre recebe um único parâmetro então pode chamar "console.log"
    //.then(letra => console.log(letra))
    .then(console.log)

let a = new Promise(resolve => {
    // pode ser gerado um objeto ou uma lista
    resolve({
        x: 'teste',
        y: 'outro',
        z: 10
    })
})
    .then(valor => valor.x)

    .then(string => string.toUpperCase())

    .then(newString => newString
        .charAt(0)
        .toUpperCase() +
        newString.slice(1).toLowerCase()
    )

    .then(console.log)