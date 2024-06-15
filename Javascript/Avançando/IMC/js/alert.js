export const Error = {
  element: document.querySelector('.alert-error'),
  open() {
    Error.element.classList.add('open')
  },
  close() {
    Error.element.classList.remove('open')
  }
}