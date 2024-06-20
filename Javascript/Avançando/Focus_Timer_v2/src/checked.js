const buttonToggle = document.querySelectorAll('.sound-button');

buttonToggle.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.toggle('checked');
  });
});