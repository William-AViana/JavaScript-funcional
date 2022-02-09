const path = require('path')
const fn = require('./funcoes')
const fs = require('fs')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
  '.', '?', '-', ',', '"', '♪',
  '_', '<i>', '</i>', '\r', '[', ']',
  '(', ')'
]

// Desafio usando composição
fn.composicao(
  fn.lerDiretorio,
  fn.elementosTerminadosCom('.srt'),
  fn.lerArquivos,
  fn.mesclarElementos,
  fn.separarTextoPor('\n'),
  fn.removerElementosSeVazio,
  fn.removerElementosSeIncluir('-->'),
  fn.removerElementosSeApenasNumeros,
  fn.removerSimbolos(simbolos),
  fn.mesclarElementos,
  fn.separarTextoPor(' '),
  fn.removerElementosSeVazio,
  fn.removerElementosSeApenasNumeros,
  fn.agruparElementos,
  fn.ordenarPorAtributoNumerico('qtde', 'desc')
)(caminho)
  .then(console.log)


// fn.lerDiretorio(caminho)
//   .then(
//   .then(
//   .then(
//   .then(
//   .then(
//   .then(
//   .then(
//   .then(
//   .then(
//   .then(
//   .then(
//   .then(
//   .then(
//   .then(
//   // desafio tranformar em um arquivo
//   .then(console.log)