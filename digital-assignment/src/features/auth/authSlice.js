import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authServices";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('admin'))
const initialState = {
  admin: user ? user : null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
  };

  //login action
  export const loginAction = createAsyncThunk(
    "auth/loginAction",
    async ({email, password}, thunkAPI) => {
      try {
        // const {email, password} = data;
        return await authService.login({email, password});
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

    //adminlogout Action
  export const logoutAction = createAsyncThunk(
    'auth/adminlogout',
    async () => {
      authService.adminlogout()
    })
  

  export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      //login
    builder.addCase(loginAction.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(loginAction.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.admin = action.payload;
        state.message = "success";
      });
      builder.addCase(loginAction.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      });

      //adminlogout
      builder.addCase(logoutAction.fulfilled, (state) => {
        state.admin = null
      })
        
    },
  });
  
  export default authSlice.reducer;