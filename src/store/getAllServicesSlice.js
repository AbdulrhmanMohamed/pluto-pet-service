import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllServices = createAsyncThunk('getservices/all', async (dummy,{getState}) => {
    const {token}=getState().loginSlice;
    const { data } = await axios.get('/api/service/getAllService',{
        headers:{
            'authorization':'Bearer'+'  '+ token
        }
    });
    
    return data;
})

const initialState = {
    services:null,
    getAllServicesMessage:null,
    getAllServicesError:false,
    getAllServicesErrMessage:null,
    getAllServicesSuccess:false,
}

const getAllServicesSlice = createSlice({
    name: 'getservices',
    initialState,
   
    extraReducers: {
        [getAllServices.pending]: (state) => {
            state.getAllServicesLoading = true;
        },
        [getAllServices.fulfilled]: (state, action) => {
            state.services=action.payload.res;
            state.getAllServicesMessage = action.payload.message;
            state.getAllServicesSuccess=action.payload.success;
            state.getAllServicesLoading = false;
        },
        [getAllServices.rejected]: (state,action) => {
            state.getAllServicesSuccess=false;
            state.getAllServicesMessage=null;
            state.getAllServicesError = true;
            // state.getAllServicesErrMessage=action.error.message.includes('400')?'Doctor Account Exist': 'some Thing Went Wrong When Applying to Doctor Account'
            
        }
    }
})

export default getAllServicesSlice.reducer

