const Person = require("../models/person.model");

exports.create = (req, res) => {
  const note = new Person({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });

  note
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Person.",
      });
    });
};

exports.findAll = (req, res) => {
  Person.find()
    .then((notes) => {
      res.send(notes);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving persons.",
      });
    });
};

exports.findOne = (req, res) => {
  Person.findById(req.params.id)
    .then((note) => {
      if (!note) {
        return res.status(404).send({
          message: "Note not found with id " + req.params.id,
        });
      }
      res.send(note);
    })
    .catch((err) => {
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

exports.update = (req, res) => {
  Person.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((person) => {
      if (!person) {
        return res.status(404).send({
          message: "no person found",
        });
      }
      res.status(200).send(person);
    })
    .catch((err) => {
      return res.status(404).send({
        message: "error while updating the post",
      });
    });
};

exports.delete = (req, res) => {
  Person.findByIdAndRemove(req.params.id)
    .then((note) => {
      res.send({ message: "Person deleted successfully!" });
    })
    .catch((err) => {
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
