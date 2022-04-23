function gerarNumeros(fn) {
  let num = 0
  setInterval(() => {
    fn(num++)
  }, 1000);
};

gerarNumeros(numero => {
  console.log(`#1: ${numero * 2}`);
});

gerarNumeros(n => {
  console.log(`#2: ${n + 10}`);
});
