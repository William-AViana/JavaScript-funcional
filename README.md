# Criando uma Mentalidade de Programador JavaScript

# Paradigma
Modelo mental para te guiar e transformar o problema do mundo real em softwere.

- Analizar o mundo como um objeto e suas relações.
    - Os objetos tem atributos, responsabilidades e relação entre esses objetos.

- Paradigma Funcional
    - trabalha com dados constantes (consome mais de memória e processamento)
    - lida melhor com processamento paralelo

- Paradigma Procedural
    - não precisa se preocupar muito com os príncipios pro seu código.

- Paradigma Orientação a Objetos
    - precisa se preocupar com os princípios a serem aplicados no seu código.

## Padrão Declarativo vs Imperativo

### Imperativo
    - Sempre trabalhando com as váriaveis
    - Foco no fluxo
    - Estados mutáveis
    - Como (explica como cada passo deve ser feito, a linguagem deve resolver)
    - Maior quantidade de código
    - Baixo nível
    - Mais conhecido
    - Mais explícito

### Exemplo de código imperativo

```js
const notas = [8.7, 6.8, 7.7, 7.7, 9.2, 5.3, 8.0]

function media(notas) {
    let total = 0
    for(let i = 0; i < notas.length; i++){
        total += notas[i]
    }

    return total / notas.length
}

const mediaTurma = media(notas)
console.log(`Média é ${mediaTurma}`)
```

### Declarativo
    - Não altera os dados que já existem, cria-se uma evolução dos dados 
    existentes para manipulação.
    - Foco na lógica
    - Imutabilidade
    - O que ( você define o que deve ser feito )
    - Alto nível de escalabilidade
    - Menos conhecido
    - Menos explícito

### Exemplos de código declarativo

```js
const notas = [8.7, 6.8, 7.7, 7.7, 9.2, 5.3, 8.0]

const somar = (a, b) => a + b
const dividir = (a, b) => a / b

const mediaTurma = dividir(
    notas.reduce(somar),
    notas.length
)
console.log(`Média é ${mediaTurma}`)
```

# Paradigma Funcional

## Conceitos importantes

-  First Class Functions (funções são valores)

### Declaração simples
```js
function dobro(x) {
    return x * 2
}

dobro(20)
```
### Atribuindo uma função anônima
```js
const dobro = function(x) {
    return x * 2
}
dobro(20)
```
### Composição de Funções
```js
const exagerado = composicao(
    gritar, // <-- É uma função
    enfatizar, // <-- É uma função
)

// exagerado também é uma função
exagerado('PARA')
```