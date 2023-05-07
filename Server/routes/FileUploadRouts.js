const multer = require("multer");
const { Router } = require("express");
const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    if (
      file.mimetype !== "image/png" &&
      file.mimetype !== "image/jpg" &&
      file.mimetype !== "image/gif" &&
      file.mimetype !== "image/jpeg"
    ) {
      return callback(new Error("Only images are allowed"));
    }
    callback(null, true);
  },
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});

router.post("/file", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully!");
});

app.post("/files", upload.array("files"), (req, res) => {
  res.send("Files uploaded successfully!");
});
