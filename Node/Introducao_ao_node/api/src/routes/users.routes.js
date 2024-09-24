const { Router } = require("express")

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()

function myMiddleware(req, res, next){
  console.log("Você passou pelo middleware")
  console.log(req.body)

  if(!req.body.isAdmin){
    return res.json({message: "You are not the admin"})
  }

  next()
}

const usersController = new UsersController()

usersRoutes.post("/", myMiddleware,usersController.create )

module.exports = usersRoutes