import axios from "axios";


const API_URL = '/api/'


const login = async ({email, password}) => {   
     
  const response = await axios.post(API_URL + 'user/login', {email, password});
  if (response.data) {
    localStorage.setItem("admin", JSON.stringify(response.data));
  }
  return response.data;
};

// admin Logout
const adminlogout = () => {
  localStorage.removeItem('admin')
}


const authService = {
  login,
  adminlogout
};

export default authService;