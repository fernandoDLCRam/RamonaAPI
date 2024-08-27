const express = require("express");
const invitadosController = require("../controller/invitados-controller");

const router = express.Router();

//GET
router.get("/getInvitados", invitadosController.getInvitados);

//POST
router.post("/postInvitados", invitadosController.insertInvitados);

module.exports = router;