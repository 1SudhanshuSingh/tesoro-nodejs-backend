const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const getallFilterOptionsAvailableForFilterID = (req, res) => {
  const { filterListID, maxFilterOptionID, limit } = req.body.params;
  const values = [filterListID, maxFilterOptionID, limit];

  executeStoredProcedure("sp_get_allFilterOptionsAvailableForFilterID", [
    values,
  ]).then((result) => {
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
