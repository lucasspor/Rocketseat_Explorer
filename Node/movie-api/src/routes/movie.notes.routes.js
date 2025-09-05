const { Router } = require("express")

const MovieNotesController = require("../controllers/MovieNotesController")

const movieNotesRoutes = Router()
const ensureAuth = require("../middlewares/ensureAuth")

const movieNotesController = new MovieNotesController()

movieNotesRoutes.use(ensureAuth)

movieNotesRoutes.get("/",movieNotesController.search )
movieNotesRoutes.post("/", movieNotesController.create)
movieNotesRoutes.get("/:id", movieNotesController.show)
movieNotesRoutes.delete("/:id", movieNotesController.delete)

module.exports = movieNotesRoutes