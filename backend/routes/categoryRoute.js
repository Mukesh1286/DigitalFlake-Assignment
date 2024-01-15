const express = require("express");
const {
  createCategory,
  
  getAllcategory,
} = require("../controller/categoryCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/create-category", authMiddleware, isAdmin, createCategory);

router.get("/getallCategory", getAllcategory);

module.exports = router;