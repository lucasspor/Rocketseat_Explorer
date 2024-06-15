import { Error } from "./alert.js"
import { Modal } from "./modal.js"
import { notAnumber, calculateIMC } from "./utils.js"

const form = document.querySelector("form")
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value
  const result = calculateIMC(height, weight)
  const message = `Este é o seu IMC ${result}`
  const showAlertError = notAnumber(weight) || notAnumber(height)

  if(showAlertError){
    Error.open()
    return;
  }
  Error.close()
  
  Modal.message.innerText = message
  Modal.open()
}

inputHeight.oninput = () => Error.close()
inputWeight.oninput = () => Error.close()
