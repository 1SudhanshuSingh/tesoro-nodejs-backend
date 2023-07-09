const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const createBuyerOrder = (req, res) => {
  const values = [
    req.body.buyerId, //check buyer_login table for this
    req.body.paymentId, //unique  check paymentId from order_table
    req.body.shippingAddressId,
    req.body.status,
    req.body.date,
  ];

  executeStoredProcedure("sp_create_buyerOrder", [values]).then((result) => {
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

module.exports = createBuyerOrder;
