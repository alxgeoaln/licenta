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

module.exports = router;
