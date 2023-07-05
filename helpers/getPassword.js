const { executeStoredProcedure } = require("./storedProcedure");

const getPassword = async (email, phone) => {
  const values = [email, phone];
  const result = await executeStoredProcedure("sp_get_password", [values]);
  const password = await result["0"].message;
  return password;
};

module.exports = getPassword;
