// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//   Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
//   Valor esperado no retorno da função: Fernanda .
function contaCaracteres(teste) {
  let menor = 0;
  for (let index in teste) {
    if (teste[menor] > teste[index]) {
      menor = index;
    }
  }
  return menor;
}
console.log(contaCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));