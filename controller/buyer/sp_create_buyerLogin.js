const { executeStoredProcedure } = require("../../helpers/storedProcedure");

const createBuyerLogin = (req, res) => {
  const values = [
    req.body.email,
    req.body.isdCode,
    req.body.mob,
    req.body.pwd,
    req.body.emailVerify,
    req.body.profilePlatform,
  ];
  console.log(values);

  executeStoredProcedure("sp_create_buyerLogin", [values]).then((result) => {
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

module.exports = createBuyerLogin;
