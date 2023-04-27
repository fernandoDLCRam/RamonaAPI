const express = require("express");
const itinerarioController = require("../controller/itinerarios-controller");

const router = express.Router();

//GET
router.get("/", itinerarioController.getItinerario);

module.exports = router;