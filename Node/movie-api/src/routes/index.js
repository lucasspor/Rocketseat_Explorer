const { Router } = require("express")

const routes = Router()

const usersRoutes = require("./users.routes")
const movieNotesRoutes = require("./movie.notes.routes")
const tagsRoutes = require("./tags.routes")

routes.use("/users", usersRoutes)
routes.use("/movie", movieNotesRoutes)
routes.use("/tags", tagsRoutes)

module.exports = routes