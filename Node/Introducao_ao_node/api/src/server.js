const express = require("express")

const routes = require("./routes")

const app = express()
app.use(express.json())
const port = 3333

app.use(routes)

app.listen(port, () => { console.log(`Server is running in Port ${port}`) })