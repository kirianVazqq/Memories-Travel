const { memories } = require("../models");

module.exports = app => {
  const memory = require("../controllers/memory.controller");

  var upload = require('../multer/upload');

  var router = require("express").Router();

  // Create a new Memory
  // DECOMMENT:
  router.post("/", upload.single('file'), memory.create);
  // router.post("/", bicycles.create);

  // Retrieve all Memory
  router.get("/", memory.findAll);

  // Retrieve a single Memory with id
  router.get("/:id", memory.findOne);

  // Update a Memory with id
  router.put("/:id", memory.update);

  // Delete a Memory with id
  router.delete("/:id", memory.delete);

  app.use("/api/memories", router);
}