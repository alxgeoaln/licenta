var express = require('express');
var router = express.Router();

var User = require('../model/Schema.js');

/* GET users listing. */
router.post('/', function(req, res, next) {

    var userModel = new User();
    userModel.email = req.body.email;
    userModel.password = req.body.password;

    userModel.save(function(err, user){
        if(err) console.log(err);
        res.json(user);
    })
});

router.get('/', function(req, res, next){
    var findAll = User.find({}).select({"email":1});
    findAll.exec(function(err, emails){
        if(err) console.log(err);
        res.json(emails)
    })
});

module.exports = router;
