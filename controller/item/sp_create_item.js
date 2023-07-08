const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const createItem = (req, res) => {
  const values = [
    req.body.subProdId,
    req.body.itemSku,
    req.body.qty,
    req.body.active,
    req.body.price,
    req.body.images,
    req.body.filterValues,
    req.body.detail,
  ];
  executeStoredProcedure("sp_create_item", [values]).then((result) => {
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
        console.log(error);
        throw error;
      }
    }
  });
};

module.exports = createItem;
