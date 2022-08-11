import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const userInfoById=createAsyncThunk('user/infoById',async(token)=>{
    const {data}=await axios.get('/api/user/userInfoById',{
        headers:{
            'authorization':`Bearer  ${token}`,
        }
    })
    return data;
})
const initialState={
    user:null
}
export const userSlice=createSlice({
    name:'user',
    initialState,
    extraReducers:{
        [userInfoById.pending]:(state)=>{
            state.inofLoading=true;
        },
        [userInfoById.fulfilled]:(state,action)=>{
            state.user=action.payload.resData;
            state.success=action.payload.success;
            state.inofLoading=false
        },
        [userInfoById.rejected]:(state,action)=>{
            state.infoError=true;
            state.infoError=action.error.message;
            localStorage.clear()
        }
    }
})

export default userSlice.reducer;