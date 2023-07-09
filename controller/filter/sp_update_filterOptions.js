const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const updateFilterOption = (req, res) => {
  const values = [req.body.optionId, req.body.optionName];
  executeStoredProcedure("sp_update_filterOptions", [values]).then((result) => {
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

module.exports = updateFilterOption;
