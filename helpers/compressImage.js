const sharp = require("sharp");

const compressImage = (req) => {
  const imagePath = req.file.path;
  const image = sharp(imagePath);
  image
    .resize(800, 600)
    .jpeg({ quality: 80 })
    .toFile(`${imagePath}-optimized`, (err, info) => {
      if (err) {
        return err;
      }
      fs.unlinkSync(imagePath);
      fs.renameSync(`${imagePath}-optimized`, imagePath);
    });
};

module.exports = compressImage;