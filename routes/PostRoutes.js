const express = require("express");
const { PostController } = require("../controllers");
const router = express.Router();

//GET ALL POSTS
router.get("/", PostController.getAllPost);

//CREATE A POST
router.post("/", PostController.createPost);

module.exports = router;
