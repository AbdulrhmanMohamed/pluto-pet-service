import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const applyDoctor = createAsyncThunk('apply-doctor/user', async (doctor,{getState}) => {
    const {token}=getState().loginSlice;
    const { data } = await axios.post('api/user/apply-doctor', doctor,{
        headers:{
            'authorization':'Bearer'+'  '+ token
        }
    });
    // console.log('applyDoctor  data', data);
    return data;
})

const initialState = {
    applyDoctorMessage:null,
    applyDoctorError:null,
    applyDoctorErrMessage:null,
    applyDoctorSuccess:null,
}

const applyDoctorSlice = createSlice({
    name: 'apply-doctor',
    initialState,
   
    extraReducers: {
        [applyDoctor.pending]: (state) => {
            state.applyDoctorLoading = true;
           state.applyDoctorSuccess=null;
        },
        [applyDoctor.fulfilled]: (state, action) => {
            state.applyDoctorMessage = action.payload.message;
            state.applyDoctorSuccess=action.payload.success;
            state.applyDoctorLoading = false;
        },
        [applyDoctor.rejected]: (state,action) => {
            state.applyDoctorSuccess=false;
            state.applyDoctorMessage=null;
            state.applyDoctorError = true;
            // state.applyDoctorErrMessage=action.error.message.includes('400')?'Doctor Account Exist': 'some Thing Went Wrong When Applying to Doctor Account'
            
        }
    }
})

export default applyDoctorSlice.reducer

