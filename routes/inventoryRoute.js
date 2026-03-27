const express = require("express");
const router = new express.Router();
const invController = require("../controllers/inventoryController");

router.get("/detail/:invId", invController.buildByInvId);


router.get("/error", invController.throwError);
module.exports = router;

