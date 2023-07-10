const createItem = require("../controller/item/sp_create_item");

const getItem = require("../controller/item/sp_get_item");
const getItemList = require("../controller/item/sp_get_itemList");
const updateItem = require("../controller/item/sp_update_item");
// const updateItemDetail = require("../controller/item/sp_update_itemDetail");

const express = require("express"),
  router = express.Router();

router.post("/createItem", (req, res) => {
  createItem(req, res);
});

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
