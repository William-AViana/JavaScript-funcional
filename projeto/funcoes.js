const fs = require('fs')
const path = require('path')

function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const arquivos = fs.readdirSync(caminho).map(arquivo => {
        return path.join(caminho, arquivo)
      })
      resolve(arquivos)
    } catch (e) {
      reject(e)
    }
  })
}

// exemplo de refatoração
function elementosTerminadosCom(padraoTextual) {
  return function (array) {
    return array.filter(el => el.endsWith(padraoTextual))
  }
}

// function lerConteudosDosArquivos(conteudo) { 
//   return new Promise((resolve, reject) => {
//     try {
//       let conteudos = fs.readFile(conteudo, (err, conteudo) => {
//         conteudo.toString()
//       },
//         resolve(conteudos))
//     } catch (e) {
//       reject(e)
//     }
//   })
// }

function lerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' })
      resolve(conteudo.toString())
    } catch (e) {
      reject(e)
    }
  })
}

function lerArquivos(caminhos) {
  return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

function removerElementosSeVazio(array) {
  return array.filter(el => el.trim())
}

function removerElementosSeIncluir(padraoTextual) {
  return function (array) {
    return array.filter(el => !el.includes(padraoTextual))
  }
}

function removerElementosSeApenasNumeros(array) {
  return array.filter(el => {
    const num = parseInt(el.trim())
    return num !== num
  })
}

function removerSimbolos(simbolos) {
  return function (array) {
    return array.map(el => {
      return simbolos.reduce((acc, simbolo) => {
        return acc.split(simbolo).join('')
      }, el)
    })
  }
}

function mesclarElementos(array) {
  return array.join(' ')
}

function separarTextoPor(simbolo) {
  return function (texto) {
    return texto.split(simbolo)
  }
}

function agruparElementos(palavras) {
  return Object.values(palavras.reduce((acc, palavra) => {
    const el = palavra.toLowerCase()
    const qtde = acc[el] ? acc[el].qtde + 1 : 1
    acc[el] = { elemento: el, qtde }
    return acc
  }, {}))
}
// função era impura antes do [...array], estava alterando os dados originais
function ordenarPorAtributoNumerico(attr, ordem = 'asc') {
  return function (array) {
    const asc = (o1, o2) => o1[attr] - o2[attr]
    const desc = (o1, o2) => o2[attr] - o1[attr]
    return [...array].sort(ordem === 'asc' ? asc : desc)
    //sort() gera uma alteração no array, clonar o array com spred
    // a função passa a ser pura
  }
}

// Desafio composição com Promise
function composicao(...fns) {
  return function (valor) {
    return fns.reduce(async (acc, fn) => {
      // Verificar se é uma promisse e executar await
      if (Promise.resolve(acc) === acc) {
        return fn(await acc)
      } else {
        return fn(acc)
      }
    }, valor)
  }
}

module.exports = {
  composicao,
  lerDiretorio,
  lerArquivo,
  lerArquivos,
  elementosTerminadosCom,
  removerElementosSeVazio,
  removerElementosSeIncluir,
  removerElementosSeApenasNumeros,
  removerSimbolos,
  mesclarElementos,
  separarTextoPor,
  agruparElementos,
  ordenarPorAtributoNumerico
}