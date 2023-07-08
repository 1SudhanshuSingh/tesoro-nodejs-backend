const createVariation = require("../controller/variation/sp_create_variation");
const updateVariation = require("../controller/variation/sp_update_variation");
const getVariationList = require("../controller/variation/sp_get_variationList");

const express = require("express"),
  router = express.Router();

router.post("/createVariation", (req, res) => {
  createVariation(req, res);
});

router.post("/updateVariation", (req, res) => {
  updateVariation(req, res);
});

router.post("/getVariationList", (req, res) => {
  getVariationList(req, res);
});

module.exports = router;
