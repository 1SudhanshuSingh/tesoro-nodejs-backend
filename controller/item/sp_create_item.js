const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const createItem = (req, res) => {

  const values = [
    req.body.subProdId,
    req.body.ItemSku,
    req.body.ItemQty,
    req.body.ItemActive,
    req.body.ItemPrice,
    // req.body.ItemImage,
    // Get the paths of the uploaded images
    JSON.stringify(itemImages), // Convert to string
    JSON.stringify(req.body.ItemFilterValues), // Convert to string
    req.body.ItemDetail,
  ];

  executeStoredProcedure("sp_create_item", [values]).then((result) => {
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
        console.log(error);
        throw error;
      }
    }
  });
};

module.exports = createItem;
