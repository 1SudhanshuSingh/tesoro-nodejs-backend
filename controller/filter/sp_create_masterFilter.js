const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const createMasterFilter = (req, res) => {
  const values = [req.body.filterName, req.body.filterOption];
  executeStoredProcedure("sp_create_masterFilter", [values]).then((result) => {
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

module.exports = createMasterFilter;
