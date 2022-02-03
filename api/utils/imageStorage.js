const { diskStorage } = require("multer");
const _ = require("lodash");

module.exports = diskStorage({
  destination: "./public/",
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = _.last(file.originalname.split("."));
    cb(null, `${uniqueSuffix}.${fileExtension}`);
  },
});
