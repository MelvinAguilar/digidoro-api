var express = require("express");
var router = express.Router();

const noteController = require("../../controllers/note.controller");

const noteValidators = require("../../validators/note.validators");
const runValidations = require("../../validators/index.middleware");

router.get("/", noteController.getAllSorted);

router.get(
  "/:id",
  noteValidators.findNoteByIdValidator,
  runValidations,
  noteController.getById
);

router.post(
  "/",
  noteValidators.createNoteValidator,
  runValidations,
  noteController.create
);

router.patch(
  "/:id",
  noteValidators.findNoteByIdValidator,
  noteValidators.createNoteValidator,
  runValidations,
  noteController.updateById
);

router.delete(
  "/:id",
  noteValidators.findNoteByIdValidator,
  runValidations,
  noteController.deleteById
);

module.exports = router;
