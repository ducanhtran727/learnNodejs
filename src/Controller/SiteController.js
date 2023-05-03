class SiteController {
  //GET Site

  index(req, res) {
    res.render("home")
  }

  //GET Site/:slug

  show(req, res) {
    console.log(req.query)
    res.render("search")
  }
}

module.exports = new SiteController()
