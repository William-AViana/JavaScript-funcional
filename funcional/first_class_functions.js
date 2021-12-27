/* Diz-se que uma linguagem de programação possui funções de primeira classe 
  quando funções nessa linguagem são tratadas como qualquer outra variável */

// js é uma linguagem que trabalha função como cidadão de primeira linha
const x = 3
const y = function (txt) {
  return `Esse é o valor de texto: ${txt}`
}

const z = () => console.log('Zzzzzzz!')

console.log(x)
console.log(y('Eita texto!'))
z()