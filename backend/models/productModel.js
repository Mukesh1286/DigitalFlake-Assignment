const mongoose = require("mongoose"); // Erase if already required


var productSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      
    },
   
    productname: {
      type: String,
      required: true,
      
    },
    packsize: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    
   
   
   
    
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Product", productSchema);