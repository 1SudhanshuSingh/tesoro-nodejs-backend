const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const getAllCategory = (req, res) => {
  executeStoredProcedure("sp_getAll_category", [0]).then((result) => {
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

module.exports = getAllCategory;
