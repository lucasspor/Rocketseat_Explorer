const AppError = require("../utils/AppError")

const sqliteConnection = require("../database/sqlite")

class UsersController {
  async create(req, res) {
    const { name, email, password } = req.body

    const database = await sqliteConnection()

    const checkUserExist = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if(checkUserExist){
      throw new AppError("Este email já esta em uso")
    }

    await database.run("INSERT INTO users(name, email, password) VALUES (?,?,?)", [name, email, password])

    return res.status(201).json("message: This user will be create")
  }
}

module.exports = UsersController