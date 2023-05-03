
const testRouter =require('./test')

const siteRouter = require('./site')

function route(app) {
  

  app.use('/test',testRouter)

  app.use('/',siteRouter)



  // app.post("/search", (req, res) => {
  //   console.log(req.body)
  //   res.send(req.body)
  // })
}

module.exports = route
