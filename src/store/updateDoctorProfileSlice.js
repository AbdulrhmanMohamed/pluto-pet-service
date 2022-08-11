import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updateDoctorProfile = createAsyncThunk('updateDoctorProfile/data', async (values,{getState}) => {
    const {token}=getState().loginSlice;
    const { data } = await axios.post('/api/user/updateDoctorProfile',values,{
        headers:{
            'authorization':'Bearer' +'  ' +token
        }
    });
    
    return data;
})

const initialState = {
   
    res:null,
    
    updateDoctorProfileError:false,
    updateDoctorProfileErrMessage:null,
}

const updateDoctorProfileSlice = createSlice({
    name: 'updateDoctorProfile',
    initialState,
   
    extraReducers: {
        [updateDoctorProfile.pending]: (state) => {
            state.updateDoctorLoading = true;
        },
        [updateDoctorProfile.fulfilled]: (state, action) => {
           state.res=action.payload;
           state.updateDoctorLoading=false;
        },
        [updateDoctorProfile.rejected]: (state,action) => {
            state.errMessage=action.error.message;
            // state.updateDoctorProfileErrMessage=action.error.message.includes('400')?'Doctor Account Exist': 'some Thing Went Wrong When Applying to Doctor Account'
            
        }
    }
})

export default updateDoctorProfileSlice.reducer

