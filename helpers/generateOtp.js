const crypto = require("crypto");

const generateOTP = () => {
  const OTP_LENGTH = 6;
  const randomInt = crypto.randomInt(Math.pow(10, OTP_LENGTH));
  const OTP = randomInt.toString().padStart(OTP_LENGTH, "0");

  return OTP;
};

module.exports = generateOTP;
