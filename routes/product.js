const createProduct = require("../controller/product/sp_create_product");
const getProduct = require("../controller/product/sp_get_product");
const updateProduct = require("../controller/product/sp_update_product");
const createSubProduct = require("../controller/product/sp_create_subproduct");
const updateSubProduct = require("../controller/product/sp_update_subproduct");
const getSubProduct = require("../controller/product/sp_get_subproduct");
const getProdThruCatId = require("../controller/product/sp_get_allProdThruCatID");
const getAllSubProdThruProdId = require("../controller/product/sp_get_allSubprodThruProdID");
const getAllItemsThruSubProdId = require("../controller/product/sp_get_allItemsThruSubprodID");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const express = require("express"),
  router = express.Router();

router.post("/createProduct", upload.single("productImage"), (req, res) => {
  console.log("file:", req.file);
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
router.post("/getProdThruCatId", (req, res) => {
  getProdThruCatId(req, res);
});
router.post("/getAllSubProdThruProdId", (req, res) => {
  getAllSubProdThruProdId(req, res);
});
router.post("/getAllItemsThruSubProdId", (req, res) => {
  getAllItemsThruSubProdId(req, res);
});
module.exports = router;
