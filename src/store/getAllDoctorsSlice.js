import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllDoctors = createAsyncThunk('getDoctors/all', async (dummy,{getState}) => {
    const {token}=getState().loginSlice;
    console.log('tokenfrom doctors',token)
    const { data } = await axios.get('/api/user/getAllDoctors',{
        headers:{
            'authorization':'Bearer'+'  '+ token
        }
    });
    
    return data;
})

const initialState = {
    doctors:null,
    getAllDoctorsMessage:null,
    getAllDoctorsError:false,
    getAllDoctorsErrMessage:null,
    getAllDoctorsSuccess:false,
}

const getAllDoctorsSlice = createSlice({
    name: 'getDoctors',
    initialState,
   
    extraReducers: {
        [getAllDoctors.pending]: (state) => {
            state.getAllDoctorsLoading = true;
        },
        [getAllDoctors.fulfilled]: (state, action) => {
            state.doctors=action.payload.res;
            state.getAllDoctorsMessage = action.payload.message;
            state.getAllDoctorsSuccess=action.payload.success;
            state.getAllDoctorsLoading = false;
        },
        [getAllDoctors.rejected]: (state,action) => {
            state.getAllDoctorsSuccess=false;
            state.getAllDoctorsMessage=null;
            state.getAllDoctorsError = true;
            // state.getAllDoctorsErrMessage=action.error.message.includes('400')?'Doctor Account Exist': 'some Thing Went Wrong When Applying to Doctor Account'
            
        }
    }
})

export default getAllDoctorsSlice.reducer

