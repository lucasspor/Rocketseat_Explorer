export default class Router{
  constructor(){
    document.querySelectorAll(".navigation a").forEach(liink => {
      link.addEventListener('click', this.router.bind(this))
    })
  }

  router(event){
    event = event || window.event
    event.preventDefault
  }
}

