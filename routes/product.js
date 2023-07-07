const createProduct = require("../controller/product/sp_create_product");
const createSubProduct = require("../controller/product/sp_create_subproduct");

const express = require("express"),
  router = express.Router();

router.post("/createProduct", (req, res) => {
  createProduct(req, res);
});

router.post("/createSubProduct", (req, res) => {
  createSubProduct(req, res);
});
module.exports = router;
