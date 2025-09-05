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
       const user_id = req.user.id

    const database = await sqliteConnection()

    const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id])

    if (!user) {
      throw new AppError("User doesn't exist")
    }

    const userWithUpdateEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if (userWithUpdateEmail && userWithUpdateEmail.id !== user_id) {
      throw new AppError("Este e-mail já está em uso")
    }

    user.name = name ?? user.name
    user.email = email ?? user.email

    if (password && !old_password) {
      throw new AppError("Você precisa informar a senha antiga para definir a nova")
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password)

      if (checkOldPassword) {
        throw new AppError("A senha antiga não confere")
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
      [user.name, user.email, user.password, user_id])

    return res.status(201).json({ message: "User has been updated!!" })
  }
}

module.exports = UsersController