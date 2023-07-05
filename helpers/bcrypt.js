const bcrypt = require("bcrypt");
const saltRounds = 10;

const generateHashPwd = (password) => bcrypt.hashSync(password, saltRounds);

const comparePasswords = async (password, hashedPassword) => {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (error) {
    throw new Error("Error comparing passwords");
  }
}

module.exports = { generateHashPwd, comparePasswords };
