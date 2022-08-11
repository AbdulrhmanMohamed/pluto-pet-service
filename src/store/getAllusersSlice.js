import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllUsers = createAsyncThunk('getUsers/all', async (dummy,{getState}) => {
    const {token}=getState().loginSlice;
    const { data } = await axios.get('/api/user/getAllUsers',{
        headers:{
            'authorization':'Bearer'+'  '+ token
        }
    });
    
    return data;
})

const initialState = {
    users:null,
    getAllUsersMessage:null,
    getAllUsersError:false,
    getAllUsersErrMessage:null,
    getAllUsersSuccess:false,
}

const getAllUsersSlice = createSlice({
    name: 'getUsers',
    initialState,
   
    extraReducers: {
        [getAllUsers.pending]: (state) => {
            state.getAllUsersLoading = true;
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.users=action.payload.res;
            state.getAllUsersMessage = action.payload.message;
            state.getAllUsersSuccess=action.payload.success;
            state.getAllUsersLoading = false;
        },
        [getAllUsers.rejected]: (state,action) => {
            state.getAllUsersSuccess=false;
            state.getAllUsersMessage=null;
            state.getAllUsersError = true;
            // state.getAllUsersErrMessage=action.error.message.includes('400')?'Doctor Account Exist': 'some Thing Went Wrong When Applying to Doctor Account'
            
        }
    }
})

export default getAllUsersSlice.reducer

