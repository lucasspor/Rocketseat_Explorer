const { Router } = require("express")

const UsersController = require("../controllers/UsersControler")
const ensureAuth = require("../middlewares/ensureAuth")

const usersRoutes = Router()

const usersController = new UsersController()

usersRoutes.post("/", usersController.create)
usersRoutes.put("/:id", ensureAuth,usersController.update)

module.exports = usersRoutes