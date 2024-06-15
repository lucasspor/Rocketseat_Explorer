const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const closed = document.querySelector('#closed')
const crecked = document.querySelector('.screen2 button')

closed.addEventListener('click', toggleClick)
crecked.addEventListener('click', Reset)
document.addEventListener('keydown', enterKey)

function enterKey(keybord){
  if(keybord.key == 'Enter' && screen1.classList.contains('hide')){
    toggleClick()
  }

}

function Reset(){
  toggleClick()
}

function toggleClick(){
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}