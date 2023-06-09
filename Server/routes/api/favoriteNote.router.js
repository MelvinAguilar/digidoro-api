var express = require("express");
var router = express.Router();

const favoriteController = require("../../controllers/favoriteNote.controller");

const favoriteValidators = require("../../validators/favoriteNote.validators");
const runValidations = require("../../validators/index.middleware");

router.get("/", favoriteController.getAllSorted);

router.get(
  "/:id",
  favoriteValidators.findFavoriteNoteByIdValidator,
  runValidations,
  favoriteController.getById
);

router.post(
  "/",
  favoriteValidators.createFavoriteNoteValidator,
  runValidations,
  favoriteController.create
);

router.patch(
  "/:id",
  favoriteValidators.findFavoriteNoteByIdValidator,
  favoriteValidators.createFavoriteNoteValidator,
  runValidations,
  favoriteController.updateById
);

router.delete(
  "/:id",
  favoriteValidators.findFavoriteNoteByIdValidator,
  runValidations,
  favoriteController.deleteById
);

module.exports = router;
