const sqliteConnection = require("../database/sqlite")
const { hash, compare } = require("bcryptjs")
const AppError = require("../utils/AppError")

class UsersController {
  async create(req, res) {
    const { name, email, password } = req.body

    const database = await sqliteConnection()
    
    const checkUserExist = await database.get("SELECT * FROM users WHERE email = ?", [email]);

    if (checkUserExist) {
      throw new AppError("Este email já está em uso", 400);
    }

    const hashedPassword = await hash(password, 8)

    await database.run("INSERT INTO users(name, email, password) VALUES (?,?,?)", [name, email, hashedPassword])

    res.status(201).json({ message: "user created successfully" })
  }

  async update(req, res) {
    const { name, email, password, old_password } = req.body
    const { id } = req.params

    const database = sqliteConnection()

    const user = await database.run("SELECT * users WHERE id = (?)", [id])

    if (!user) {
      throw new AppError("Usuário não existe")
    }
    
    return res.status(201).json({ message: "User has been updated!!" })
  }
}

module.exports = UsersController