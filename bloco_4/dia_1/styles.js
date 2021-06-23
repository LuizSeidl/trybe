let nota = 82;
let situacao;
nota = 80;

if (nota >= 80) {
  situacao = 'Aprovado'
  console.log(situacao)
} 
else if (nota < 80 && nota >= 60) {
  situacao = 'Lista de Espera'
  console.log(situacao)  
} 
else {
  situacao = 'Reprovado'
  console.log(situacao)
}

switch (situacao) {
  case 'Aprovado':
    console.log('Parabéns')
    break;

  case 'Lista de Espera':
    console.log('Lista de Espera')
    break;

  case 'Reprovado':
    console.log('Reprovado')
    break;

  default: 'não se aplica'
    break;
}