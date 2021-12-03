function fun5() {
    console.log('timeout')
}

function fun4() {
    fun5()
}

function fun3() {
    setTimeout(() => fun4(), 5000)
    console.log('fn3')
}

function fun2() {
    fun3()
}

function fun1() {
    fun2()
}

function main() {
    fun1()
}

main()
console.log('Fim!')