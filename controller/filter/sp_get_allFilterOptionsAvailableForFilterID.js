const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const getallFilterOptionsAvailableForFilterID = (req, res) => {
  const values = [req.body.optionId, req.body.optionName, req.body.clause];
  executeStoredProcedure("sp_get_allFilterOptionsAvailableForFilterID", [values]).then((result) => {
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

module.exports = getallFilterOptionsAvailableForFilterID;
