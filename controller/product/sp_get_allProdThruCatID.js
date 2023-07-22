const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const getAllProdThruCatId = (req, res) => {
  const values = [req.body.catId, req.body.maxProdId, req.body.limit];
  executeStoredProcedure("sp_get_allProdThruCatID", [values]).then((result) => {
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

module.exports = getAllProdThruCatId;
