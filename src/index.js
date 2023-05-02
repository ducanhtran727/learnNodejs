const express = require("express")
const morgan = require("morgan")
const handlebars = require("express-handlebars")
const path = require('path')

const app = express()
const port = 1234

app.use(morgan("combined"))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.engine("handlebars", handlebars.engine())
app.set("view engine", "handlebars")
app.set("views", path.join(__dirname,'views'))

console.log(path.join(__dirname,'src/views'))
 
app.get("/", (req, res) => {
  res.render('home')

})

app.get("/test", (req, res) => {
  res.render('test')
})

app.get("/search", (req, res) => {
  console.log(req.query)
  res.render("search")
})

app.post("/search", (req, res) => {
  console.log(req.body)
  res.send(req.body)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
