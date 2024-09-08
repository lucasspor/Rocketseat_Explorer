
const router = {
  "/": "/pages/home.html",
  "/about": "/pages/about.html",
  "/contact": "/pages/contact.html",
  404: "/pages/404.html"
}
document.querySelectorAll('nav a').forEach(link =>  {
  link.addEventListener('click', route)
});

function route(event){
  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, "", event.target.href)

  handle()
}

function handle(){
  const { pathname } = window.location
}


