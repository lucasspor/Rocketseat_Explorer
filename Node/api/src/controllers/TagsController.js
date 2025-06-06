const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class TagsControllers {
  async index(req, res) {
    const { user_id } = req.user.id

    const checkUserExist = await knex("users").where({ id: user_id }).first();

    if(!checkUserExist){
      throw new AppError("Não existe este usuario")
    }

    const tags = await knex("tags").where({ user_id })

    return res.json(tags)
  }
}

module.exports = TagsControllers