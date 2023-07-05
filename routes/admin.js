const getClientList = require("../controller/admin/sp_get_clientList_admin");
const createEmployee = require("../controller/admin/sp_create_empLogin");
const express = require("express"),
  router = express.Router();

router.post("/getAllCustomers", (req, res) => {
  getClientList(req, res);
});

router.post("/createEmployee", (req, res) => {
  createEmployee(req, res);
});

module.exports = router;
