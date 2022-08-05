//function comparaNumeros(num1, num2) {
//const sãoIguais = num1 === num2;
   //const soma = num1 + num2;

   //if(sãoIguais) {
    //return "São Iguais";
   //}
   
   //else(sãoIguais) {
    // return "Não são Iguais";
  // }

  //return sãoIguais ? "São iguais" : "Não são iguais"; IF TERNARIO
//}


function comparaNumeros(num1, num2) {
    if(!num1 || !num2) return'Defina 2 numeros!';

    const primeiraFrase = criePrimeiraFrase(num1, num2);
    const segundaFrase = crieSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criePrimeiraFrase(num1, num2){
    let sãoIguais = '';
    if(num1 !== num2) {
        sãoIguais = 'não';
    }
    return `Os números ${num1} e ${num2} ${sãoIguais} são iguais.`
}

function crieSegundaFrase(num1, num2){
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma >20;

    if(compara10) {
        resultado10 = 'maior';

    }

    if(compara20) {
        resultado10 = 'maior';
        
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 é ${resultado20} que 20.`
}

console.log(comparaNumeros());
console.log(comparaNumeros(1, 2));
console.log(comparaNumeros(6, 6));

