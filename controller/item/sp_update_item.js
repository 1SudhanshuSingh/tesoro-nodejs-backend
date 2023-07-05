const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const setUserBlock = (req, res) => {
  const values = [
    req.body.id,
    req.body.sku,
    req.body.qty,
    req.body.active,
    req.body.price,
    req.body.name,
    req.body.image,
    req.body.itemVariations,
  ];
  executeStoredProcedure("sp_update_item", [values]).then(
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
