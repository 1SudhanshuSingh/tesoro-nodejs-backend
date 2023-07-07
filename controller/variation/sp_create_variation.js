const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const createVariation = (req, res) => {
  const values = [req.body.variationName, req.body.variationJson];
  executeStoredProcedure("sp_create_variation", [values]).then((result) => {
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

module.exports = createVariation;