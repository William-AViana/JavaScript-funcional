const readline = require('readline');

function obterResposta(pergunta) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise(resolve => {
    rl.question(pergunta, res => {
      resolve(res);
      rl.close();
    });
  })
}

// observer
function namorada() {
  console.log('N: Apagar as luzes...');
  console.log('N: Fazer silêncio...');
  console.log('N: Surpresa!!!');
}

// observer
function sindico() {
  setTimeout(() => {
    console.log('S: Monitorando barulho!')
  }, 5000)
}

// subject
async function porteiro(interessados) {
  while (true) {
    const resp = await obterResposta('O namorado chegou? (s/N/q)')
    if (resp.toLowerCase() === 's') {
      // notifica os obsrvadores
      (interessados || []).forEach(obs => obs());
      break
    } else if (resp.toLowerCase() === 'q') {
      break
    };
  };
};

/* Chamda da função -> Registra os observadores! 
   Os observadores: namorada e sindico
   O subject é o porteiro!
*/
porteiro([namorada, sindico])