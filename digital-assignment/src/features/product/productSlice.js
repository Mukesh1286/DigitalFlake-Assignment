import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productServices from "./productServices";



const initialState = {
  product: {},
  products: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
  };

  //category action
  export const productAction = createAsyncThunk(
    "product/productAction",
    async ({ category, productname, packsize, price, status}, thunkAPI) => {
      try {
        // const { name, description,status} = data;
        console.log({category, productname, packsize, price, status})
        

        const token = thunkAPI.getState()?.auth?.admin?.token
        // const {email, password} = data;
        return await productServices.createProduct(category, productname, packsize, price, status, token);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
        
      }
    }
  );

//getProduct action
export const getProductAction = createAsyncThunk(
    "getProduct/getProductAction",
    async (_, thunkAPI) => {
      try {
        // const { name, description,status} = data;
        // console.log({name, description,status})
        

        const token = thunkAPI.getState()?.auth?.admin?.token
        // const {email, password} = data;
        return await productServices.getProduct(token);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
        
      }
    }
  );
  

  export const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      //category
    builder.addCase(productAction.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(productAction.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload;
        state.message = "success";
      });
      builder.addCase(productAction.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      });

        //Getcategory
    builder.addCase(getProductAction.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(getProductAction.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
        state.message = "success";
      });
      builder.addCase(getProductAction.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      });
        
    },
        
   

    
  });
  
  export default productSlice.reducer;