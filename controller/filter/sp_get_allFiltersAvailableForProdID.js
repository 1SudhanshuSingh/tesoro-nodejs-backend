const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const getAllFilterAvailableForProdId = (req, res) => {
  const values = [req.body.prodID, req.body.maxFilterID, req.body.limit];

  executeStoredProcedure("sp_get_allFiltersAvailableForProdID", [values]).then(
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

module.exports = getAllFilterAvailableForProdId;
