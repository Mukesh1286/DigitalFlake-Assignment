import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Component/Form/Login';
import ForgotPassword from './Component/Form/ForgotPassword';
import AdminDashboard from './Component/Admin/AdminDashboard';
import WelComeAdmin from './Component/Admin/WelComeAdmin';
import GetAllCategory from './Component/Admin/Categories/GetAllCategory';
import AddCategory from './Component/Admin/Categories/AddCategory';
import GetAllProduct from './Component/Admin/Product/GetAllProduct';
import AddProduct from './Component/Admin/Product/AddProduct';

function App() {
  return (
    <>
      <BrowserRouter>
      
    
      <Routes>
        {/* nested route */}
       
        <Route path="admin" element={<AdminDashboard />}>
          {/* products */} 
          <Route path="" element={<WelComeAdmin />} />
          <Route path="getAllCategory" element={<GetAllCategory />} />
          <Route path="addCategory" element={<AddCategory />} />
          <Route path="getAllProduct" element={<GetAllProduct />} />
          <Route path="addProduct" element={<AddProduct />} />
          
        </Route>
       
        {/* users */}
        <Route path="/" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
       
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
