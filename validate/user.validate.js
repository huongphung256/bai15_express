module.exports.postAdd = (req, res, next) => {
    var name = req.body.name;
    if(name.length > 30) {
      res.render('users/add', {
        error: "Error 404"
      });
      return;
    };
    next();
}