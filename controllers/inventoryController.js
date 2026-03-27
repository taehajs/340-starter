const invModel = require("../models/inventory-model");
const utilities = require("../utilities");


async function buildByInvId(req, res, next) {
  try {
    const invId = parseInt(req.params.invId);
    const vehicleData = await invModel.getVehicleById(invId);
    const html = utilities.buildVehicleHTML(vehicleData);
    res.render("inventory/detail", {
      title: `${vehicleData.inv_make} ${vehicleData.inv_model}`,
      content: html
    });
  } catch (error) {
    next(error);
  }
}


function throwError(req, res, next) {
  try {
    throw new Error("Intentional 500 error triggered!");
  } catch (error) {
    next(error);
  }
}

module.exports = { buildByInvId, throwError };
