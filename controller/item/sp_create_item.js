const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const setUserBlock = (req, res) => {
  const values = [
    req.body.subProdId,
    req.body.itemSku,
    req.body.qty,
    req.body.active,
    req.body.price,
    req.body.image,
    req.body.filterValues,
  ];
  executeStoredProcedure("sp_create_item", [values]).then(
    (result) => {
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
    }
  );
};

module.exports = setUserBlock;
