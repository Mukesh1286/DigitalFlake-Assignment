import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import LoadingComponent from '../../LoadingComponent/LoadingComponent';
import { productAction } from '../../../features/product/productSlice';



const AddProduct = () => {
     //dispatch
     const navigate = useNavigate();
     const dispatch = useDispatch();
     const [formData, setFormData] = useState("");
      
     //---Destructuring---
     const {category, productname, packsize,price,status } = formData;
 
     //---onchange handler----
     const onChangeHandler = (e) => {
         setFormData({ ...formData, [e.target.name]: e.target.value });         
     };
 
     //---onsubmit handler----
     const onSubmitHandler = (e) => {
         e.preventDefault();
         dispatch(productAction({ category, productname, packsize,price,status }));
         
     };
 
     //get data from store 
     const { categorys } = useSelector((state) => state.category)
     const { isSuccess, isLoading } = useSelector((state) => state.product)
    
    

 let users = [
    {
        status: "Active",
      
    },
    {
        status: "Inactive",
      
    },
    
  ]
    return (
        <>
            <section>
                <div class="container">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class=" cardboder">
                                <div class="text-center mt-5">
                                     <form onSubmit={onSubmitHandler}>
                                    <div className='mb-5 addhead'>
                                        <h3>Add Product</h3>
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <select 
                                         name="category"
                                         value={category}
                                         onChange={onChangeHandler}
                                        id="inputState" 
                                        class="form-select">
                                             <option>select option.....</option> 
                                            {categorys?.map((item) => (
                                            <>                                                                                                                              
                                            <option key={item}>{item.name}</option>
                                            </>
                                           
                                            ))}
                                        </select>
                                    </div>
                                    <div class="form-outline form-white mb-4">
                                        <input 
                                         name="productname"
                                         value={productname}
                                         onChange={onChangeHandler}
                                        type="productname" 
                                        id="typeEmailX" 
                                        placeholder='Add product name' 
                                        class="form-control form-control-lg" />

                                    </div>
                                    <div class="form-outline form-white mb-4">
                                        <input 
                                         name="packsize"
                                         value={packsize}
                                         onChange={onChangeHandler}
                                        type="packsize" 
                                        id="typeEmailX" 
                                        placeholder='Enter Pack size' 
                                        class="form-control form-control-lg" />

                                    </div>
                                    <div class="form-outline form-white mb-4">
                                        <input
                                         name="price"
                                         value={price}
                                         onChange={onChangeHandler} 
                                        type="price"                                        
                                        id="typeEmailX" 
                                        placeholder='Enter price' 
                                        class="form-control form-control-lg" />

                                    </div>                                   

                                    <div class="form-outline form-white mb-4">                                       
                                        <select 
                                         name="status"
                                         value={status}
                                         onChange={onChangeHandler}
                                        id="inputState" 
                                        class="form-select">
                                             <option>select option.....</option> 
                                            {users?.map((item) => (
                                            <>                                                                                                                              
                                            <option  key={item}>{item.status}</option>
                                            </>
                                           
                                            ))}
                                        </select>
                                    </div>

                                    <div class="d-grid gap-2 mb-2">
                                       
                                        {isLoading ? (
                                                 <LoadingComponent/>
                                               ) : (                                                
                                                <button className="p-2 buttonrest" type="submit">Add Category</button>
                                             )}  
                                    </div>



                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AddProduct