const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const getClientList = (req, res) => {
  const values = [req.body.fromDate, req.body.toDate];
  executeStoredProcedure("sp_get_clientList", [values]).then((result) => {
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

module.exports = getClientList;
