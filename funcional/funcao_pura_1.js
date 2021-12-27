// não é possível fazer um programa inteiro só com funções puras

/* 
  Uma função pura é uma função em que o valor de retorno é determinado APENAS 
    por seus valores de entrada, sem efeitos colaterais observáveis 
    - se alterar algum dado fora da função é um efeito colateral observável
  */


const PI = 3.141592
// Função impura - PI é um valor externo todo dado externo torna a função impura
function araeaCirc(raio) {
  return raio * raio * Math.PI
  // chamando Math.PI continua sendo uma função impura
}

console.log(araeaCirc(10))

// Função Pura
function araeaCircPura(raio, pi) {
  return raio * raio * pi
}

console.log(araeaCircPura(10, 3.14))
console.log(araeaCircPura(10, 3.141592))
console.log(araeaCircPura(10, Math.PI))