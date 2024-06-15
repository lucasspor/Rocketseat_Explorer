let students = [
  {
    name: "josé",
    n1: 10,
    n2: 10,
    n3: 4
  },
  {
    name: "antonia",
    n1: 10,
    n2: 2,
    n3: 10
  },
  {
    name: "emerson",
    n1: 10,
    n2: 10,
    n3: 10
  }
]

function studentsAverage(student) {

  let calc = ((student.n1 + student.n2 + student.n3) / 3)

  if (calc >= 7) {
    alert(`A média do aluno ${student.name} foi: ${calc}. Parabéns ${student.name}, você foi aprovado no concurso!`)
  } else {
    alert(`A média do aluno ${student.name} foi: ${calc}. Não foi dessa vez ${student.name}, tente novamente!`)
  }
}

for (let student of students) {
  studentsAverage(student)
}