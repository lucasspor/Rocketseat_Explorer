const express = require("express")

const app = express()
const port = 3333

app.get("/:id", (request, response) => {
  const { id } = request.params

  response.send(`Esta é o Id request: ${id}`)
})

app.listen(port, () => { console.log(`Server is running in Port ${port}`) })