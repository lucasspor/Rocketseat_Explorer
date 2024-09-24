const AppError = require("../utils/AppError")

class UsersController {
  create(req, res) {
    const { name, email, password } = req.body
    if(!name){
      throw new AppError("O nome é obrigatório")
    }

    res.status(201).json({message: "Congratulations, You are a new user" })
  }
}

module.exports = UsersController