// 4- Depois, faça uma pirâmide com n asteriscos de base:

let n = 5;
let simbolo = '*';
let linha = '';

let matriz = (n + 1) / 2;
let esquerda = matriz;
let direita = matriz;

for (let linhaIndex = 0; linhaIndex <= matriz; linhaIndex += 1) {
  for (let coluna = 0; coluna <= n; coluna += 1) {
    if (coluna > esquerda && coluna < direita) {
      linha = linha + simbolo;
    } else {
      linha = linha + ' ';
    }
  }
  console.log(linha);
  linha = '';
  direita += 1;
  esquerda -= 1
};