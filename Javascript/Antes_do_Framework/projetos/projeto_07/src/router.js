class router {
  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = router[pathname] || router[404]

    fetch(route).then(data => data.text().then(html => {
      document.querySelector('#app').innerHTML = html
    }))
  }
}

const router = new Router()