function eager(a, b) {
  // processamento mais pesado
  const fim = Date.now() + 2500
  while (Date.now() < fim) { }

  const valor = Math.pow(a, 3)
  return valor + b
}

function lazy(a) {
  // processamento mais pesado
  const fim = Date.now() + 2500
  while (Date.now() < fim) { }

  const valor = Math.pow(a, 3)
  // só vai ser executada se tiver todos os dados para processamento
  return function (b) {
    return valor + b
  }
}

console.time('#1')
console.log(eager(3, 100))
console.log(eager(3, 200))
console.log(eager(3, 300))
console.timeEnd('#1')

console.time('#2')
const lazy3 = lazy(3) // acesso imediato a "valor" dento da função
console.log(lazy3(100))
console.log(lazy3(200))
console.log(lazy3(300))
console.timeEnd('#2')