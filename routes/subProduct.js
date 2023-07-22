const createSubProduct = require("../controller/product/sp_create_subproduct");
const updateSubProduct = require("../controller/product/sp_update_subproduct");
const getSubProduct = require("../controller/product/sp_get_subproduct");
const getProdThruCatId = require("../controller/product/sp_get_allProdThruCatID");
const getAllSubProdThruProdId = require("../controller/product/sp_get_allSubprodThruProdID");
const getAllItemsThruSubProdId = require("../controller/item/sp_get_allItemsThruSubprodID");
const getAllSubProduct = require("../controller/product/sp_get_Allsubproduct");

const { upload } = require("../helpers/multer");
const { handleMulterError } = require("../helpers/multer");
const express = require("express"),
  router = express.Router();

router.post(
  "/createSubProduct",
  (req, res, next) => {
    upload.array("subProductImage", 10)(req, res, (err) => {
      if (err) {
        console.error("Multer Error:", err); // Log the error
        handleMulterError(err, req, res, next); // Use the error handler middleware
      } else {
        next(); // Proceed to the next middleware
      }
    });
  },
  createSubProduct
);

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
router.post("/getAllSubProduct", (req, res) => {
  getAllSubProduct(req, res);
});

module.exports = router;
