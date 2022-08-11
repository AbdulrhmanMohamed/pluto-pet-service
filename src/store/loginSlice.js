import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk('login/user', async (user) => {
    const { data } = await axios.post('api/user/login', user);
    return data;
})

const initialState = {
    token: (localStorage.getItem('token'))?? null,
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logOut:(state)=>{
            state.token=null;
            localStorage.removeItem('token');
        }
    },
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.loginLoading = true;
        },
        [loginUser.fulfilled]: (state, action) => {
            state.token = action.payload.token;
           
            localStorage.setItem('token', action.payload.token)
            state.loginLoading = false;
        },
        [loginUser.rejected]: (state, action) => {
            state.loginError = true;
            
        }
    }
})

export default loginSlice.reducer
export const {logOut} = loginSlice.actions;

