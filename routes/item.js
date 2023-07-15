const createItem = require("../controller/item/sp_create_item");
const multer = require("multer");
const getItem = require("../controller/item/sp_get_item");
const getItemList = require("../controller/item/sp_get_itemList");
const updateItem = require("../controller/item/sp_update_item");
// const updateItemDetail = require("../controller/item/sp_update_itemDetail");
const { upload } = require("../helpers/multer");
const { handleMulterError } = require("../helpers/multer");
const express = require("express"),
  router = express.Router();

router.post(
  "/createItem",
  (req, res, next) => {
    upload.array("ItemImage", 10)(req, res, (err) => {
      if (err) {
        console.error("Multer Error:", err); // Log the error
        handleMulterError(err, req, res, next); // Use the error handler middleware
      } else {
        next(); // Proceed to the next middleware
      }
    });
  },
  createItem
);
/*
router.post("/createItem", upload.array("ItemImage"), (req, res) => {
  createItem(req, res);
});
*/
// router.post("/getItemDetail", (req, res) => {
//   getItemDetail(req, res);
// });
router.post("/getItem", (req, res) => {
  getItem(req, res);
});

router.post("/getItemList", (req, res) => {
  getItemList(req, res);
});

router.post("/updateItem", (req, res) => {
  updateItem(req, res);
});

// router.post("/updateItemDetail", (req, res) => {
//   updateItemDetail(req, res);
// });

module.exports = router;
