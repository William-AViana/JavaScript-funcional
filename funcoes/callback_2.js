const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')
// console.log(caminho)

function exibirConteudo(err, conteudo) {
    // se não importa o primeiro parametro pode passar apenas "_"
    console.log(conteudo.toString())
}

// Exemplo não asíncrono
console.log('Início...')
fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
console.log('Fim...')

// Exemplo asíncrono
console.log('Inicio async.')
const conteudo = fs.readFileSync(caminho.toString())
console.log(conteudo.toString())
console.log('Fim async.')