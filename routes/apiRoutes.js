const router = require('express').Router();
const User = require('../models/UserModel');
const Host = require('../models/HostModel');

router.get('/users', function(req, res) {
    User.find({}, function(error, found) {
      if (error) {
        console.log(error);
      }
      else {
        res.json(found);
      }
    });
  });

  router.get('/search/all', function (req, res){
    Host.find({}, function(error, found) {
      if (error) {
        console.log(error);
      }
      else {
        res.json(found);
      }
    });
  })

// Can't get this to work for some reason, will ask in class about it on 10/4/2018 
 
  router.get('/search/foodtype=:foodtype', function (req, res){
    Host.find({ foodType:{ $regex: new RegExp("^" + req.params.foodtype.toLowerCase(), "i" ) } }, function(error, found) {
      if (error) {
        console.log(error);
      }
      else {
        res.json(found);
      }
    });
  })

  // router.get('/search/maxgroup=:maxgroup', function (req, res){
  //   console.log(typeof req.params.foodType, "here");
  //   Host.find({ maxGroup: req.params.foodtype }, function(error, found) {
  //     if (error) {
  //       console.log(error);
  //     }
  //     else {
  //       res.json(found);
  //     }
  //   });
  // })

  
  router.post('/newuser', function(req, res) {
    // Create a new user using req.body
    User.create(req.body)
      .then(function() {
        res.json();
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  router.post('/newHost', function(req, res) {
    // Create a new host using req.body
    Host.create(req.body)
      .then(function() {
        res.json();
      })
      .catch(function(err) {
        res.json(err);
      });
  });
  
  module.exports = router;