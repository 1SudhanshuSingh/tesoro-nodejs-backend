const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const getMasterFilter = (req, res) => {
  const { filterId, filterName, useLikeClause } = req?.body;
  const values = [filterId, filterName, useLikeClause];
  executeStoredProcedure("sp_get_masterFilter", [values]).then((result) => {
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

module.exports = getMasterFilter;
