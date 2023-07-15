const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // const userId = req.body.userId;
    const uploadPath = path.join(__dirname, "../uploads");
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const fileName =
      req.body.fileName || Date.now() + path.extname(file.originalname);
    cb(null, fileName);
  },
});

// Multer upload configuration
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5 MB
  },

  fileFilter: function (req, file, cb) {
    const profilePicExt = file.mimetype.split("/")[1];
    const allowedExtensions = ["jpg", "jpeg", "png"];
    const extension = profilePicExt.toLowerCase();
    if (allowedExtensions.includes(extension)) {
      cb(null, true);
    } else {
      cb(new Error("Only .jpg, .jpeg, and .png files are allowed"));
    }
  },
  encoding: "utf8",
});
const handleMulterError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // Handle Multer-specific errors
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        message: "File size limit exceeded",
      });
    }
    // Handle other Multer errors if needed
  } else if (err) {
    // Handle other errors
    return res.status(500).json({
      message: "An error occurred during file upload",
    });
  }

  // No error occurred, proceed to the next middleware
  next();
};

module.exports = { upload, handleMulterError };
