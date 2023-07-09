const createBuyerLogin = require("../controller/buyer/sp_create_buyerLogin");
const createBuyerOrder = require("../controller/buyer/sp_create_buyerOrder");
const createBuyerCart = require("../controller/buyer/sp_create_buyerCart");

const express = require("express"),
  router = express.Router();

router.post("/createBuyerLogin", (req, res) => {
  createBuyerLogin(req, res);
});
router.post("/createBuyerCart", (req, res) => {
  createBuyerCart(req, res);
});
router.post("/createBuyerOrder", (req, res) => {
  createBuyerOrder(req, res);
});
router.post("/createBuyerAddress", (req, res) => {
  createBuyerAddress(req, res);
});

module.exports = router;
