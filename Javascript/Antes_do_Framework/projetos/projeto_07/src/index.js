const router = {
  "/": "/pages/home.html",
  "/about": "/pages/about.html",
  "/contact": "/pages/contact.html",
  404: "/pages/404.html"
}
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', route)
});

window.onpopstate = () => handle()
window.route = () => route()
handle()


