const express = require("express");
const router = express.Router();

// Require all route modules
const noteRouter = require("./note.router");
const favoriteRouter = require("./favoriteNote.router");
const folderRouter = require("./folder.router");
const todoRouter = require("./todo.router");
const todoItemRouter = require("./todoItem.router");
const userRouter = require("./user.router");

// Define all API routes
router.use("/note", noteRouter);
router.use("/favorite", favoriteRouter);
router.use("/folder", folderRouter);
router.use("/todo", todoRouter);
router.use("/todoItem", todoItemRouter);
router.use("/user", userRouter);

module.exports = router;
