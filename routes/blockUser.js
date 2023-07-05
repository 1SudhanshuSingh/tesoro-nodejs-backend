const getUserBlockList = require("../controller/blockUser/sp_get_userBlockList");
const setUserBlock = require("../controller/blockUser/sp_set_blockUser");
const express = require("express"),
  router = express.Router();

router.post("/getUserBlockList", (req, res) => {
  getUserBlockList(req, res);
});

router.post("/setUserBlock", (req, res) => {
  setUserBlock(req, res);
});

module.exports = router;
