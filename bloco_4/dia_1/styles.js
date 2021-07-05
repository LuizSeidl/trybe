// 1-Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
let a = 45;
let b = 20;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

// 2-Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
if (a > b) {
  console.log('a Wins')
} else {
  console.log('b Wins')
};

// 3-Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
let c = 105;

if (a > b && a > c) {
  console.log('a Wins')
} else if(a < b && b > c) {
  console.log('b Wins')
} else {
  console.log('c Wins')
}

//4-Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
if (a > 0) {
  console.log('positive')
} else if(a < 0) {
  console.log('negative')
} else {
  console.log('zero')
}

// 5-Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
let somaDosAngulos = a + b + c;

if (somaDosAngulos === 180) {
  console.log(true);
} else if(a < 0 || b < 0 || c <0) {
  console.log('Erro: Angulo invalido');
}
else{
  console.log(false);
}

// 6-Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
let peçaXadrez = 'rainha';

switch (peçaXadrez.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

// 7-Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

let nota = 76;

if (nota < 0 || nota > 100) {
  console.log("Erro, nota incorreta!");
} else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else {
  console.log("F");
}

// 8-Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false 
let par = false;

if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
  par = true;
};
console.log(par);

// 9-Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false .
let impar = false;

if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
  impar = true;
};
console.log(impar);

// 10-Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
let custo = 10;
let venda = 20;

if (custo >= 0 && venda >= 0) {
  let custoTotal = custo * 1.2;
  let lucroEmMil = (venda - custoTotal) * 1000;
  console.log(lucroEmMil);
} else {
  'Erro, valor nao pode ser negativo'
}

// 11-Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
let bruto = 5500;
let base;
let liquido;


if (bruto <= 1556.94) {
  base = bruto - (bruto * 0.08);
} else if (bruto > 1556.94 && bruto <= 2594.92) {
  base = bruto - (bruto * 0.09);
} else if (bruto > 2594.92 && bruto <= 5189.82) {
  base = bruto - (bruto * 0.11);
} else{
  base = (bruto - 570.88);
}

if (base > 1903.98 && base <= 2826.65) {
  liquido = base - (base * 0.075 - 142.80);
} else if (base > 2826.65 && base <= 3751.05) {
  liquido = base - (base * 0.15 - 354.80);
} else if (base > 3751.05 && base <= 4664.68) {
  liquido = base - (base * 0.225 - 636.13);
} else if (base > 4664.68) {
  liquido = base - (base * 0.275 - 869.36);
} else {
  liquido = base;
}
console.log(liquido);