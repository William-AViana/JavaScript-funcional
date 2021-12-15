
function ordenar(array) {
  return [...array].sort()
  // gera um novo array e mantêm a imutabilidade dos dados
}

// para não alterar os dados pode usar Object.freeze([[3, 1, 7, 9, 4, 6]])
//nums.sort() // altera os dados original
const nums = [3, 1, 7, 9, 4, 6]
const numsOrdenados = ordenar(nums)
console.log(nums, numsOrdenados)