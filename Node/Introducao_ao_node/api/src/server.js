const express = require("express")

const app = express()
app.use(express.json())
const port = 3333

app.get("/users", (req, res) => {

  res.send("Server is running")
})

app.post("/users", (req, res) => {
  const {name, email, password} = req.body

  res.send(`Seu nome é: ${name}, seu email é ${email}, sua senha é ${password}`)
} )

app.listen(port, () => { console.log(`Server is running in Port ${port}`) })