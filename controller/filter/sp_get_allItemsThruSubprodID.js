const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const getAllItemsThruSubProdId = (req, res) => {
  const values = [subProdId];
  executeStoredProcedure("sp_get_allItemsThruSubprodID", [values]).then((result) => {
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

module.exports = getAllItemsThruSubProdId;
