// Mock simular uma dependência externa

let qtdeDeExecucoes = 0
// função pura
function somar(a, b) {
  qtdeDeExecucoes++ // efeitos colaterais observáveis
  return a + b
}

console.log(qtdeDeExecucoes)
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(qtdeDeExecucoes)