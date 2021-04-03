// const router = require("express").Router();

// router.get("/", (req, res) => {
//     res.json({ message: "ROUTER USER GET" });
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const {
    getUser,
    createUser,
    updateUser,
    deleteUser,
} = require("./userController");
// const { postValidator, runValidation } = require("./userValidator");

router
    .get("/", getUser)
    .post("/", createUser)
    .put("/", updateUser)
    .delete("/", deleteUser);

module.exports = router;