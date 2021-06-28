// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//   Array de teste: [2, 3, 6, 7, 10, 1]; .
//   Valor esperado no retorno da função: 4 .
let teste = [2, 3, 6, 7, 10, 1];

function maiorIndex(teste) {
  let maior = 0;
  for (let index in teste) {
    if (teste[maior] > teste[index]) {
      maior = index;
    }
  }
  return maior;
}
console.log(maiorIndex([2, 3, 6, 7, 10, 1]));