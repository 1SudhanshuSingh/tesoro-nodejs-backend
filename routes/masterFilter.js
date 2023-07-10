const createMasterFilter = require("../controller/masterFilter/sp_create_masterFilter");
const getMasterFilter = require("../controller/masterFilter/sp_get_masterFilter");
const updateMasterFilter = require("../controller/masterFilter/sp_update_masterFilter");
const express = require("express"),
  router = express.Router();

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