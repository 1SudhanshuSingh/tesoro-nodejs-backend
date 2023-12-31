const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const updateSubProduct = (req, res) => {
  const values = [
    req.body.subProdId,
    req.body.subProdProdId,
    // req.body.prodTags,
    req.body.filterValues,
    // req.body.prodType,
    req.body.name,
    req.body.active,
    req.body.filterList,
    req.body.image,
  ];
  executeStoredProcedure("sp_update_subproduct", [values]).then((result) => {
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

module.exports = updateSubProduct;
