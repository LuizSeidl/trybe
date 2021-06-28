// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
let n = 5;
let simbolo = '*';
let linha = '';

for (let linhaIndex = 0; linhaIndex < n; linhaIndex += 1) {
  linha = linha + simbolo;
};
for (let linhaIndex = 0; linhaIndex < n; linhaIndex += 1) {
  console.log(linha);
};