const express = require("express");
const votosController = require("../controller/votos-controller");

const router = express.Router();

//GET
router.get("/", votosController.getVotos);

//PUT
router.put("/", votosController.upVote);

module.exports = router;