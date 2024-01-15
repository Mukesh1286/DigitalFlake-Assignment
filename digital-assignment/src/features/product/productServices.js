import axios from "axios";

const API_URL = '/api/'


const createProduct = async (category, productname, packsize, price, status, token) => {   
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    }
  const response = await axios.post(API_URL + 'productdata/createproducts', {category, productname, packsize, price, status}, config);
  if (response.data) {
    // localStorage.setItem("admin", JSON.stringify(response.data));
  }
  return response.data;
};

const getProduct = async (token) => {   
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    }
  const response = await axios.get(API_URL + 'productdata/getproductDetails',config);
  if (response.data) {
    // localStorage.setItem("admin", JSON.stringify(response.data));
  }
  return response.data;
};


const productServices = {
    createProduct,
    getProduct
    
};

export default productServices;