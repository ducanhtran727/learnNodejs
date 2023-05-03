class TestController {
  //GET test

  index(req, res) {
    res.render("test")
  }

  //GET test/:slug

  show(req, res) {
    res.send("slug detail")
  }
}

module.exports = new TestController()
