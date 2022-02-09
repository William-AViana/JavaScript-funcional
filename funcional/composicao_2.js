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

function gritar(texto) {
  return texto.toUpperCase()
}

function enfatizar(texto) {
  return `${texto}!!!`
}

function tornarLento(texto) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(texto.split('').join(' '))
    }, 3000)
  })
}

const exagerado = composicao(
  gritar,
  enfatizar,
  tornarLento
)

const menosExagerado = composicao(
  gritar,
  enfatizar,
)

exagerado('para')
  .then(console.log)
menosExagerado('Cuidado com o Teste')
  .then(console.log)