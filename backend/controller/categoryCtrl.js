const category = require("../models/categoryModel");

const asyncHandler = require("express-async-handler");


const createCategory = asyncHandler(async (req, res) => {
  try {
    
        
    const newCategory = await category.create(req.body);
    res.json(newCategory);
  } catch (error) {
    throw new Error(error);
  }
});




// getAllProduct
const getAllcategory = asyncHandler(async (req, res) => {
  
    try {
      const getallProduct = await category.find();
      res.json(getallProduct);
    } catch (error) {
      throw new Error(error);
    }
  });

  

  
module.exports = {
    createCategory,
    getAllcategory
    
   
  };