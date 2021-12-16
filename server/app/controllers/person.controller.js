// Request our model to use into our controller
const Person = require("../models/person.model");

// Exporting create function, where we create a Schema and send to mongo
exports.create = (req, res) => {
  const person = new Person({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });

  person
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      // If there is any error sending the create, return 500 (Internal Error) and the message
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Person.",
      });
    });
};

// Exporting find all Persons function
exports.findAll = (req, res) => {
  // Using find from Moongose Schema to filter, but using no filter, to really get everything
  Person.find()
    .then((notes) => {
      res.send(notes);
    })
    .catch((err) => {
      // If there is any error sending the create, return 500 (Internal Error) and the message
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving persons.",
      });
    });
};

// Exporting find one Person
exports.findOne = (req, res) => {
  // Using the params from URL to find using Moongose Schema
  Person.findById(req.params.id)
    .then((note) => {
      if (!note) {
        // If there is no object returned 404 (Not found)
        // and a message with not found
        return res.status(404).send({
          message: "Note not found with id " + req.params.id,
        });
      }
      res.send(note);
    })
    .catch((err) => {
      // If there is a error on requesting to mongo
      // if existins Object 404 (Not found)
      // Otherwise, 500 (internal error)
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Note not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error retrieving note with id " + req.params.id,
      });
    });
};

// Exporting update function
exports.update = (req, res) => {
  // Using moongose schema function to enable find by ID and update into single request
  Person.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((person) => {
      if (!person) {
        // If mongo returns no object 404 (not found)
        return res.status(404).send({
          message: "no person found",
        });
      }
      res.status(200).send(person);
    })
    .catch((err) => {
      // If there is any problem with request into mongo 500
      return res.status(500).send({
        message: "error while updating the post",
      });
    });
};

// Delete function exports
exports.delete = (req, res) => {
  // Almost similiar than above funcrion, but remove instead of update
  Person.findByIdAndRemove(req.params.id)
    .then((note) => {
      res.send({ message: "Person deleted successfully!" });
    })
    .catch((err) => {
      // If there is an objectID and Not Found on error name 404
      // Otherwise, 500
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Person not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Could not delete Person with id " + req.params.id,
      });
    });
};
