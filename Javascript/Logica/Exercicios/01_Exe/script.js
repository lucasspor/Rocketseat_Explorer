let numberOne = Number(prompt('Me diga seu primeiro numero!'));
let numberTwo = Number(prompt('Me diga seu segundo numero!'));

const sum = numberOne + numberTwo;
const sub = numberOne - numberTwo;
const div = numberOne / numberTwo;
const plus = numberOne * numberTwo;
const rest = numberOne % numberTwo;

alert(`
  A soma de dois numeros: ${sum} 
  A subtração dos dois números: ${sub}
  A multiplicação dos dois números: ${plus}
  A divisão dos dois números: ${div}
  O resto da divisão dos dois números: ${rest}
`);

const even = sum % 2

if (even == 0){
  alert('A soma deste numero é par');
} else{
  alert('A soma deste numero é impar');
}

if(numberOne != numberTwo){
  alert('Estes numeros são diferentes')
} else{
  alert('Estes numeros são iguais')
}

