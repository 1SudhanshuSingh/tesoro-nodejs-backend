const { executeStoredProcedure } = require("../../helpers/storedProcedure");

// const path = require("path");
const upload = require("../../helpers/multer");

const productFilterList = ["product1", "product2", "product3"];
const jsonData = JSON.stringify(productFilterList);

const createProduct = (req, res) => {
  // console.log(req.body, req.file);
  // const image = req.file.productImage;
  const values = [
    req.body.categoryId,
    req.body.productName,
    req.body.productDescription,
    // "test", // req.body.productImage,
    req.body.file ? req.file.path : "", // Store the image path in the database if file exists
    req.body.productActive ? "T" : "F",
    req.body.productSequence,
    jsonData,
    // JSON.stringify(req.body.productFilterList),
  ];
  console.log("values", values);

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
