// const router = require('express').Router();
// const User = require('../models/UserModel');
// const Host = require('../models/HostModel');

// router.get('/users', function(req, res) {
//     User.find({}, function(error, found) {
//       if (error) {
//         console.log(error);
//       }
//       else {
//         res.json(found);
//       }
//     });
//   });

//   router.get('/search/all', function (req, res){
//     Host.find({}, function(error, found) {
//       if (error) {
//         console.log(error);
//       }
//       else {
//         res.json(found);
//       }
//     });
//   })
 
//   router.get('/search/foodtype=:foodtype', function (req, res){
//     Host.find({ foodType:{ $regex: new RegExp("^" + req.params.foodtype.toLowerCase(), "i" ) } }, function(error, found) {
//       if (error) {
//         return error;
//       }
//       else {
//         res.json(found);
//       }
//     });
//   })

//   router.get('/search/maxgroup=:maxgroup', function (req, res){
//     Host.find({ maxGroup:{ $lte: req.params.maxgroup }}, function(error, found) {
//       if (error) {
//         return error;
//       }
//       else {
//         res.json(found);
//       }
//     });
//   })

//   router.get('/search/foodtype=:foodtype/maxgroup=:maxgroup', function (req, res){
//     Host.find({ 
//       maxGroup:{ $lte: req.params.maxgroup },
//       foodType:{ $regex: new RegExp("^" + req.params.foodtype.toLowerCase(), "i" ) }}, function(error, found) {
//       if (error) {
//         return error;
//       }
//       else {
//         res.json(found);
//       }
//     });
//   })
  
//   router.post('/newuser', function(req, res) {
//     // Create a new user using req.body
//     User.create(req.body)
//       .then(function() {
//         res.json();
//       })
//       .catch(function(err) {
//         res.json(err);
//       });
//   });

//   router.post('/newhost', function(req, res) {
//     // Create a new host using req.body
//     Host.create(req.body)
//       .then(function() {
//         res.json();
//       })
//       .catch(function(err) {
//         res.json(err);
//       });
//   });
  
//   module.exports = router;