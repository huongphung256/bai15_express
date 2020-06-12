var db = require('../db');
const shortid = require('shortid');

module.exports.index = function(req, res) {
    res.render('users/index', {
      users: db.get('users').value()
    });
}
module.exports.add = function(req, res) {
    res.render('users/add');
}
module.exports.delete =function(req, res) {
    var id = req.params.id;
    var item = db.get('users').find({ id: id }).value();
    var index = db.get('users').indexOf(item).value();
    
    db.get('users').splice(index, 1).write();
    
    res.redirect('back');
}
module.exports.update = function(req, res) {
    var id = req.params.id;
    res.render('users/update', {
      id: id
    });
}
module.exports.postUpdate = function(req, res) {
    var id = req.params.id;
    var name = req.body.newName;
    if(name.length > 30) {
      res.render('users/add', {
        error: "Error 404"
      });
      return;
    } 
    db.get('users').find({ id: id }).value().name = name;
    
    res.redirect('/users');
}
module.exports.postAdd = function(req, res) {
    var id = shortid.generate();
    // var name = req.body.name;
    // if(name.length > 30) {
    //   res.render('users/add', {
    //     error: "Error 404"
    //   });
    //   return;
    // };
    db.get('users').push({ 
      id: id, 
      name: name
    }).write();
    
    res.redirect('/users');
}