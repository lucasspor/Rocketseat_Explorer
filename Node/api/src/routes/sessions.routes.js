const { Router } = require("express")

const SessionsController = require("../controllers/SessionsController")
const sessionsController = new SessionsController()

const sessionsRoute = Router()

sessionsRoute.post("/:user_id", sessionsController.create)


module.exports = sessionsRoute