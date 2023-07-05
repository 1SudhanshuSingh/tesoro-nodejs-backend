const { executeStoredProcedure } = require("../../helpers/storedProcedure"),
  { generateHashPwd, checkHashPwd } = require("../../helpers/bcrypt");

const createEmployee = (req, res) => {
  const hashedPwd = generateHashPwd(req.body.password);
  const values = [
    req.body.emailid,
    req.body.isdcode,
    req.body.mobile,
    hashedPwd,
    req.body.employeeType,
    req.body.officeId,
    req.body.role,
    req.body.otpRequire,
  ];
  executeStoredProcedure("sp_create_empLogin", [values]).then((result) => {
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

module.exports = createEmployee;
