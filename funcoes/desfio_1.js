// somar(3)(4)(5)
function somar(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
const somarAB = somar(3)(4)
console.log(somarAB(13))
console.log(somar(13)(20)(30))

// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
// calcular(3)(7)(fn)

function calcular(x) {
    return function (y) {
        return function (fn) {
            return fn(x, y)
        }
    }
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

const resultado1 = calcular(6)(4)(subtrair)
const resultado2 = calcular(6)(5)(multiplicar)
console.log(resultado1)
console.log(resultado2)