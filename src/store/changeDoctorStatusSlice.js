import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const changeDoctorStatus = createAsyncThunk('changeDoctorStatus/approveAccount', async (userDoctoData,{getState}) => {
   const{token}=getState().loginSlice;
    const { data } = await axios.post('/api/user/changeDoctorStatus',userDoctoData,{
        headers:{
            'authorization':'Bearer' +'  ' +token
        }
    });
    
    return data;
})

const initialState = {
   
    changeDoctorStatusMessage:null,
    changeDoctorStatusError:false,
    changeDoctorStatusErrMessage:null,
    changeDoctorStatusSuccess:false,
}

const changeDoctorStatusSlice = createSlice({
    name: 'changeDoctorStatus',
    initialState,
   
    extraReducers: {
        [changeDoctorStatus.pending]: (state) => {
            state.changeDoctorStatusLoading = true;
        },
        [changeDoctorStatus.fulfilled]: (state, action) => {
            
            state.changeDoctorStatusMessage = action.payload.message;
            state.changeDoctorStatusSuccess=action.payload.success;
            state.changeDoctorStatusLoading = false;
        },
        [changeDoctorStatus.rejected]: (state,action) => {
            state.changeDoctorStatusSuccess=false;
            state.changeDoctorStatusMessage=null;
            state.changeDoctorStatusError = true;
            // state.changeDoctorStatusErrMessage=action.error.message.includes('400')?'Doctor Account Exist': 'some Thing Went Wrong When Applying to Doctor Account'
            
        }
    }
})

export default changeDoctorStatusSlice.reducer

