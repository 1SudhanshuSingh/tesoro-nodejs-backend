const createFilterOption = require("../controller/filter/sp_create_filterOption");
const getFilterOption = require("../controller/filter/sp_get_filterOptions");
const updateFilterOption = require("../controller/filter/sp_update_filterOptions");
const getMasterFilter = require("../controller/filter/sp_get_masterFilter");

const getallFilterOptionsAvailableForFilterID = require("../controller/filter/sp_get_allFilterOptionsAvailableForFilterID");
const getAllFilterAvailableForProdId = require("../controller/filter/sp_get_allFiltersAvailableForProdID");

const createMasterFilter = require("../controller/filter/sp_create_masterFilter");

const updateMasterFilter = require("../controller/filter/sp_update_masterFilter");

const express = require("express"),
  router = express.Router();

router.post("/getAllFilterAvailableForProdId", (req, res) => {
  getAllFilterAvailableForProdId(req, res);
});
router.post("/createFilterOption", (req, res) => {
  createFilterOption(req, res);
});
router.post("/getallFilterOptionsAvailableForFilterID", (req, res) => {
  getallFilterOptionsAvailableForFilterID(req, res);
});
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
router.post("/getProdThruCatId", (req, res) => {
  getProdThruCatId(req, res);
});

router.post("/createMasterFilter", (req, res) => {
  createMasterFilter(req, res);
});
router.post("/getMasterFilter", (req, res) => {
  getMasterFilter(req, res);
});
router.post("/updateMasterFilter", (req, res) => {
  updateMasterFilter(req, res);
});

module.exports = router;
