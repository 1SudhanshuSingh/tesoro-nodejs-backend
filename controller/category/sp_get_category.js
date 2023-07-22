const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const getCategory = (req, res) => {
  const { catID } = req.body.params;
  const values = [catID];
  console.log(values);
  executeStoredProcedure("sp_get_category", [values]).then((result) => {
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

module.exports = getCategory;
