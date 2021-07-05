// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//   Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
//   Valor esperado no retorno da função: 2 .
function repetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexRepetido = 0;

  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let i in numeros) {
      if (verificaNumero === numeros[i]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexRepetido];
}

console.log(repetido([2, 3, 2, 5, 8, 2, 3]));