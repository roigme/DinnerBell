const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Host
            .find(req.query)
            .sort({ foodType: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByFood: function (req, res) {
        db.Host
            .find({ foodType: { $regex: new RegExp("^" + req.params.foodtype.toLowerCase(), "i") } })
            .sort({ maxGroup: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByGroup: function (req, res) {
        db.Host
            .find({ maxGroup: { $lte: req.params.maxgroup } })
            .sort({ foodType: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByFoodAndGroup: function(req, res) {
        db.Host
          .find({ maxGroup:{ $lte: req.params.maxgroup }, foodType:{ $regex: new RegExp("^" + req.params.foodtype.toLowerCase(), "i" ) }} )
          .sort({ maxGroup: 1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    create: function (req, res) {
        db.Host.create(req.body)
        .then(function(dbHost) {
          // If a Note was created successfully, find one User (there's only one) and push the new Note's _id to the User's `notes` array
          // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
          // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
          return db.User.findOneAndUpdate({ _id: req.params.id }, { hostProfile: dbHost._id } , { new: true });
        })
        .then(function(dbUser) {
          // If the User was updated successfully, send it back to the client
          res.json(dbUser);
        })
        .catch(function(err) {
          // If an error occurs, send it back to the client
          res.json(err);
        });
    },
    update: function (req, res) {
        db.Host
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Host
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};