function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            // Gerar erro
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}
// Erro de promise deve ser tratado para a aplicação não parar
// funcionarOuNao('Testando', 0.5)
//     .then(v => `Valor: ${v}`)
//     .then(
//         v => console.log(v),
//         err => console.log(`Erro Específico: ${err}`) // reject
//     )
//     // O tratamento específico dentro de um ".then" o catch não será chamado
//     .then(() => console.log('Quase Fim!'))
//     // Normalmente o catch vai no final
//     .catch(err => console.log(`Erro Geral: ${err}`))
//     // Após o tratamento do erro não é gerado mais informações
//     .then(() => console.log('Fim!'))


function funcionarOuNao2(valor, chanceErro) {
    // Com try{} catch(e){}
    return new Promise((resolve, reject) => {
        try {
            conso.log('Eita')
            if (Math.random() < chanceErro) {
                // Gerar erro
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

funcionarOuNao2('Testando', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v), // não executa por ser um erro
        // err => console.log(`Erro Específico: ${err}`) // catch(e)
    )
    // O tratamento específico dentro de um ".then" o catch não será chamado
    .then(() => console.log('Quase Fim!'))
    // Normalmente o catch vai no final
    .catch(err => console.log(`Erro Geral: ${err}`))
    // Após o tratamento do erro, não é gerado mais informações
    .then(() => console.log('Fim!'))