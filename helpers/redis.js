const redis = require("redis");
const client = redis.createClient();

client.on("error", function (error) {
  console.error(error);
});

const setData = (key, value) => {
  return new Promise((resolve, reject) => {
    client.set(key, value, (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  });
};

const getData = (key) => {
  return new Promise((resolve, reject) => {
    client.get(key, (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  });
};

module.exports = { setData, getData };