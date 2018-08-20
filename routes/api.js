var express = require('express');
var router = express.Router();
var User = require('../db/mydb');

/* GET users listing. */
router.get('/users', function(req, res, next) {
    //res.send('respond with a resource');
    User.find(function(err, users){
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(users);
    })
});

router.get('/users/id/:id', function(req, res, next){
    User.findOne({_id:req.params.id}, function(err, user){
        if(err) return res.status(500).json({error: err});
        if(!user) return res.status(404).json({error: 'User not found'});
        res.json(user);
    })
});

router.get('/users/name/:name', function(req,res,next){
    User.find({name:req.params.name}, function(err, user){
        if(err) return res.status(500).json({error: err});
        if(!user) return res.status(404).json({error: 'User not found'});
        res.json(user);
    })
});

router.post('/users', function(req, res){
    var user = new User();
    user.name = req.body.name;
    user.age = req.body.age;
    user.sex = req.body.sex;
    user.car = req.body.car;

    user.save(function(err){
        if(err){
            console.error(err);
            res.json({result: 0});
            return;
        }

        res.json({result: 1});
    })
});


module.exports = router;
