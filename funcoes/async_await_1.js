function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {

            resolve()
        }, tempo)
    })
}

// node não suporta await diretamente no arquivo
// esperarPor(2000)
//     .then(esperarPor)
//     .then(() => console.log('Executando Promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando Promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando Promise 3...'))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornarValorRapido() {
    return 20
}

// função assíncrona
async function executar() {
    // await vai executar um código assíncrono e extrair o valor após resolver
    // por traz do async/await tem que ter uma promise
    let valor = await retornarValorRapido()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()