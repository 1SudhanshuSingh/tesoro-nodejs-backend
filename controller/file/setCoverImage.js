const { executeStoredProcedure } = require("../../helpers/storedProcedure");
const setUserCoverImage = async (req, res) => {
  const coverPhotoURI = req.files.map(
    (file) => `uploads/${req.body.userId}/${file.filename}`
  );
  const values = [req.body.userId, coverPhotoURI[0]];
  executeStoredProcedure("sp_set_userCoverImage", [values]).then((result) => {
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
        res.send(error);
      }
    }
  });
};

module.exports = setUserCoverImage;
