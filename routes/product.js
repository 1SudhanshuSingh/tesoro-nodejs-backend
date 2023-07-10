const createProduct = require("../controller/product/sp_create_product");
const getProduct = require("../controller/product/sp_get_product");
const updateProduct = require("../controller/product/sp_update_product");
const createSubProduct = require("../controller/product/sp_create_subproduct");
const updateSubProduct = require("../controller/product/sp_update_subproduct");
const getSubProduct = require("../controller/product/sp_get_subproduct");

const express = require("express"),
  router = express.Router();

router.post("/createProduct", (req, res) => {
  createProduct(req, res);
});
router.post("/getProduct", (req, res) => {
  getProduct(req, res);
});
router.post("/updateProduct", (req, res) => {
  updateProduct(req, res);
});

router.post("/createSubProduct", (req, res) => {
  createSubProduct(req, res);
});
router.post("/getSubProduct", (req, res) => {
  getSubProduct(req, res);
});
router.post("/updateSubProduct", (req, res) => {
  updateSubProduct(req, res);
});
module.exports = router;
