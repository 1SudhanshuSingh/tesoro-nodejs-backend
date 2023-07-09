const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const createBuyerAddress = (req, res) => {
  const values = [
    req.body.buyerId,
    req.body.address,
    req.body.city,
    req.body.state,
    req.body.country,
    req.body.pinCode,
    req.body.isDefault,
  ];
  console.log(values);

  executeStoredProcedure("sp_create_buyerAddress", [values]).then((result) => {
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

module.exports = createBuyerAddress;
