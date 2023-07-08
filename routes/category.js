const getCategory = require("../controller/category/sp_get_category");

const express = require("express"),
  router = express.Router();

router.post("/getCategory", (req, res) => {
  getCategory(req, res);
});

module.exports = router;
