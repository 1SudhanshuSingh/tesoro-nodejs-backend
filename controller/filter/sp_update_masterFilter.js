const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const updateMasterFilter = (req, res) => {

  const { filterId, filterName, filterOption } = req.body.params;
  const values = [filterId, filterName, JSON.stringify(filterOption)];
  // const values = [
  //   req.body.filterId,
  //   req.body.filterName,
  //   req.body.filterOption,
  // ];
  executeStoredProcedure("sp_update_masterFilter", [values]).then((result) => {
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

module.exports = updateMasterFilter;
