const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class MovieNotesController {
  async create(req, res) {
    const { title, description, tags, rating } = req.body
    const { user_id } = req.params

    if (!user_id) {
      throw new AppError("User ID is required");
    }

    const userExist = await knex("users").where({ id: user_id }).first()
    if (!userExist) {
      throw new AppError("This users doesn't exists")
    }

    if (!title || !description || !rating) {
      throw new AppError("Title, description, and rating are required.");
    }

    const checkRating = rating < 1 || rating > 5

    if (checkRating) {
      throw new AppError("The film rating must be from 1 to 5")
    }

    const [note_id] = await knex("movie_notes").insert({
      title,
      description,
      rating,
      user_id
    })

    const tagsInsert = tags.map(name => {
      return {
        note_id,
        name,
        user_id
      }
    })

    await knex("movie_tags").insert(tagsInsert);

    res.json({ message: "Note created successfully" })
  }

  async show(req, res){
    const { id } = req.params

    const notes = await knex("movie_notes").where({ id }).first()
    const tags = await knex("movie_tags").where({ note_id: id }).orderBy("name")
    if (!notes) {
      throw new AppError("Doesn't exists!!")
    }

    return res.json({ ...notes, tags })
  }

  async delete(req, res){
    const { id } = req.params

    await knex("movie_notes").where({ id }).delete()

    return res.json({message: "Deleted successfully"})
  }
}

module.exports = MovieNotesController
