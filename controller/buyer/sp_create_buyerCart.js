const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const createBuyerCart = (req, res) => {
  const values = [
    req.body.buyerId, //check buyer_login table for this
    req.body.itemId, //check item table for this
    req.body.itemQty,
    req.body.status,
    req.body.timeDate,
  ];
  console.log(values);

  executeStoredProcedure("sp_create_buyerCart", [values]).then((result) => {
    if (result["0"]["output"] < 0) {
      res.json(result);
    } else {
      try {
        res.json({
          ...result["0"],
          jsonResponse: JSON.parse(result["0"].jsonResponse),
          status: 200,
        });
      } catch (error) {
        throw error;
      }
    }
  });
};

module.exports = createBuyerCart;
