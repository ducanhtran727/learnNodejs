const express = require("express")
const morgan = require("morgan")
const { engine } = require("express-handlebars")

const app = express()
const port = 1234

app.use(morgan("combined"))

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./views")

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
