// Usar promise para encapsular uma chamada para leitura do arquivo

// console.log(caminho)
// function exibirConteudo(_, conteudo) {
//     console.log(conteudo.toString())
// }

// function lerArquivo(c) {
//     return new Promise(resolve => {
//         // const mostrarConteudo = fs.readFile(caminho, (_, data) => data)
//         // console.log(mostrarConteudo)
//         resolve(c)
//     })
// }

// lerArquivo(caminho)
//     .then(caminho => fs.readFile(caminho, exibirConteudo))
//     // .then(conteudoDoDocumento)
//     .then(console.log)

const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function (_, conteudo) {
            resolve(conteudo.toString())
        })
        // console.log('Depois de ler')
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas[1])
    .then(console.log)
