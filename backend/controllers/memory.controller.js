const db = require("../models");
const Memory = db.memories;
const Op = db.Sequelize.Op;

// Create and Save a new Memory
exports.create = (req, res) => {
  // Validate request
  if (!req.body.place || !req.body.date || !req.body.description){
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return;
  }

  // Create a Memory
  const memory = {
    place: req.body.place,
    date: req.body.date,
    description: req.body.description,
    filename: req.file ? req.file.filename : ""
  }

  // Save Memory in the database
  Memory.create(memory).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the memory."
    });
  });
};

// Retrieve all Memories from the database.
exports.findAll = (req, res) => {
  Memory.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all memories."
    });
  });
};

// Find a single Memory with an id
exports.findOne = (req, res) => {

}

// Update a Memory by the id in the request
exports.update = (req, res) => {

};

// Delete a Memory with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Memory.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Memory was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Memory with id=${id}. Maybe Memory was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Memory with id=" + id
      });
    });
};
