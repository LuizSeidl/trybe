// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
let n = 5;
let simbolo = '*';
let linha = '';

for (let linhaIndex = 0; linhaIndex <= n; linhaIndex += 1) {
  linha = linha + simbolo;
  console.log(linha);
};