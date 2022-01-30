const express = require("express");
const multer = require("multer");
const {
  addProduct,
  getProduct,
  getAllProducts,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();
const imageStorage = require("../utils/imageStorage");
const imageUpload = multer({ storage: imageStorage });

router.get("/:id", getProduct);
router.get("/", getAllProducts);
router.post("/", imageUpload.single("image"), addProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
