function esperarPor(tempo) {
    const futuro = Date.now() + tempo
    while (Date.now() < futuro) { }
}

setTimeout(() => console.log('Exec #01'), 400)
setTimeout(() => {
    esperarPor(3000)
    console.log('Exex #02')
}, 3000)

esperarPor(5000)
console.log('Fim!')