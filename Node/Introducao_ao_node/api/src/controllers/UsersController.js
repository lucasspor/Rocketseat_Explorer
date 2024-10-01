const AppError = require("../utils/AppError")
const { hash } = require("bcryptjs")
const sqliteConnection = require("../database/sqlite")

class UsersController {
  async create(req, res) {
    const { name, email, password } = req.body

    const database = await sqliteConnection()

    const checkUserExist = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if (checkUserExist) {
      throw new AppError("Este email já esta em uso")
    }

    const hashedPassword = await hash(password, 8)

    await database.run("INSERT INTO users(name, email, password) VALUES (?,?,?)", [name, email, hashedPassword])

    return res.status(201).json("message: This user will be create")
  }

  async update(req, res) {
    const { name, email } = req.body
    const { id } = req.params

    const database = await sqliteConnection()

    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id])

    if (!user) {
      throw new AppError("Usúario não existe")
    }

    const userWithUpdateEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if (userWithUpdateEmail && userWithUpdateEmail.id !== user.id) {
      throw new AppError("Este e-mail já está em uso")
    }

    user.name = name
    user.email = email

    await database.run(`
      UPDATE users SET
      name = ?,
      email = ?,
      updated_at = ?
      WHERE id = ?`,
      [user.name, user.email, new Date(), user.id])
      return res.status(200).json("message: Everythings is new now")
  }

}

module.exports = UsersController