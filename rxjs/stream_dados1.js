function gerarNumeros() {
  return {
    init(fn, interval = 1000) {
      let num = 0
      const timer = setInterval(() => {
        fn(num++)
      }, interval);
      return {
        stop() {
          clearInterval(timer)
        }
      }
    }
  }
};

const temp1 = gerarNumeros();
const exec1 = temp1.init(num => {
  console.log(`#1: ${num * 2}`);
});

const temp2 = gerarNumeros();
const exec2 = temp2.init(num => {
  console.log(`#2: ${num + 10}`);
}, 2000);

setTimeout(() => {
  exec1.stop();
  exec2.stop();
}, 10000)