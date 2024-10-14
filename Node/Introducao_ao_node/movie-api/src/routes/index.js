const { Router } = require("express")

const routes = Router()

const usersRoutes = require("./users.routes")
const movieNotesRoutes = require("./movie.notes.routes")

routes.use("/users", usersRoutes)
routes.use("/movie", movieNotesRoutes)

module.exports = routes