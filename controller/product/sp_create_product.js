const { executeStoredProcedure } = require("../../helpers/storedProcedure");

// const path = require("path");
const upload = require("../../helpers/multer");

const createProduct = (req, res) => {
  const values = [
    req.body.categoryId,
    req.body.productName,
    req.body.productDescription,

    req.file.filename,
    req.body.productActive,
    req.body.productSequence,

    req.body.productFilterList,
  ];
  console.log(values);
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
