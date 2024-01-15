import axios from "axios";

const API_URL = '/api/'


const createCategory = async (name, description, status, token) => {   
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    }
  const response = await axios.post(API_URL + 'category/create-category', {name, description, status}, config);
  if (response.data) {
    // localStorage.setItem("admin", JSON.stringify(response.data));
  }
  return response.data;
};

const getCategory = async (token) => {   
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    }
  const response = await axios.get(API_URL + 'category/getallCategory',config);
  if (response.data) {
    // localStorage.setItem("admin", JSON.stringify(response.data));
  }
  return response.data;
};

const categoryServices = {
    createCategory,
    getCategory
  
};

export default categoryServices;