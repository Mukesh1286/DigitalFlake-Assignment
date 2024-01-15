const express = require("express");
const {
  createProduct,
  
  getAllProduct,
  
  
} = require("../controller/productCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/createproducts", authMiddleware, isAdmin, createProduct);

router.get("/getproductDetails",authMiddleware, isAdmin, getAllProduct);




module.exports = router;
