const app = document.querySelector("#app")
const main = document.querySelector("main")


const routes = {
  "/": "/pages/home/home.html",
  "/universe": "/pages/universe/universe.html",
   "/exploration": "/pages/exploration/exploration.html"
}



document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener('click', router)
})

function router(event) {
  event = event || window.event
  event.preventDefault()
  
  window.history.pushState({}, "", event.target.href)

  handle()
}


function handle(){
  const {pathname} = window.location
  const route = routes[pathname] 

  fetch(route).then(data => data.text().then(html =>{
    document.querySelector('#content').innerHTML = html
  }  ))

  console.log(route)
}

function updateBackground() {
  if (main.querySelector('#universe')) {
    app.style.backgroundImage = 'url("/assets/mountains-universe-2.png")';
  } else  if (main.querySelector('#exploration')) {
    app.style.backgroundImage = 'url("/assets/mountains-universe-3.png")'
  } else{
    app.style.backgroundImage = ''
  }
}

updateBackground();

const observer = new MutationObserver(() => {
  updateBackground();
});

observer.observe(main, { childList: true, subtree: true });

handle()
