const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const createFilter = (req, res) => {
  const values = [req.body.filterName, req.body.filterOptions];
  executeStoredProcedure("sp_create_filter", [values]).then((result) => {
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

module.exports = createFilter;