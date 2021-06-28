// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//   Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
//   Valor esperado no retorno da função: 6 .
function menorIndex(teste) {
  let menor = 0;
  for (let index in teste) {
    if (teste[menor] > teste[index]) {
      menor = index;
    }
  }
  return menor;
}
console.log(menorIndex([2, 4, 6, 7, 10, 0, -3]));