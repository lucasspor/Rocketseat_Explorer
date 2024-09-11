export default class Router {
  constructor() {
    this.routes = {}
    this.app = document.querySelector("#app")
    this.main = document.querySelector("main")


    document.querySelectorAll(".navigation a").forEach(link => {
      link.addEventListener('click', this.route.bind(this))
    })

    this.updateBackground()

    const observer = new MutationObserver(() => {
      this.updateBackground()
    })

    observer.observe(this.main, { childList: true, subtree: true });
  }

  add(routeName, link) {
    this.routes[routeName] = link
  }

  updateBackground() {
    if (this.main.querySelector('#universe')) {
      this.app.style.backgroundImage = 'url("/assets/mountains-universe-2.png")';
    } else if (this.main.querySelector('#exploration')) {
      this.app.style.backgroundImage = 'url("/assets/mountains-universe-3.png")'
    } else {
      this.app.style.backgroundImage = ''
    }
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes['/']

    fetch(route).then(data => data.text().then(html => {
      document.querySelector('#content').innerHTML = html
    }))

  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
  }
}

