const express = require("express");

const router = express.Router();

const { DalleController } = require("../controllers");

router.post("/", DalleController.genImage);

module.exports = router;
