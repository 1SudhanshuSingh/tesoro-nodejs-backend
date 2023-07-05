const getPassword = require("../../helpers/getPassword");
const { executeStoredProcedure } = require("../../helpers/storedProcedure"),
  { createToken, verifyToken } = require("../../helpers/jwt"),
  { comparePasswords } = require("../../helpers/bcrypt");

const userEmailAuth = async (req, res) => {
  const hashedPassword = await getPassword(req.body.emailid, req.body.isocode);
  if (!hashedPassword) {
    res.send({
      status: false,
      error: "No user found",
    });
  } else {
    const isPasswordTrue = await comparePasswords(
      req.body.password,
      hashedPassword
    );
    const values = [req.body.emailid, isPasswordTrue];
    const token = createToken({ ...values });
    executeStoredProcedure("sp_get_userEmailAuth", [values]).then((result) => {
      if (result["0"]["output"] < 0) {
        res.json(result);
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
  }
};

const userMobilelAuth = async (req, res) => {
  const mobileWithCountryCode = req.body.isdCode.replace("+", "");
  const hashedPassword = await getPassword(
    req.body.mobile,
    mobileWithCountryCode
  );
  if (!hashedPassword) {
    res.send({
      status: false,
      error: "No user found",
    });
  } else {
    const isPasswordTrue = await comparePasswords(
      req.body.password,
      hashedPassword
    );
    const values = [req.body.isdCode, req.body.mobile, isPasswordTrue];
    const token = createToken({ ...values });
    executeStoredProcedure("sp_get_userMobileAuth", [values]).then((result) => {
      if (result["0"]["output"] < 0) {
        res.json(result);
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
  }
};

module.exports = { userEmailAuth, userMobilelAuth };
