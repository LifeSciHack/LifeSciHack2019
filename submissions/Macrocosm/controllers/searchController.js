const db = require("../models");
var start = new Date();
start.setHours(0,0,0,0);

var end = new Date();
end.setHours(23,59,59,999);

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Search.find().sort({date:-1})

      // Specify that we want to populate the retrieved users with any associated notes
      // .populate({ path: "Search", options: { sort: { date: -1 } } })

      .then(function(dbModel) {
        // If able to successfully find and associate all Users and Notes, send them back to the client

        res.json(dbModel);
      })
      .catch(function(err) {
        // If an error occurs, send it back to the client
        res.json(err);
      });
  },
  findById: function(req, res) {
    db.Search.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Search.create(req.body)
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Search.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Search.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
