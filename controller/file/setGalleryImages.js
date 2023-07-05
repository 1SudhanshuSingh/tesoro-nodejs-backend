const { executeStoredProcedure } = require("../../helpers/storedProcedure");
const setUserGallery = async (req, res) => {
  let galleryImagesURIs = [];
  const prevImages = JSON.parse(req.body.PrevImg);
  if (prevImages.length > 0) {
    galleryImagesURIs = prevImages.map(
      (img) => `uploads/${req.body.userId}/${img}`
    );
  }
  galleryImagesURIs = [
    ...galleryImagesURIs,
    ...req.files.map((file) => `uploads/${req.body.userId}/${file.filename}`),
  ];

  const values = [req.body.userId, JSON.stringify(galleryImagesURIs)];
  executeStoredProcedure("sp_set_userGalleryImages", [values]).then(
    (result) => {
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
    }
  );
};

module.exports = setUserGallery;
