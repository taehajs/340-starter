const express = require("express");
const router = new express.Router();
const invController = require("../controllers/inventoryController");
const { checkClassification, checkInventory } = require("../utilities/validator");

router.get("/", invController.buildManagement);
router.get("/add-classification", invController.buildAddClassification);
router.post("/add-classification", checkClassification, invController.addClassification);

router.get("/add-inventory", invController.buildAddInventory);
router.post("/add-inventory", checkInventory, invController.addInventory);

module.exports = router;
