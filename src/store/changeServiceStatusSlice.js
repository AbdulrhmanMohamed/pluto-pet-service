import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const changeServiceStatus = createAsyncThunk('changeServiceStatus/approveAccount', async (serviceData,{getState}) => {
   const{token}=getState().loginSlice;
    const { data } = await axios.post('/api/service/changeServiceStatus',serviceData,{
        headers:{
            'authorization':'Bearer' +'  ' +token
        }
    });
    
    return data;
})

const initialState = {
   
    changeServiceStatusMessage:null,
    changeServiceStatusError:false,
    changeServiceStatusErrMessage:null,
    changeServiceStatusSuccess:false,
}

const changeServiceStatusSlice = createSlice({
    name: 'changeServiceStatus',
    initialState,
   
    extraReducers: {
        [changeServiceStatus.pending]: (state) => {
            state.changeServiceStatusLoading = true;
        },
        [changeServiceStatus.fulfilled]: (state, action) => {
            
            state.changeServiceStatusMessage = action.payload.message;
            state.changeServiceStatusSuccess=action.payload.success;
            state.changeServiceStatusLoading = false;
        },
        [changeServiceStatus.rejected]: (state,action) => {
            state.changeServiceStatusSuccess=false;
            state.changeServiceStatusMessage=null;
            state.changeServiceStatusError = true;
            // state.changeServiceStatusErrMessage=action.error.message.includes('400')?'Doctor Account Exist': 'some Thing Went Wrong When Applying to Doctor Account'
            
        }
    }
})

export default changeServiceStatusSlice.reducer

