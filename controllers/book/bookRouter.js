const express = require("express");
const router = express.Router();
const {
    getBook,
    createBook,
    updateBook,
    deleteBook,
} = require("./bookController");
// const { postValidator, runValidation } = require("./userValidator");

router
    .get("/", getBook)
    .post("/", createBook)
    .put("/", updateBook)
    .delete("/", deleteBook);

module.exports = router;