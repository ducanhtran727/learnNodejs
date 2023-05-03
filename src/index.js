
const express = require("express")
const morgan = require("morgan")
const handlebars = require("express-handlebars")
const path = require("path")

const app = express()
const port = 1234

const route = require('./routes')



app.use(morgan("combined"))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine("handlebars", handlebars.engine())
app.set("view engine", "handlebars")
app.set("views", path.join(__dirname, "views"))


//Action ---> Dispatcher ---> Fnc handler


route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
