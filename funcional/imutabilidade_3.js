// Podemos usar Object.Freeze() BOA PRÁTICA
const pessoa = Object.freeze({
  nome: 'Maria',
  altura: 1.60,
  cidade: 'São Paulo',
  end: Object.freeze({
    rua: 'Abc'
  })
})
// pessoa = {} // não é possível atribuir a uma constante

// Atribuição por referência
// const novaPessoa = pessoa
// pessoa vai ser alterado por ter a mesma referencia na memória

// Passagem po referência
function alteraPessoa(pessoa) {
  const novaPessoa = { ...pessoa } // clone apenas no primeiro nível dos atrib.
  novaPessoa.nome = 'João'
  novaPessoa.cidade = 'Piauí'
  novaPessoa.end.rua = 'Teste' // uma vez modificado vai alterar os demais obj
  return novaPessoa
}
const novaPessoa = alteraPessoa(pessoa)
console.log(pessoa)
console.log(novaPessoa)

// passagem por valor
let a = 3
let b = a // atribuição por valor (cópia!)

a++
b--

console.log(a, b)
