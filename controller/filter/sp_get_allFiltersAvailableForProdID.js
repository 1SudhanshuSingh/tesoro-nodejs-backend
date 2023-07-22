const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const getAllFilterAvailableForProdId = (req, res) => {
  console.log(req.body.params);
  const { prodId, maxFilterId, limit } = req.body.params;

  const values = [prodId, maxFilterId, limit];
  // const values = [0, 0, 100];
  console.log(values);
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
