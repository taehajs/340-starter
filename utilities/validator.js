const { body, validationResult } = require("express-validator");

const checkClassification = [
  body("classification_name")
    .trim()
    .matches(/^[A-Za-z0-9]+$/)
    .withMessage("Classification name must be alphanumeric with no spaces."),
  (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      req.flash("notice", errors.array()[0].msg);
      return res.render("inventory/add-classification", {

        title: "Add Classification",
        classification_name: req.body.classification_name
      });
    }
    next();

  }
];

const checkInventory = [
  body("inv_make").notEmpty().withMessage("Make is required."),
  body("inv_model").notEmpty().withMessage("Model is required."),
  body("inv_year").isInt({ min: 1900, max: 2100 }).withMessage("Year must be valid."),
  body("inv_price").isFloat({ min: 0 }).withMessage("Price must be positive."),
  
  body("classification_id").notEmpty().withMessage("Classification is required."),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      req.flash("notice", errors.array()[0].msg);
      return res.render("inventory/add-inventory", {
        title: "Add Inventory",
        classificationList: req.body.classification_id,
        ...req.body
      });
    }
    next();
  }
];

module.exports = { checkClassification, checkInventory };