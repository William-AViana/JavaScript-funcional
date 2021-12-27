function exec(fn, a, b) {
    return fn(a, b)
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (x, y) => console.log(x - y)

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 56, 38)

// Exemplo de função callback
const cb = () => console.log('Foi...')
setInterval(cb, 1000) // a casa segundo vai chamar a função