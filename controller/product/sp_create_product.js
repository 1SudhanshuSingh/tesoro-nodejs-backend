const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const createProduct = (req, res) => {
  const values = [
    req.body.catID,
    req.body.name,
    req.body.description,
    req.body.image,
    req.body.active,
    req.body.type,
    req.body.sequence,
    req.body.filterList,
  ];
  executeStoredProcedure("sp_create_product", [values]).then((result) => {
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

module.exports = createProduct;
