const nums = [4, 8, 3, 2, 1, 9, 3]

// #3 -Recursividade e imutabilidade
function somarArray(array, total = 0) {
  if (array.length === 0) {
    return total
  }
  return somarArray(array.slice(1), total + array[0])
}
const total = somarArray(nums)
console.log(total)


// #2 - Reduce Funcional "declarativo"
// const somar = (a, b) => a + b
// const total = nums.reduce(somar)
// console.log(total)

// #1 - Dados mutáveis menos funcional "imperativo"
// let total = 0

// for (let i = 0; i < nums.length; i++) {
//   total += nums[i]
// }

// console.log(total)