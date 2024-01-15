import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryServices from "./categoryServices";



const initialState = {
  category: {},
  categorys: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
  };

  //category action
  export const categoryAction = createAsyncThunk(
    "category/categoryAction",
    async ({ name, description,status}, thunkAPI) => {
      try {
        // const { name, description,status} = data;
        console.log({name, description,status})
        

        const token = thunkAPI.getState()?.auth?.admin?.token
        // const {email, password} = data;
        return await categoryServices.createCategory(name, description,status,token);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
        
      }
    }
  );

//Getcategory action
export const GetcategoryAction = createAsyncThunk(
    "Getcategory/GetcategoryAction",
    async (_, thunkAPI) => {
      try {
        // const { name, description,status} = data;
        // console.log({name, description,status})
        

        const token = thunkAPI.getState()?.auth?.admin?.token
        // const {email, password} = data;
        return await categoryServices.getCategory(token);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
        
      }
    }
  );
  

  export const categorySlice = createSlice({
    name: "category",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      //category
    builder.addCase(categoryAction.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(categoryAction.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.category = action.payload;
        state.message = "success";
      });
      builder.addCase(categoryAction.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      });

        //Getcategory
    builder.addCase(GetcategoryAction.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(GetcategoryAction.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.categorys = action.payload;
        state.message = "success";
      });
      builder.addCase(GetcategoryAction.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      });
        
    },
        
   

    
  });
  
  export default categorySlice.reducer;