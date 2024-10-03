const AppError = require("../utils/AppError")
const { hash, compare } = require("bcryptjs")
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
    const { name, email, password, old_password } = req.body
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

    user.name = name ?? user.name
    user.email = email ?? user.email

    if(!password && !old_password){
      throw new AppError("Você precisa informar a senha antiga para definir a nova")
    }

    if(password && old_password){
      const checkOldPassword = compare(old_password, user.password)

      if(checkOldPassword){
        throw new Error("A senha antiga não confere")
      }

      user.password = await hash(password, 8)
    }

    await database.run(`
      UPDATE users SET
      name = ?,
      email = ?,
      password = ?,
      updated_at = DATETIME('now')
      WHERE id = ?`,
      [user.name, user.email,user.password, user.id])
      return res.status(200).json("message: Everythings is new now")
  }

}

module.exports = UsersController