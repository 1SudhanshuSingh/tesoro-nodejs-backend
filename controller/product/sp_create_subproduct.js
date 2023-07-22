const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const createSubProduct = (req, res) => {
  const values = [
    // req.body.subProdId,
    req.body.ProdID,
    // req.body.prodTags,
    JSON.stringify(req.body.FilterValues),
    // req.body.prodType,
    req.body.Name,
    req.body.Active,
    req.body.FilterList,
    req.file.filename,
  ];
  console.log(values);
  executeStoredProcedure("sp_create_subproduct", [values]).then((result) => {
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

module.exports = createSubProduct;
