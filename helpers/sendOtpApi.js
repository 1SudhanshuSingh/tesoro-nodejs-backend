const axios = require("axios");

const sendOtpApi = async (isdMobile, OTP) => {
  const userId = "royalsms";
  const password = "rzee7118RZ";
  const senderId = "royalM";
  const onlyMobileNo = isdMobile.substring(2);
  const msg = `Your OTP to register mobile with Royal Matrimonial is ${OTP}. royalM`;
  const entityID = "1701158080483210201";
  templateId = "1707168253151288617";

  const otpApi = `http://nimbusit.biz/api/SmsApi/SendSingleApi?UserID=${userId}&Password=${password}&SenderID=${senderId}&Phno=${onlyMobileNo}&Msg=${msg}&EntityID=${entityID}&TemplateID=${templateId}`;
  try {
    const response = await axios.get(otpApi);
    return response.data;
  } catch (error) {
    return error;
  }
};

module.exports = sendOtpApi;
