import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  data: null,
};

export const userLogin = createAsyncThunk("login/userLogin", async (user,) => {
    const {data}=await axios.post("http://localhost:1337/api/auth/local",user)
    return data
});


const loginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
})
export const selectLogin =({login})=>login
export default loginSlice.reducer
