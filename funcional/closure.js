/* Closure é quando uma função "lembra" seu escopo léxico, 
  mesmo quando a função é executada fora desse escopo */

const somarXMais3 = require('./closure_escopo')

const x = 1000
console.log(somarXMais3())
// retorna 6 pois o valor de x está no escopo léxico da função
// nesse casa o arquivo "closure_escopo.js"

// console.log(fora())