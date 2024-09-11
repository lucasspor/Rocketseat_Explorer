import { Router } from './router.js'

const router = new Router()


router.Add('/', 'pages/home.html')
router.Add('/about', 'pages/about.html')
router.Add('/contact', 'pages/contact.html')
router.Add(404, 'pages/404.html')

window.onpopstate = () => router.handle()
window.route = () => router.route()

router.handle()
