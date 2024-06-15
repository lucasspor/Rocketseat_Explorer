
const screen1 = document.querySelector(".screen")
const screen2 = document.querySelector(".screen2")
let random = Math.round(Math.random() * 10)
const btnTry = document.querySelector('#btnTry')
const btnAgain = document.querySelector('#btnAgain')
let xAttempts = 1


//eventos
btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', resetClick)
document.addEventListener('keydown', entreKey)

// funções
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")
  if (Number(inputNumber.value) > 10) {
    screen1.querySelector('p').innerText = 'Tente um numero entre 0 e 10'
  } else {
    if (Number(inputNumber.value) == random) {
      toggleScreen()

      screen2.querySelector(".screen2 h2").innerText = `Você acertou em ${xAttempts} tentativas!!`
    }
  }
  inputNumber.value = ""
  xAttempts++
}

function resetClick() {
  toggleScreen()
  xAttempts = 1
  random = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function entreKey(e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    resetClick()
  }
}
