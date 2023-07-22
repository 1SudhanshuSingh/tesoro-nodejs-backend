const createProduct = require("../controller/product/sp_create_product");
const getProduct = require("../controller/product/sp_get_product");
const updateProduct = require("../controller/product/sp_update_product");
const createSubProduct = require("../controller/product/sp_create_subproduct");
const updateSubProduct = require("../controller/product/sp_update_subproduct");
const getSubProduct = require("../controller/product/sp_get_subproduct");

const { upload } = require("../helpers/multer");
const { handleMulterError } = require("../helpers/multer");
const getAllProdThruCatId = require("../controller/product/sp_get_allProdThruCatID");
const getAllSubProdThruProdId = require("../controller/product/sp_get_allSubprodThruProdID");

const multer = require("multer");

const express = require("express"),
  router = express.Router();
router.post(
  "/createProduct",
  (req, res, next) => {
    upload.single("productImage")(req, res, (err) => {
      if (err) {
        console.error("Multer Error:", err); // Log the error
        handleMulterError(err, req, res, next); // Use the error handler middleware
      } else {
        next(); // Proceed to the next middleware
      }
    });
  },

  createProduct
);
router.post(
  "/createSubProduct",
  (req, res, next) => {
    upload.single("Image")(req, res, (err) => {
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
// router.post("/createProduct", upload.single("productImage"), (req, res) => {
//   createProduct(req, res);
// });
router.post("/getProduct", (req, res) => {
  getProduct(req, res);
});
router.post("/updateProduct", (req, res) => {
  updateProduct(req, res);
});

router.post("/getSubProduct", (req, res) => {
  getSubProduct(req, res);
});
router.post("/updateSubProduct", (req, res) => {
  updateSubProduct(req, res);
});
router.post("/getAllProdThruCatId", (req, res) => {
  getAllProdThruCatId(req, res);
});
router.post("/getAllSubProdThruProdId", (req, res) => {
  getAllSubProdThruProdId(req, res);
});

module.exports = router;
/*const createProduct = require("../controller/product/sp_create_product");
const getProduct = require("../controller/product/sp_get_product");
const updateProduct = require("../controller/product/sp_update_product");
const createSubProduct = require("../controller/product/sp_create_subproduct");
const updateSubProduct = require("../controller/product/sp_update_subproduct");
const getSubProduct = require("../controller/product/sp_get_subproduct");

const { upload } = require("../helpers/multer");
const { handleMulterError } = require("../helpers/multer");
const express = require("express"),
  router = express.Router();

router.post(
  "/createSubProduct",
  (req, res, next) => {
    upload.single("Image")(req, res, (err) => {
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
// router.post("/createProduct", upload.single("productImage"), (req, res) => {
//   createProduct(req, res);
// });
router.post("/getProduct", (req, res) => {
  getProduct(req, res);
});
router.post("/updateProduct", (req, res) => {
  updateProduct(req, res);
});

router.post("/createProduct", (req, res) => {
  createProduct(req, res);
});
router.post("/getSubProduct", (req, res) => {
  getSubProduct(req, res);
});
router.post("/updateSubProduct", (req, res) => {
  updateSubProduct(req, res);
});

module.exports = router;
*/
