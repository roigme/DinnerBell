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
        db.Host
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
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