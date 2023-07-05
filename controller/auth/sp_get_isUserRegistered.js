const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const isUserRegistered = (req, res) => {
  const countryCode = req.body.countryCode.replace("+", "");
  const values = [
    countryCode,
    req.body.mobile,
    req.body.emailid,
  ];
  executeStoredProcedure("sp_get_isUserRegistered", [values]).then((result) => {
    if (result["0"]["output"] < 0) {
      res.json({ ...result["0"] });
    } else {
      try {
        res.json({
          ...result["0"],
          status: 200,
          jsonResponse: JSON.parse(result["0"].jsonResponse),
          token: result["0"].jsonResponse ? token : null,
        });
      } catch (error) {
        throw error;
      }
    }
  });
};

module.exports = isUserRegistered;
