const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;

const calculaDescontos = (salario, descontos) => salario - descontos;

const verifiqueSe = (valor) => {
  const assercoes = {
    exatamenteiguala(esperado) {
      if (valor !== esperado) {
        throw new Error();
      }
    },
  };
  return assercoes;
};

const teste = (titulo, funcaoTeste) => {
  try {
    funcaoTeste();
    console.log(`${titulo} passou`);
  } catch {
    console.error(`${titulo} não passou`);
  }
};

teste('somaHorasExtras', () => {
  const esperado = 2500;
  const retornado = somaHorasExtras(2000, 500);
  verifiqueSe(retornado).exatamenteiguala(esperado);
});

teste('calculaDesconto', () => {
  const esperado = 2300;
  const retornado = calculaDescontos(2500, 200);
  verifiqueSe(retornado).exatamenteiguala(esperado);
});
