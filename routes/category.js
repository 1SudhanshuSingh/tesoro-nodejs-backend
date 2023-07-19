const getCategory = require("../controller/category/sp_get_category");
const getAllCategory = require("../controller/category/sp_getAll_category");

const express = require("express"),
  router = express.Router();

router.post("/getCategory", (req, res) => {
  getCategory(req, res);
});
router.get("/getAllCategory", (req, res) => {
  getAllCategory(req, res);
});

module.exports = router;
