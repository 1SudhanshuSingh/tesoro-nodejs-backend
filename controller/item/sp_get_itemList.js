const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const setUserBlock = (req, res) => {
  const values = [
    req.body.prodId,
    req.body.lowerPrice,
    req.body.upperPrice,
    req.body.variation,
    req.body.sortBy,
    req.body.ascDesc,
  ];
  executeStoredProcedure("sp_get_itemList", [values]).then(
    (result) => {
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
    }
  );
};

module.exports = setUserBlock;
