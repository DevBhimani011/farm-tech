const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/search", itemController.searchItems);
router.get("/items", itemController.getAllItems);
router.get("/showPro", itemController.showPro);
router.post("/add", upload.single("image"), itemController.addProduct);
router.delete("/deleteProduct/:id", itemController.deleteProduct);
router.get("/searchProduct", itemController.searchItems);
router.post("/add", itemController.addProduct);

module.exports = router;


