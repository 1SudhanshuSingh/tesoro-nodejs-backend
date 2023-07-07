const createFilter = require("../controller/filter/sp_create_filter");
const createFilterOption = require("../controller/filter/sp_create_filterOption");
const express = require("express"),
  router = express.Router();

router.post("/createFilter", (req, res) => {
  createFilter(req, res);
});

router.post("/createFilterOption", (req, res) => {
  createFilterOption(req, res);
});

module.exports = router;
