const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");


const createProduct = asyncHandler(async (req, res) => {
  try { 
    
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
});




// getAllProduct
const getAllProduct = asyncHandler(async (req, res) => {
  
    try {
      const getallProduct = await Product.find();
      res.json(getallProduct);
    } catch (error) {
      throw new Error(error);
    }
  });

  
  

  
module.exports = {
    createProduct,
   
    getAllProduct,
    
   
  };