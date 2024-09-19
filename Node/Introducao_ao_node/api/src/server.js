const express = require("express")

const app = express()
const port = 3333

app.get("/:id", (request, response) => {
  const { id } = request.params

  response.send(`Este é o Id request: ${id}`)
})

app.get("/:id/users", (request, response) => {
  const {page, limit} = request.query

  response.send(`Esta é sua pagina: ${page} e este seu limite ${limit}`)
} )

app.listen(port, () => { console.log(`Server is running in Port ${port}`) })