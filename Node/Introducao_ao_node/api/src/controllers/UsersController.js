class UsersController {
  create(req, res) {
    const { name, email, password } = req.body

    res.status(201).json({message: "Congratulations, You are a new user" })
  }
}

module.exports = UsersController