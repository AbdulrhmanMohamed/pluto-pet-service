import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getServiceProfile = createAsyncThunk('getServiceProfile/serviceData', async (dummy,{getState}) => {
   const {token}=getState().loginSlice;
    const { data } = await axios.get('/api/user/getServiceProfile',{
        headers:{
            'authorization':'Bearer' +'  ' +token
        }
    });
    
    return data;
})

const initialState = {
   
    serviceProfileData:null,
    getServiceProfileMessage:null,
    getServiceProfileError:false,
    getServiceProfileErrMessage:null,
    getServiceProfileSuccess:false,
}

const getServiceProfileSlice = createSlice({
    name: 'getServiceProfile',
    initialState,
   
    extraReducers: {
        [getServiceProfile.pending]: (state) => {
            state.getServiceProfileLoading = true;
        },
        [getServiceProfile.fulfilled]: (state, action) => {
            state.serviceProfileData=action.payload.res;
            state.getServiceProfileMessage = action.payload.message;
            state.getServiceProfileSuccess=action.payload.success;
            state.getServiceProfileLoading = false;
        },
        [getServiceProfile.rejected]: (state,action) => {
            state.getServiceProfileSuccess=false;
            state.getServiceProfileMessage=null;
            state.getServiceProfileError = true;
            // state.getServiceProfileErrMessage=action.error.message.includes('400')?'Doctor Account Exist': 'some Thing Went Wrong When Applying to Doctor Account'
            
        }
    }
})

export default getServiceProfileSlice.reducer

