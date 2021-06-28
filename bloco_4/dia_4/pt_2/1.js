// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
//   Exemplo de palíndromo: arara .
//   verificaPalindrome('arara') ;
//   Retorno esperado: true
//   verificaPalindrome('desenvolvimento') ;
//   Retorno esperado: false
function palindromo(string) {
  for (const key in string) {
    if (string[key] != string[(string.length -1) - key]){
      return false;
    }
  }
  return true;
}

console.log(palindromo('futebol'));