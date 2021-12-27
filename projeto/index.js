const path = require('path')
const fn = require('./funcoes')
const fs = require('fs')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
  '.', '?', '-', ',', '"', '♪',
  '_', '<i>', '</i>', '\r', '[', ']',
  '(', ')'
]

fn.lerDiretorio(caminho)
  .then(fn.elementosTerminadosCom('.srt')) // exemplo de refatoração
  .then(arquivosSRT => fn.lerArquivos(arquivosSRT))
  .then(fn.mesclarElementos)
  .then(fn.separarTextoPor('\n'))
  .then(linhas => fn.removerElementosSeVazio(linhas))
  .then(fn.removerElementosSeIncluir('-->'))
  .then(fn.removerElementosSeApenasNumeros)
  .then(fn.removerSimbolos(simbolos))
  .then(fn.mesclarElementos)
  .then(fn.separarTextoPor(' '))
  .then(fn.removerElementosSeVazio) // reuso de uma função
  .then(fn.removerElementosSeApenasNumeros)
  .then(fn.agruparElementos)
  .then(fn.ordenarPorAtributoNumerico('qtde', 'desc'))
  // desafio tranformar em um arquivo
  .then(console.log)