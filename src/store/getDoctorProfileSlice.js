import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDoctorProfile = createAsyncThunk('getDoctorProfile/data', async (dummy,{getState}) => {
   const {token}=getState().loginSlice;
    const { data } = await axios.get('/api/user/getDoctorProfile',{
        headers:{
            'authorization':'Bearer' +'  ' +token
        }
    });
    
    return data;
})

const initialState = {
   
    doctorProfileData:null,
    getDoctorProfileMessage:null,
    getDoctorProfileError:false,
    getDoctorProfileErrMessage:null,
    getDoctorProfileSuccess:false,
}

const getDoctorProfileSlice = createSlice({
    name: 'getDoctorProfile',
    initialState,
   
    extraReducers: {
        [getDoctorProfile.pending]: (state) => {
            state.getDoctorProfileLoading = true;
        },
        [getDoctorProfile.fulfilled]: (state, action) => {
            state.doctorProfileData=action.payload.res;
            state.getDoctorProfileMessage = action.payload.message;
            state.getDoctorProfileSuccess=action.payload.success;
            state.getDoctorProfileLoading = false;
        },
        [getDoctorProfile.rejected]: (state,action) => {
            state.getDoctorProfileSuccess=false;
            state.getDoctorProfileMessage=null;
            state.getDoctorProfileError = true;
            // state.getDoctorProfileErrMessage=action.error.message.includes('400')?'Doctor Account Exist': 'some Thing Went Wrong When Applying to Doctor Account'
            
        }
    }
})

export default getDoctorProfileSlice.reducer

