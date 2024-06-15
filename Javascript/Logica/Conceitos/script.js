/*
  Encontre a solução do Problema
  
  Pergunte o nome do usuario e escreva a mensagem
  "Olá, [nome do usuario]"
*/
function name() {
  let name = prompt('Digite seu nome abaixo!');
  alert(`Olá, ${name} tudo bom?`);
}

/* 
  Solicite 2 números, faça a soma deles
  e apresente o resultado final ao usuário
*/

function sum() {
  let numberOne = prompt('qual o primeiro numero?');
  let numberTwo = prompt('qual o segundo numero?');
  let result = Number(numberOne) + Number(numberTwo);

  alert(`a soma de ${numberOne} + ${numberTwo} = ${result}`);

}

/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

function math() {
  let firstNumber = prompt('qual o primeiro numero?');
  let secondNumber = prompt('qual o segundo numero?');

  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);

  const sum = firstNumber + secondNumber;
  const sub = firstNumber - secondNumber;
  const div = firstNumber / secondNumber;
  const plus = firstNumber * secondNumber;
  const rest = firstNumber % secondNumber;

  alert(`Esta é a Soma: ${sum}`);
  alert(`Esta é a Divisão: ${div}`);
  alert(`Esta é a subtração: ${sub}`);
  alert(`Esta é a Multiplicação: ${plus}`);
  alert(`Esta é a resto da divisão: ${rest}`);
}

/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

function average() {
  let student = prompt('Digite seu nome: ')
  let n1 = Number(prompt('Digite sua primeira nota: '));
  let n2 = Number(prompt('Digite sua segunda nota '));
  let n3 = Number(prompt('Digite sua terceira nota '));
  let average = (n1 + n2 + n3) / 3;

  result = average >= 6;
  average = average.toFixed(2).replace(".", ",");

  if (result) {
    alert(`Parabéns ${student} sua nota é ${average}. Você passou!!`)
  } else {
    alert(`Que pena ${student} você não passou :(, sua nota foi ${average}. Tente na próxima, você consegue!!`)
  }
}

/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/

function items() {
  let item = []
  for (let i = 0; i < 10; i++) {
    let itemName = prompt('Adicione seu item a sacola')

    item[i] = itemName
  }

  alert(`estes são seus itens: ${item}`)

}

/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

function random() {
  result = prompt('Advinhe o numero que estou pensando que esta entre 0 e 10!!');
  const random = Math.round(Math.random() * 10);

  let xAttemps = 0;

  while (Number(result) != random) {
    result = prompt('Erro tente novamente');
    xAttemps++
  }

  alert(`parabens você advinhou em ${xAttemps} tentativas`);
}

/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

function list() {
  let option
  let items = []

  while (option != 3) {

    option = Number(prompt(`
      Olá usuário! Digite o número da opção desejada
      
      1. Cadastrar um item na lista
      2. Mostrar itens cadastrados
      3. Sair do programa
    `))

    if (option == 1) {
      let item = prompt("Digite o nome do item")
      items.push(item)
    } else if (option == 2) {
      if (items.length == 0) {
        alert('não há items aqui!')
      } else {
        alert(items)
      }
    } else {
      alert('Bye bye people!')
    }
    console.log(option, items)
  }

}

/* doing with switch */
function listSwitch() {
  let option
  let items = []

  while (option != 3) {

    option = Number(prompt(`
      Olá usuário! Digite o número da opção desejada
      
      1. Cadastrar um item na lista
      2. Mostrar itens cadastrados
      3. Sair do programa
    `))

    switch (option) {
      case 1:
        let item = prompt("Digite o nome do item")
        items.push(item)
        break;
      case 2:
        if (items.length == 0) {
          alert('não há items aqui!')
        } else {
          alert(items)
        }
        break;
      case 3:
        alert('Bye bye people!')
        break;
      default: alert('opção invalida, tente novamente')
    }
    console.log(option, items)
  }

}

/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter 
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

function patients() {
  let patients = [
    {
      name: "josé",
      age: 22,
      weight: 40,
      height: 148
    },
    {
      name: "livia",
      age: 60,
      weight: 60,
      height: 176
    },
    {
      name: "antonio",
      age: 23,
      weight: 70,
      height: 180
    }
  ]

  let patientsNames = []

  for (let index = 0; index < patients.length; index++) {
    patientsNames[index] = patients[index].name;
  }

  alert(`
  Estes são os pacientes ${patientsNames}`)
}

/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

function imcCalc() {
  const patients = [
    {
      name: "Luiz",
      age: 20,
      weight: 100,
      height: 190
    },
    {
      name: "Alexandra",
      age: 27,
      weight: 70,
      height: 170
    },
    {
      name: "Carlos",
      age: 42,
      weight: 90,
      height: 180
    },
  ]

  function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
  }
  
  function printPatientIMC(patient) {
    return `
      Paciente ${patient.name} possui o IMC de
      ${IMC(patient.weight, patient.height)}
    `
  }
  
  for (let patient of patients) {
    let IMCmessage = printPatientIMC(patient)
    alert(IMCmessage)
  }

}