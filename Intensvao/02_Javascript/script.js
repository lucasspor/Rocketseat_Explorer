// var helloWorld = alert('Hello World')
// let numberOne = Number(prompt("digite o seu primeiro numero"))
// let numberTwo = Number(prompt("digite o seu Segundo numero"))


// function sum() {

//   valor = alert(numberOne + numberTwo)
// } 
//sum()

// let value =  prompt('Digite o valor aqui dentro:')

// if(typeof value === 'string'){
//   alert('é uma string')
// } else{
//   alert('Não é uma string')
// }

// let isBoolean = "beto"

// if(typeof isBoolean == 'boolean'){
//   console.log('é booleano')
// } else {
//   console.log('não é booleano')
// }

let first = Number(prompt('PRIMEIRO NUmero'))
let second = Number(prompt("Segundo Numero"))

let sum = first + second
let sub = first - second
let mul = first * second
let div = first / second

let total = sum % 2 

if(total == 0){
  alert(`
  Estes são os seus numeros atribuidos ${first} e ${second}
  a soma deles é: ${sum}
  a subtração deles é: ${sub}
  a multiplicação deles é ${mul}
  a divisão deles é: ${div}
  a soma de seus numeros é um numero par
  `)
} else {
  alert(`
  Estes são os seus numeros atribuidos ${first} e ${second}
  a soma deles é: ${sum}
  a subtração deles é: ${sub}
  a multiplicação deles é ${mul}
  a divisão deles é: ${div}
  a soma de seus numeros é um numero impar
  `)
}



