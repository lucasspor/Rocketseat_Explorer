const { Router } = require("express")

const SessionsController = require("../controllers/SessionsController")
const SessionsController = new SessionsController()

const sessionsRoute = Router()

sessionsRoute.post("/:user_id", SessionsController.create)


module.exports = SessionsRoute