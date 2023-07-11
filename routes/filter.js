const createFilterOption = require("../controller/filter/sp_create_filterOption");
const getFilterOption = require("../controller/filter/sp_get_filterOptions");
const updateFilterOption = require("../controller/filter/sp_update_filterOptions");
const getMasterFilter = require("../controller/filter/sp_get_masterFilter");
const express = require("express"),
  router = express.Router();

router.post("/createFilterOption", (req, res) => {
  createFilterOption(req, res);
});
router.post("/updateFilterOption", (req, res) => {
  updateFilterOption(req, res);
});
router.post("/getFilterOption", (req, res) => {
  getFilterOption(req, res);
});
router.post("/getMasterFilter", (req, res) => {
  getMasterFilter(req, res);
});

module.exports = router;
